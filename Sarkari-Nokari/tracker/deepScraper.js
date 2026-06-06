
const axios = require("axios");
const cheerio = require("cheerio");
// ─────────────────────────────────────────────────────────────────────────────
// HTTP CLIENT
// ─────────────────────────────────────────────────────────────────────────────
const client = axios.create({
  timeout: 15000,
  headers: {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
  },
});

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const MONTH_MAP = {
  january:"01", february:"02", march:"03",    april:"04",
  may:"05",     june:"06",     july:"07",      august:"08",
  september:"09",october:"10", november:"11",  december:"12",
};

const ORG_KEYWORDS = [
  "UPSC","SSC","IBPS","SBI","RBI","RRB","CRPF","BSF","CISF","ITBP","SSB",
  "NTA","UPSSSC","UPPSC","BPSC","RPSC","MPSC","DRDO","ISRO","AIIMS","ESIC",
  "EPFO","FCI","ONGC","BHEL","HAL","BEL","SAIL","NTPC","PGCIL","BPSSC",
  "RSMSSB","RSSB","CBSE","MPESB","UPCISB","DSSSB","UKPSC","HPSC","GPSC",
  "WBPSC","OPSC","KPSC","TNPSC","TSPSC","APPSC","JPSC","CGPSC","APSC",
  "Railway","Police","Army","Navy","Air Force","High Court","Coast Guard",
];

const SELECTION_STEPS = [
  "Written Examination","Written Exam","CBT 1","CBT 2","CBAT",
  "Tier-1","Tier-2","Tier 1","Tier 2","Prelims","Mains",
  "Skill Test","Typing Test","Physical Test","PET","PST",
  "Document Verification","DV","Medical Examination","Medical","Interview",
  "Final Merit List",
];

// ─────────────────────────────────────────────────────────────────────────────
// DATE HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** "29 March 2026" | "29/03/2026" → "2026-03-29", else null */
function toISO(str) {
  if (!str) return null;
  str = str.replace(/\(.*?\)/g, "").trim();
  if (/^\d{4}-\d{2}-\d{2}$/.test(str)) return str;
  const slash = str.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (slash) return `${slash[3]}-${slash[2].padStart(2,"0")}-${slash[1].padStart(2,"0")}`;
  const wordy = str.match(/^(\d{1,2})\s+(\w+)\s+(\d{4})$/);
  if (wordy) {
    const mon = MONTH_MAP[wordy[2].toLowerCase()];
    if (mon) return `${wordy[3]}-${mon}-${wordy[1].padStart(2,"0")}`;
  }
  return null;
}

/**
 * Parse a raw date value that may be a range ("01 – 15 June 2026"),
 * plain text ("Notify Later"), or a parseable date.
 * Returns { iso: string|null, raw: string }
 */
function parseDateValue(raw) {
  if (!raw) return { iso: null, raw: "" };
  const clean = raw.replace(/\(.*?\)/g, "").trim();
  // Range: contains – or - between numbers
  if (/\d\s*[–-]\s*\d/.test(clean)) return { iso: null, raw: clean };
  return { iso: toISO(clean), raw: clean };
}

// ─────────────────────────────────────────────────────────────────────────────
// CLASSIFICATION HELPERS
// ─────────────────────────────────────────────────────────────────────────────

function extractOrg(title) {
  const t = title.toUpperCase();
  for (const org of ORG_KEYWORDS) {
    if (t.includes(org.toUpperCase())) return org;
  }
  const m = title.match(/^([A-Z][A-Za-z&\s]{2,30}?)(?:\s+(?:Recruitment|Result|Admit|Online|Exam|CBT|Bharti))/);
  return m ? m[1].trim() : "";
}

function detectCategory(title, org) {
  const t = (title + " " + org).toLowerCase();
  if (/bank|ibps|sbi|rbi|nabard|gramin/.test(t))                                               return "Banking";
  if (/railway|rrb/.test(t))                                                                    return "Railway";
  if (/army|navy|air force|crpf|bsf|cisf|itbp|\bssb\b|police|military|defence|coast guard/.test(t)) return "Defence";
  if (/\bupsc\b|central\s+gov|union\s+public/.test(t))                                         return "Central Government";
  if (/nta|jee|neet|cuet|cat|gate/.test(t))                                                    return "Entrance Exam";
  if (/court|judiciary/.test(t))                                                               return "Judiciary";
  if (/psu|ongc|bhel|hal|bel|sail|ntpc|gail/.test(t))                                         return "PSU";
  if (/cbse|kvs|nvs|school|education/.test(t))                                                 return "Education";
  if (/health|medical|aiims|esic|hospital/.test(t))                                            return "Healthcare";
  return "Government";
}

