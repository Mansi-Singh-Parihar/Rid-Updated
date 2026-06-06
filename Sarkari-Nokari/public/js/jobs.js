
document.documentElement.style.scrollBehavior = 'smooth';
function getCategoryFromText(text) {
  const t = (text || "").toLowerCase();

  if (/(bank|ibps|sbi|rbi|nabard|gramin)/.test(t)) return "Banking";
  if (/(railway|rrb|secr|ecr|wcr|ncr|scr|ner)/.test(t)) return "Railway";
  if (/(army|navy|air force|crpf|bsf|cisf|itbp|ssb|police|military|defence)/.test(t)) return "Defence";
  if (/(upsc|ssc|central|union)/.test(t)) return "Central Government";
  if (/(up|bihar|mp|rajasthan|punjab|haryana|gujarat|maharashtra)/.test(t)) return "State Government";
  if (/(nta|jee|neet|cuet|cat|gate)/.test(t)) return "Entrance Exam";
  if (/(court|judiciary)/.test(t)) return "Judiciary";
  if (/(psu|ongc|bhel|hal|bel|sail|ntpc|gail)/.test(t)) return "PSU";
  if (/(cbse|kvs|nvs|school|education)/.test(t)) return "Education";

  return "Government";
}


document.addEventListener("DOMContentLoaded", () => {
  highlightFromHash();
  // setupCopyLinks();
  showActiveStateFilter();
  setupCategoryFilters();
});

window.addEventListener("hashchange", highlightFromHash);

function highlightFromHash() {
  const id = window.location.hash.slice(1);
  if (!id) return;

  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({ behavior: "smooth", block: "center" });

  el.style.transition = "box-shadow 0.3s ease, border-color 0.3s ease";
  el.style.boxShadow  = "0 0 0 3px #e6b422";
  el.style.borderColor = "#e6b422";

  setTimeout(() => {
    el.style.boxShadow   = "";
    el.style.borderColor = "";
  }, 2500);
}

// function setupCopyLinks() {
//   document.querySelectorAll(".modern-card[id]").forEach((card) => {
//     const btn = document.createElement("button");
//     btn.className   = "btn btn-copy";
//     btn.textContent = "🔗 Copy Link";
//     btn.title       = "Copy direct link to this card";

//     btn.addEventListener("click", () => {
//       const url = `${location.origin}${location.pathname}#${card.id}`;
//       navigator.clipboard
//         .writeText(url)
//         .then(() => {
//           btn.textContent = "✅ Copied!";
//           setTimeout(() => (btn.textContent = "🔗 Copy Link"), 2000);
//         })
//         .catch(() => {
//           prompt("Copy this link:", url);
//         });
//     });

//     const firstBtn = card.querySelector(".card-footer a, .card-footer .btn-disabled");
//     const footer   = card.querySelector(".card-footer");
//     if (footer) footer.insertBefore(btn, firstBtn);
//   });
// }

function showActiveStateFilter() {
  const params = new URLSearchParams(window.location.search);
  const state  = params.get("state");
  if (!state) return;

  const stateNames = {
    central: "Central Govt / All India",
    ap: "Andhra Pradesh",   ar: "Arunachal Pradesh", as: "Assam",
    br: "Bihar",            cg: "Chhattisgarh",       ga: "Goa",
    gj: "Gujarat",          hr: "Haryana",             hp: "Himachal Pradesh",
    jh: "Jharkhand",        ka: "Karnataka",           kl: "Kerala",
    mp: "Madhya Pradesh",   mh: "Maharashtra",         mn: "Manipur",
    ml: "Meghalaya",        mz: "Mizoram",             nl: "Nagaland",
    od: "Odisha",           pb: "Punjab",              rj: "Rajasthan",
    sk: "Sikkim",           tn: "Tamil Nadu",          tg: "Telangana",
    tr: "Tripura",          up: "Uttar Pradesh",       uk: "Uttarakhand",
    wb: "West Bengal",      dl: "Delhi (NCT)",         jk: "Jammu & Kashmir",
    la: "Ladakh",           ch: "Chandigarh",          dd: "Dadra & Nagar Haveli",
    py: "Puducherry",
  };

  const label = stateNames[state.toLowerCase()] || state.toUpperCase();

  const banner = document.createElement("div");
  banner.className = "state-filter-banner";
  banner.innerHTML = `
    <span class="state-filter-icon">📌</span>
    <span class="state-filter-text">
      Showing jobs for <strong>${label}</strong>
    </span>
    <a href="/nokari/jobs" class="state-filter-clear">✕ Clear</a>
  `;

  const header = document.querySelector(".page-header");
  if (header) header.insertAdjacentElement("afterend", banner);

  document.title = `Jobs – ${label} | Sarkari Naukari`;
}

//category filter
function setupCategoryFilters() {
  const buttons = document.querySelectorAll(".nav-btn");
  let activeCategory = "";

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const clicked = btn.dataset.category;

      // ✅ ALL button = reset filter
      if (clicked === "All") {
        activeCategory = "";

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        filterCards();
        return;
      }

      // toggle logic
      if (activeCategory === clicked) {
        activeCategory = "";
        btn.classList.remove("active");
      } else {
        activeCategory = clicked;

        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      }

      filterCards();
    });
  });

  function filterCards() {

    // MAIN JOB CARDS
    const cards = document.querySelectorAll(".modern-card");

    cards.forEach(card => {

      const category = (card.dataset.category || "").toLowerCase();

      const match =
        !activeCategory ||
        category === activeCategory.toLowerCase();

      card.style.display = match ? "" : "none";

    });


    // TOP JOB INDEX LIST
    const indexItems = document.querySelectorAll(".job-index-item");

    indexItems.forEach(item => {

      const category = (item.dataset.category || "").toLowerCase();

      const match =
        !activeCategory ||
        category === activeCategory.toLowerCase();

      item.style.display = match ? "flex" : "none";

    });

      // UPDATE COUNT
    const visibleCards = document.querySelectorAll(
      '.modern-card:not([style*="display: none"])'
    );

    const badge = document.getElementById("jobCountBadge");

    if (badge) {
      badge.textContent = `${visibleCards.length} Available`;
    }

  }
}

const disclaimerToggle = document.getElementById('disclaimerToggle');
const disclaimerBox = document.querySelector('.disclaimer-box');

if (disclaimerToggle && disclaimerBox) {
  disclaimerToggle.addEventListener('click', function () {
    const isExpanded = disclaimerBox.classList.toggle('expanded');
    this.textContent = isExpanded ? '▴ Less' : '▾ More';
  });
}