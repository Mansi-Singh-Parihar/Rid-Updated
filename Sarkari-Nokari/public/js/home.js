// ==================================
// REDIRECT VIEW MORE BUTTONS TO NAVBAR LINKS
// ==================================

function getNavLinkHref(searchText) {
    const navLinks = document.querySelectorAll('nav a, .nav a, .navbar a, header a, .menu a');
    for (let link of navLinks) {
        const text = link.innerText.trim().toLowerCase();
        if (text.includes(searchText.toLowerCase())) {
            return link.getAttribute('href');
        }
    }
    return null;
}

function attachRedirectEvents() {
    const resultsBtn = document.querySelector('.view-more-results');
    if (resultsBtn) {
        resultsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = getNavLinkHref('result') || '/result';
        });
    }

    const admitBtn = document.querySelector('.view-more-admit');
    if (admitBtn) {
        admitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = getNavLinkHref('admit') || '/admit';
        });
    }

    const jobsBtn = document.querySelector('.view-more-jobs');
    if (jobsBtn) {
        jobsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = getNavLinkHref('job') || '/jobs';
        });
    }


}

document.addEventListener('DOMContentLoaded', () => {
    attachRedirectEvents();
});


  const toggleBtn = document.getElementById("toggleStatesBtn");
  const hiddenStates = document.querySelectorAll(".hidden-state");

  let expanded = false;

  toggleBtn.addEventListener("click", () => {

    expanded = !expanded;

    hiddenStates.forEach(state => {
      state.style.display = expanded ? "flex" : "none";
    });

    toggleBtn.querySelector("span:last-child").textContent =
      expanded
        ? "Show Less States"
        : "View More States";
  });




function toggleFaq(qEl) {
  const item = qEl.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  // Open clicked (if it was closed)
  if (!isOpen) item.classList.add('open');
} 