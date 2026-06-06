const axios = require("axios");
const cheerio = require("cheerio");

const PAGES = [
  {
    id: "latest_jobs",
    name: "Latest Jobs",
    url: "https://sarkariresult.com.cm/latest-jobs/",
    emoji: "💼",
  },
  {
    id: "results",
    name: "Results",
    url: "https://sarkariresult.com.cm/result/",
    emoji: "📊",
  },
  {
    id: "admit_card",
    name: "Admit Cards",
    url: "https://sarkariresult.com.cm/admit-card/",
    emoji: "🪪",
  },
];

const httpClient = axios.create({
  timeout: 15000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120.0.0.0 Safari/537.36",
    Accept: "text/html,application/xhtml+xml,*/*;q=0.8",
    "Accept-Language": "en-US,en;q=0.5",
  },
});

function parsePage(html, pageId) {
  const $ = cheerio.load(html);
  const items = [];

  const selectors = [
    "table tr td a",
    ".entry-content li a",
    ".post-content li a",
    "article li a",
    ".inside-article li a",
    "#main li a",
  ];

  for (const selector of selectors) {
    $(selector).each((i, el) => {
      const $el = $(el);

      const title = $el.text().trim();
      const link = $el.attr("href") || "";

      if (!title || title.length < 5) return;

      const parentText = $el.closest("tr, li").text().trim();

      const dateMatch = parentText.match(
        /(?:last\s*date|result\s*date|exam\s*date|date)[:\s]+(\d{1,2}[\s\-\/]\w+[\s\-\/]\d{2,4}|\d{1,2}\/\d{1,2}\/\d{2,4})/i
      );

      const date = dateMatch ? dateMatch[1].trim() : null;

      const id = (title + link)
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/-+/g, "-")
        .substring(0, 80);

      items.push({
        id,
        title,
        link: link.startsWith("http")
          ? link
          : "https://sarkariresult.com.cm" + link,
        date,
        scrapedAt: new Date().toISOString(),
      });
    });

    if (items.length > 0) break;
  }

  const seen = new Set();

  return items.filter((item) => {
    if (seen.has(item.id)) return false;

    seen.add(item.id);
    return true;
  });
}

async function scrapeAllPages() {
  const results = {};

  for (let i = 0; i < PAGES.length; i++) {
    const page = PAGES[i];

    try {
      console.log(`[Tracker] Scraping: ${page.name}`);

      const res = await httpClient.get(page.url);

      const items = parsePage(res.data, page.id);

      results[page.id] = {
        items,
        scrapedAt: new Date(),
      };

      console.log(`[Tracker] → ${items.length} items found`);
    } catch (err) {
      console.error(
        `[Tracker] Failed ${page.name}: ${err.message}`
      );

      results[page.id] = null;
    }

    if (i < PAGES.length - 1) {
      await new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );
    }
  }

  return results;
}

module.exports = {
  scrapeAllPages,
  PAGES,
};