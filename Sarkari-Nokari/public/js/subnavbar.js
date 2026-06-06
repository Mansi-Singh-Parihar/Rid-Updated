
if (window.innerWidth <= 768) {

  let lastScrollTop = 0;
  const subNavbar = document.querySelector('.navbar-wrapper');

  window.addEventListener('scroll', () => {
    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    // Top par hamesha visible
    if (currentScroll <= 10) {
      subNavbar.classList.remove('hide-subnav');
      lastScrollTop = currentScroll;
      return;
    }

    // Scroll Down = Hide
if (currentScroll > lastScrollTop && currentScroll > 80) {
    subNavbar.classList.add('hide-subnav');
} else {
    subNavbar.classList.remove('hide-subnav');
}
    lastScrollTop = currentScroll;
  });
}