/**
 * Detect state/jurisdiction.
 * Checks state-specific acronyms FIRST (more specific),
 * then falls back to central/banking/all-india.
 */
function detectState(title, org, bodySnippet) {
  const t = (title + " " + org + " " + bodySnippet).toLowerCase();

  const stateMap = [
    ["Uttar Pradesh",     /upsssc|uppsc|upcop|up\s+police|up\s+lekhpal|uttar\s+prad/],
    ["Bihar",             /\bbpsc\b|bpssc|bihar/],
    ["Rajasthan",         /\brpsc\b|rsmssb|rssb|rajasthan/],
    ["Madhya Pradesh",    /\bmpesb\b|mp\s+police|mp\s+vyapam|madhya\s+prad/],
    ["Maharashtra",       /mahapsc|maharashtra/],
    ["Punjab",            /\bppsc\b|punjab\s+psc|punjab/],
    ["Haryana",           /\bhpsc\b|haryana/],
    ["Gujarat",           /\bgpsc\b|gujarat/],
    ["Karnataka",         /\bkpsc\b|karnataka/],
    ["Tamil Nadu",        /\btnpsc\b|tamil\s*nadu/],
    ["West Bengal",       /\bwbpsc\b|west\s+bengal/],
    ["Jharkhand",         /\bjpsc\b|jpsssc|jharkhand/],
    ["Odisha",            /\bopsc\b|odisha|orissa/],
    ["Assam",             /\bapsc\b|assam/],
    ["Kerala",            /kerala\s+psc|kerala/],
    ["Telangana",         /telangana|\btspsc\b/],
    ["Andhra Pradesh",    /\bappsc\b|andhra/],
    ["Chhattisgarh",      /\bcgpsc\b|cgvyapam|chhattisgarh/],
    ["Uttarakhand",       /\bukpsc\b|uttarakhand/],
    ["Himachal Pradesh",  /\bhppsc\b|himachal/],
    ["Delhi",             /\bdsssb\b|delhi/],
    ["Goa",               /\bgoa\b/],
    ["Jammu & Kashmir",   /\bjkpsc\b|j&k|jammu.*kashmir/],
    ["Tripura",           /\btpsc\b|tripura/],
    ["Manipur",           /manipur/],
    ["Meghalaya",         /meghalaya/],
    ["Nagaland",          /nagaland/],
    ["Sikkim",            /sikkim/],
    ["Arunachal Pradesh", /arunachal/],
    ["Mizoram",           /mizoram/],
  ];

  for (const [state, regex] of stateMap) {
    if (regex.test(t)) return state;
  }

  if (/\bupsc\b|\bssc\b|\brrb\b|railway|crpf|bsf|cisf|itbp|isro|drdo|\bnta\b|all\s*india|union\s+public|indian\s+army|indian\s+navy|air\s+force|coast\s+guard|agniveer/.test(t))
    return "Central Government";

  if (/ongc|bhel|hal|bel|sail|ntpc|gail/.test(t))
    return "Central Government";

  return "All India";
}

// ─────────────────────────────────────────────────────────────────────────────
// HEADING-AWARE SECTION EXTRACTOR
// Iterates siblings after a heading, reads <li> items individually.
// Returns { label: value } pairs.
// ─────────────────────────────────────────────────────────────────────────────
function getSectionPairs($, ...keywords) {
  const heading = $("h1,h2,h3,h4,h5,h6").filter((_, el) => {
    const t = $(el).text().toLowerCase();
    return keywords.some(k => t.includes(k.toLowerCase()));
  }).first();

  if (!heading.length) return {};

  const pairs = {};

  function addLine(text) {
    const colon = text.indexOf(":");
    if (colon > 1) {
      const key = text.slice(0, colon).trim().toLowerCase().replace(/\s+/g, " ");
      const val = text.slice(colon + 1).trim();
      if (key && val && !pairs[key]) pairs[key] = val;
    }
  }

  let node = heading.next();
  while (node.length && !node.is("h1,h2,h3,h4,h5,h6")) {
    if (node.is("ul,ol")) {
      // Each <li> is one label:value item
      node.find("li").each((_, li) => addLine($(li).text().trim()));
    } else if (node.is("p,div")) {
      // Sometimes dates are in a plain paragraph
      const text = node.text().trim();
      // Split on newlines or multiple spaces
      text.split(/\n|\s{3,}/).forEach(line => addLine(line.trim()));
    } else if (node.is("table")) {
      // Some sections use a table
      node.find("tr").each((_, tr) => {
        const cells = $(tr).find("td").map((_, td) => $(td).text().trim()).get();
        if (cells.length >= 2) {
          const key = cells[0].toLowerCase().replace(/\s+/g, " ");
          const val = cells[1];
          if (key && val && !pairs[key]) pairs[key] = val;
        } else if (cells.length === 1) {
          addLine(cells[0]);
        }
      });
    }
    node = node.next();
  }

  return pairs;
}

