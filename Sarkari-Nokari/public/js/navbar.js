// ===== MOBILE SEARCH ELEMENTS =====
const searchToggleMobile = document.getElementById('searchToggleMobile');
const searchOverlay      = document.getElementById('searchOverlay');
const searchInputMobile  = document.getElementById('searchInputMobile');
const searchBtnMobile    = document.getElementById('searchBtnMobile');

// ===== DESKTOP SEARCH ELEMENTS =====
const searchInputDesktop = document.getElementById('searchInputDesktop');
const searchBtnDesktop   = document.getElementById('searchBtnDesktop');

// ===== MOBILE MENU ELEMENTS =====
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const subNavbar = document.querySelector('.navbar-wrapper');
// =========================================================
// FUNCTION: Common Search
// =========================================================
function performSearch(query) {
  if (query && query.trim()) {
    window.location.href = '/nokari/search?q=' + encodeURIComponent(query.trim());
  }
}

// =========================================================
// DESKTOP SEARCH
// =========================================================
if (searchBtnDesktop) {
  searchBtnDesktop.addEventListener('click', function () {
    performSearch(searchInputDesktop.value);
  });
}

if (searchInputDesktop) {
  searchInputDesktop.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') performSearch(searchInputDesktop.value);
  });
}

// =========================================================
// MOBILE SEARCH TOGGLE (Open / Close Overlay)
// =========================================================
if (searchToggleMobile) {
  searchToggleMobile.addEventListener('click', function () {
    searchOverlay.classList.toggle('open');
    // Close mobile menu if open
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (searchOverlay.classList.contains('open') && searchInputMobile) {
      setTimeout(function () { searchInputMobile.focus(); }, 100);
    }
  });
}

// =========================================================
// MOBILE SEARCH BUTTON CLICK
// =========================================================
if (searchBtnMobile) {
  searchBtnMobile.addEventListener('click', function () {
    performSearch(searchInputMobile.value);
    searchOverlay.classList.remove('open');
  });
}

// =========================================================
// MOBILE SEARCH ENTER KEY
// =========================================================
if (searchInputMobile) {
  searchInputMobile.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      performSearch(searchInputMobile.value);
      searchOverlay.classList.remove('open');
    }
  });
}

// =========================================================
// MOBILE MENU TOGGLE (Hamburger)
// =========================================================

if (hamburger) {
  hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
    // Close search overlay if open
    if (searchOverlay) searchOverlay.classList.remove('open');
    if (subNavbar) {
      subNavbar.style.display = mobileMenu.classList.contains('open') ? 'none' : '';
    }
  });
}

// DESKTOP STATE DROPDOWN — SIRF ARROW PE HOVER
document.querySelectorAll('.drop-btn').forEach(function (btn) {
  let hoverTimer;
  const item = document.getElementById(btn.dataset.target);

  btn.addEventListener('mouseenter', function () {
    clearTimeout(hoverTimer);
    // Baaki saare close karo
    document.querySelectorAll('.nav-item.open').forEach(function (el) {
      if (el !== item) el.classList.remove('open');
    });
    item.classList.add('open');
  });
  

  // Dropdown pe jaate waqt bhi open rahe
  item.querySelector('.dropdown').addEventListener('mouseenter', function () {
    clearTimeout(hoverTimer);
  });

  // Dono se bahar jaate hi close ho
  btn.addEventListener('mouseleave', function () {
    hoverTimer = setTimeout(function () {
      item.classList.remove('open');
    }, 200);
  });

  item.querySelector('.dropdown').addEventListener('mouseleave', function () {
    hoverTimer = setTimeout(function () {
      item.classList.remove('open');
    }, 200);
  });
});

// Click bhi kaam kare
document.querySelectorAll('.drop-btn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const item = document.getElementById(btn.dataset.target);
    item.classList.toggle('open');
  });
});

// Drop button click bhi kaam kare (mobile/keyboard users ke liye)
document.querySelectorAll('.drop-btn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const targetId = this.dataset.target;
    const item     = document.getElementById(targetId);
    item.classList.toggle('open');
  });
});

// =========================================================
// MOBILE STATE DROPDOWN
// =========================================================
document.querySelectorAll('.mobile-drop-btn').forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    e.stopPropagation();
    const targetId = this.dataset.target;
    const item     = document.getElementById(targetId);
    const isOpen   = item.classList.contains('open');

    // Close all open mobile dropdowns first
    document.querySelectorAll('.mobile-nav-item.open').forEach(function (el) {
      if (el.id !== targetId) el.classList.remove('open');
    });

    // Toggle the clicked one
    item.classList.toggle('open', !isOpen);
  });
});