/** Get section's full text (for eligibility / selection process) */
function getSectionText($, ...keywords) {
  const heading = $("h1,h2,h3,h4,h5,h6").filter((_, el) => {
    const t = $(el).text().toLowerCase();
    return keywords.some(k => t.includes(k.toLowerCase()));
  }).first();
  if (!heading.length) return "";
  let text = "", node = heading.next();
  while (node.length && !node.is("h1,h2,h3,h4,h5,h6")) {
    text += " " + node.text();
    node = node.next();
  }
  return text.replace(/\s+/g, " ").trim();
}

/** Get the article text body */
function getBody($) {
  return ($(".entry-content").text() || $("article").text() || $("body").text())
    .replace(/\s+/g, " ");
}

// ─────────────────────────────────────────────────────────────────────────────
// VACANCY TABLE PARSER
// ─────────────────────────────────────────────────────────────────────────────
function parseVacancyDetails($, body) {
  const details = { UR: null, OBC: null, EWS: null, SC: null, ST: null };

  // Try tables first
  $("table").each((_, table) => {
    $(table).find("tr").each((_, tr) => {
      const cells = $(tr).find("td").map((_, td) => $(td).text().trim()).get();
      if (cells.length >= 2) {
        const key = cells[0].toUpperCase().replace(/[^A-Z]/g, "");
        const val = parseInt(cells[1].replace(/,/g, ""), 10);
        if (!isNaN(val) && ["UR","OBC","EWS","SC","ST"].includes(key)) {
          details[key] = val;
        }
      }
    });
  });

  // Fallback: bullet list style ("General 224" or "UR : 4860")
  const cats = { UR: /(?:^|\s)UR\s*[:\-]?\s*(\d[\d,]*)/im, OBC: /(?:^|\s)OBC\s*[:\-]?\s*(\d[\d,]*)/im, EWS: /(?:^|\s)EWS\s*[:\-]?\s*(\d[\d,]*)/im, SC: /(?:^|\s)SC\s*[:\-]?\s*(\d[\d,]*)/im, ST: /(?:^|\s)ST\s*[:\-]?\s*(\d[\d,]*)/im };
  for (const [cat, regex] of Object.entries(cats)) {
    if (details[cat] === null) {
      const m = body.match(regex);
      if (m) details[cat] = Number(m[1].replace(/,/g, ""));
    }
  }

  // Also try "General 224 OBC 151 EWS 56 SC 118 ST 11" pattern (bullet list without table)
  const generalMatch = body.match(/\bGeneral\s+(\d+)/i);
  if (generalMatch && details.UR === null) details.UR = Number(generalMatch[1]);

  return details;
}

// ─────────────────────────────────────────────────────────────────────────────
// SELECTION PROCESS
// ─────────────────────────────────────────────────────────────────────────────
function extractSelectionProcess($, body) {
  // Prefer the Mode of Selection table text
  let selectionText = "";
  $("table").each((_, table) => {
    const text = $(table).text();
    if (/mode\s+of\s+selection/i.test(text)) selectionText = text;
  });
  const source = selectionText || body;
  const found = [];
  for (const step of SELECTION_STEPS) {
    if (new RegExp(step, "i").test(source)) found.push(step);
  }
  return [...new Set(found)];
}

// ─────────────────────────────────────────────────────────────────────────────
// LINK EXTRACTOR
// Uses <tr> context: label is in first <td>, link is in second <td>
// Much more reliable than matching link text which is always "Click Here"
// ─────────────────────────────────────────────────────────────────────────────
function extractLinks($) {
  const links = {
    applyLink:        "",
    notificationLink: "",
    admitCardLink:    "",
    resultLink:       "",
    meritListLink:    "",
    officialSite:     "",
    syllabusLink:     "",
  };

  $("table tr").each((_, tr) => {
    const cells = $(tr).find("td");
    if (cells.length < 2) return;
    const label = $(cells[0]).text().toLowerCase().trim();
    // Could be multiple links in cell; take first valid one
    let href = "";
    $(cells[1]).find("a").each((_, a) => {
      const h = $(a).attr("href") || "";
      if (!href && h.startsWith("http")) href = h;
    });
    if (!href) return;

    if (!links.applyLink        && /apply\s*online|register\s*online|apply\s*here/i.test(label))              links.applyLink        = href;
    if (!links.notificationLink && /notification|official\s*notice|advt|advertisement|check\s*notice/i.test(label)) links.notificationLink = href;
    if (!links.admitCardLink    && /admit\s*card|download\s*admit|hall\s*ticket|e-admit/i.test(label))         links.admitCardLink    = href;
    if (!links.resultLink       && /result|scorecard|eligibility\s*result|check\s*result/i.test(label))        links.resultLink       = href;
    if (!links.meritListLink    && /merit\s*list|selected\s*list|dv\s*notice/i.test(label))                    links.meritListLink    = href;
    if (!links.officialSite     && /official\s*website|official\s*site/i.test(label))                         links.officialSite     = href;
    if (!links.syllabusLink     && /syllabus|exam\s*pattern/i.test(label))                                     links.syllabusLink     = href;
  });

  return links;
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED FIELD EXTRACTORS
// ─────────────────────────────────────────────────────────────────────────────
function extractAge($, body) {
  // Try heading section first, then full body
  const ageText = getSectionText($, "age limit", "age limits") || body;

  // Multi-role age (e.g. Army with different roles)
  const multiAge = [];
  const mp = /([A-Za-z][A-Za-z\s\/()]{3,50}):\s*(\d{2}(?:\.\d)?)\s*(?:to|–|-)\s*(\d{2}(?:\.\d)?)\s*[Yy]ears?/g;
  let mm;
  while ((mm = mp.exec(ageText)) !== null) {
    multiAge.push({ role: mm[1].trim(), min: parseFloat(mm[2]), max: parseFloat(mm[3]) });
  }
  if (multiAge.length > 1) {
    return {
      min: Math.min(...multiAge.map(a => a.min)),
      max: Math.max(...multiAge.map(a => a.max)),
      roles: multiAge,
    };
  }

  const minM   = ageText.match(/(?:minimum|min\.?)\s*age[:\s]*(\d{2})/i);
  const maxM   = ageText.match(/(?:maximum|max\.?)\s*age[:\s]*(\d{2})/i);
  const rangeM = ageText.match(/age[:\s]*(\d{2})\s*(?:to|–|-)\s*(\d{2})\s*years?/i);

  return {
    min: minM ? Number(minM[1]) : (rangeM ? Number(rangeM[1]) : null),
    max: maxM ? Number(maxM[1]) : (rangeM ? Number(rangeM[2]) : null),
    roles: [],
  };
}

function extractFee($, body) {
  const feeText = getSectionText($, "application fee", "fee") || body;
  const feeG = feeText.match(/(?:general|unreserved|ur|obc)[^\d]*(?:rs\.?|₹)?\s*(\d{3,4})/i);
  const feeS = feeText.match(/(?:sc|st|sc\/st)[^\d]*(?:rs\.?|₹)?\s*(\d{1,4})/i);
  const feeF = feeText.match(/(?:female|women)[^\d]*(?:rs\.?|₹)?\s*(\d{1,4})/i);
  const feeE = feeText.match(/(?:ex-serviceman|exsm|pwbd)[^\d]*(?:rs\.?|₹)?\s*(\d{1,4})/i);
  return {
    general:      feeG ? Number(feeG[1]) : null,
    scSt:         feeS ? Number(feeS[1]) : null,
    female:       feeF ? Number(feeF[1]) : null,
    exServiceman: feeE ? Number(feeE[1]) : null,
  };
}

function extractEligibility($, body) {
  // Try to get from the post name / eligibility table
  let eligText = "";
  $("table").each((_, table) => {
    const rows = $(table).find("tr");
    rows.each((_, tr) => {
      const cells = $(tr).find("td").map((_, td) => $(td).text().trim()).get();
      // Look for a table that has "Post Name" | "Eligibility Criteria" header
      if (cells.some(c => /eligibility\s*criteria/i.test(c))) {
        // Next rows have the eligibility
        rows.each((_, tr2) => {
          const c2 = $(tr2).find("td").map((_, td) => $(td).text().trim()).get();
          if (c2.length >= 2 && !/eligibility\s*criteria/i.test(c2[0])) {
            if (!eligText) eligText = c2[1].substring(0, 250);
          }
        });
        return false; // break
      }
    });
  });

  if (eligText) return eligText.replace(/\s+/g, " ").trim();

  // Fallback: regex on body
  const m = body.match(/(10th|12th|graduate|graduation|degree|diploma|b\.?tech|b\.?e|mba|mca|post\s*graduate|iti|d\.pharma|b\.pharma)\s+[^\n.]{0,150}/i);
  return m ? m[0].replace(/\s+/g, " ").trim().substring(0, 200) : "";
}

function extractTotalPosts(body) {
  const m = body.match(/(?:total\s*post|total\s*vacanc|no\s*of\s*post)[^\d]*(\d[\d,]*)/i);
  return m ? Number(m[1].replace(/,/g, "")) : null;
}

// ─────────────────────────────────────────────────────────────────────────────
// JOB SCRAPER
// ─────────────────────────────────────────────────────────────────────────────
function scrapeJob($, body) {
  const title = $("h1").first().text().trim() || $(".entry-title").first().text().trim();
  const org   = extractOrg(title);

  const dp = getSectionPairs($, "important dates", "dates");

  const notificationDateRaw = dp["official notification"] || dp["notification date"] || dp["post date"] || "";
  const applyStartRaw       = dp["online apply start date"] || dp["apply start date"] || dp["application start date"] || dp["start date"] || "";
  const lastDateRaw         = dp["online apply last date"] || dp["apply online last date"] || dp["last date to apply"] || dp["last date"] || "";
  const examDateRaw         = dp["exam date"] || dp["examination date"] || dp["written exam"] || "Notify Later";
  const admitCardInfo       = dp["admit card"] || dp["hall ticket"] || "";
  const feeLastDateRaw      = dp["last date for fee payment"] || dp["fee payment last date"] || "";
  const correctionDateRaw   = dp["correction date"] || dp["correction last date"] || "";

  const examParsed = parseDateValue(examDateRaw);

  const age        = extractAge($, body);
  const fee        = extractFee($, body);
  const links      = extractLinks($);

  return {
    title,
    organization:      org,
    category:          detectCategory(title, org),
    state:             detectState(title, org, body.slice(0, 600)),
    notificationDate:  toISO(notificationDateRaw),
    applyStartDate:    toISO(applyStartRaw),
    lastDate:          toISO(lastDateRaw),
    feeLastDate:       toISO(feeLastDateRaw),
    correctionDate:    correctionDateRaw || null,
    examDate:          examParsed.iso || examParsed.raw || "Notify Later",
    admitCardInfo,
    totalPosts:        extractTotalPosts(body),
    eligibility:       extractEligibility($, body),
    ageMin:            age.min,
    ageMax:            age.max,
    ageRoles:          age.roles.length ? age.roles : undefined,
    feeGeneral:        fee.general,
    feeSCST:           fee.scSt,
    feeFemale:         fee.female,
    feeExServiceman:   fee.exServiceman,
    vacancyDetails:    parseVacancyDetails($, body),
    selectionProcess:  extractSelectionProcess($, body),
    applyLink:         links.applyLink,
    notificationLink:  links.notificationLink,
    syllabusLink:      links.syllabusLink,
    officialSite:      links.officialSite,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// RESULT SCRAPER
// ─────────────────────────────────────────────────────────────────────────────
function scrapeResult($, body) {
  const title = $("h1").first().text().trim() || $(".entry-title").first().text().trim();
  const org   = extractOrg(title);

  const dp = getSectionPairs($, "important dates", "dates");

  const applyStartRaw = dp["online apply start date"] || dp["apply start date"] || dp["start date"] || "";
  const applyLastRaw  = dp["online apply last date"]  || dp["last date"] || "";
  const examDateRaw   = dp["exam date"] || dp["examination date"] || "";
  const resultDateRaw = dp["result date"] || dp["result declared"] || dp["result released"] || "";

  const examParsed = parseDateValue(examDateRaw);

  // Result type detection
  const tb = (title + " " + body.slice(0, 500)).toLowerCase();
  let resultType = "Result";
  if      (/final\s*result/.test(tb))               resultType = "Final Result";
  else if (/prelim/.test(tb))                        resultType = "Prelims Result";
  else if (/mains?/.test(tb))                        resultType = "Mains Result";
  else if (/skill\s*test/.test(tb))                  resultType = "Skill Test Result";
  else if (/phase[- ]?ii/.test(tb))                  resultType = "Phase-II Result";
  else if (/eligibility/.test(tb))                   resultType = "Eligibility Result";
  else if (/merit\s*list/.test(tb))                  resultType = "Merit List";
  else if (/scorecard/.test(tb))                     resultType = "Scorecard";
  else if (/cut\s*off/.test(tb))                     resultType = "Cut Off Marks";
  else if (/interview/.test(tb))                     resultType = "Interview List";
  else if (/tier[- ]?2|tier[- ]?ii/.test(tb))        resultType = "Tier-II Result";
  else if (/tier[- ]?1|tier[- ]?i/.test(tb))         resultType = "Tier-I Result";
  else if (/answer\s*key/.test(tb))                  resultType = "Answer Key";

  const links = extractLinks($);

  return {
    title,
    organization:   org,
    category:       detectCategory(title, org),
    state:          detectState(title, org, body.slice(0, 600)),
    applyStartDate: toISO(applyStartRaw),
    applyLastDate:  toISO(applyLastRaw),
    examDate:       examParsed.iso || examParsed.raw || "",
    resultDate:     toISO(resultDateRaw),
    resultType,
    totalPosts:     extractTotalPosts(body),
    selectionProcess: extractSelectionProcess($, body),
    resultLink:     links.resultLink,
    meritListLink:  links.meritListLink,
    officialSite:   links.officialSite,
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// ADMIT CARD SCRAPER
// ─────────────────────────────────────────────────────────────────────────────
function scrapeAdmit($, body) {
  const title = $("h1").first().text().trim() || $(".entry-title").first().text().trim();
  const org   = extractOrg(title);

  const dp = getSectionPairs($, "important dates", "dates");

  const applyStartRaw = dp["online apply start date"] || dp["apply start date"] || dp["start date"] || "";
  const applyLastRaw  = dp["online apply last date"]  || dp["last date"] || "";
  const examDateRaw   = dp["exam date"] || dp["examination date"] || "";
  const admitRaw      = dp["admit card"] || dp["hall ticket"] || "";

  const examParsed  = parseDateValue(examDateRaw);
  // Strip "Available Now" etc. before parsing release date
  const admitClean  = admitRaw.replace(/available\s*now|out\s*now|released/i, "").trim();
  const admitParsed = parseDateValue(admitClean);

  const timeMatch = body.match(/reporting\s*time[:\s]*(\d{1,2}[:.]\d{2}\s*(?:am|pm)?)/i);
  const noteMatch = body.match(/(?:compulsory|mandatory|carry|bring|note|important\s*note)[:\s]+([^.]{10,150})/i);

  const age  = extractAge($, body);
  const fee  = extractFee($, body);
  const links = extractLinks($);

  return {
    title,
    organization:  org,
    category:      detectCategory(title, org),
    state:         detectState(title, org, body.slice(0, 600)),
    applyStartDate:toISO(applyStartRaw),
    applyLastDate: toISO(applyLastRaw),
    releaseDate:   admitParsed.iso,
    releaseDateRaw:admitRaw,
    examDate:      examParsed.iso || examParsed.raw || "",
    reportingTime: timeMatch ? timeMatch[1].trim() : "",
    totalPosts:    extractTotalPosts(body),
    eligibility:   extractEligibility($, body),
    ageMin:        age.min,
    ageMax:        age.max,
    ageRoles:      age.roles.length ? age.roles : undefined,
    fee: {
      general:      fee.general,
      scSt:         fee.scSt,
      female:       fee.female,
      exServiceman: fee.exServiceman,
    },
    selectionProcess: extractSelectionProcess($, body),
    downloadLink:  links.admitCardLink,
    applyLink:     links.applyLink,
    officialSite:  links.officialSite,
    note:          noteMatch ? noteMatch[1].replace(/\s+/g, " ").trim() : "",
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────────────────────────────────────
async function deepScrape(url, type) {
  const res  = await client.get(url);
  const $    = cheerio.load(res.data);
  const body = getBody($);

  let data;
  if      (type === "result") data = scrapeResult($, body);
  else if (type === "admit")  data = scrapeAdmit($, body);
  else                        data = scrapeJob($, body);

  data.pageType  = type;
  data.sourceUrl = url;
  data.scrapedAt = new Date().toISOString();

  return data;
}

module.exports = {
  deepScrape
};