// =========================================================
// CLOSE DESKTOP DROPDOWN ON OUTSIDE CLICK
// =========================================================
document.addEventListener('click', function (e) {
  if (!e.target.closest('#navbar')) {
    document.querySelectorAll('.nav-item.open').forEach(function (el) {
      el.classList.remove('open');
    });
  }
});

// =========================================================
// CLOSE SEARCH OVERLAY ON OUTSIDE CLICK
// =========================================================
document.addEventListener('click', function (e) {
  if (searchOverlay && searchOverlay.classList.contains('open')) {
    if (!e.target.closest('#navbar') && !e.target.closest('#searchOverlay')) {
      searchOverlay.classList.remove('open');
    }
  }
});

// =========================================================
// CLOSE MOBILE MENU ON OUTSIDE CLICK
// =========================================================
document.addEventListener('click', function (e) {
  if (mobileMenu && mobileMenu.classList.contains('open')) {
    if (!e.target.closest('#navbar') && !e.target.closest('#mobileMenu')) {
      mobileMenu.classList.remove('open');
      if (subNavbar) subNavbar.style.display = '';
    }
  }
});

// =========================================================
// ESCAPE KEY — Close everything
// =========================================================
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (searchOverlay)  searchOverlay.classList.remove('open');
    if (mobileMenu)     mobileMenu.classList.remove('open');
    if (subNavbar)      subNavbar.style.display = ''; 
    document.querySelectorAll('.nav-item.open').forEach(function (el) {
      el.classList.remove('open');
    });
    document.querySelectorAll('.mobile-nav-item.open').forEach(function (el) {
      el.classList.remove('open');
    });
  }
});




// =============================================
// SEARCH AUTOCOMPLETE
// =============================================
// =============================================
// SEARCH AUTOCOMPLETE
// =============================================
function setupAutocomplete(inputEl) {
  if (!inputEl) return;

  const box = document.createElement("div");
  box.className = "search-suggestions";

  inputEl.parentElement.style.position = "relative";
  inputEl.parentElement.appendChild(box);

  let timer;

  inputEl.addEventListener("input", function () {
    clearTimeout(timer);

    const q = this.value.trim();

    if (q.length < 1) {
      box.innerHTML = "";
      box.style.display = "none";
      return;
    }

    timer = setTimeout(async () => {
      try {
        const res = await fetch(
          "/nokari/api/suggestions?q=" +
          encodeURIComponent(q)
        );

        const data = await res.json();

        if (!data || data.length === 0) {
          box.innerHTML = "";
          box.style.display = "none";
          return;
        }

        box.innerHTML = data.map(item => {

  const title = (item.title || "").toLowerCase();

  let badge = "📋 Job";
  let badgeClass = "job";

  if (
    title.includes("admit") ||
    title.includes("hall ticket") ||
    title.includes("call letter")
  ) {
    badge = "🎫 Admit Card";
    badgeClass = "admit";
  }
  else if (
    title.includes("result") ||
    title.includes("merit") ||
    title.includes("score")
  ) {
    badge = "🏆 Result";
    badgeClass = "result";
  }

  return `
    <div
      class="suggestion-item"
      data-id="${item._id}"
      data-type="${badgeClass}"
      data-title="${item.title}"
    >
      <div class="sug-left">
        <div class="sug-title">${item.title}</div>
      </div>

      <div class="sug-right">
        <span class="type-badge ${badgeClass}">
          ${badge}
        </span>
      </div>
    </div>
  `;
}).join("");

        box.style.display = "block";

        box.querySelectorAll(".suggestion-item").forEach(el => {

          el.addEventListener("click", function () {

            const id = this.dataset.id;
            const type = (this.dataset.type || "").toLowerCase();

            let page = "/nokari/jobs";

            if (
              type.includes("admit")
            ) {
              page = "/nokari/admit";
            }
            else if (
              type.includes("result")
            ) {
              page = "/nokari/result";
            }
            else {
              page = "/nokari/jobs";
            }

            sessionStorage.setItem(
              "scrollTarget",
              id
            );

            window.location.href =
              page + "#" + id;
          });

        });

      } catch (err) {
        console.error(
          "Autocomplete error:",
          err
        );

        box.style.display = "none";
      }
    }, 250);
  });

  document.addEventListener("click", function (e) {
    if (
      !inputEl.parentElement.contains(
        e.target
      )
    ) {
      box.style.display = "none";
    }
  });
}

setupAutocomplete(
  document.getElementById(
    "searchInputDesktop"
  )
);

setupAutocomplete(
  document.getElementById(
    "searchInputMobile"
  )
);

