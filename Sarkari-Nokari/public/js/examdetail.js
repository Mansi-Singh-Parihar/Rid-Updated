// Syllabus accordion
document.querySelectorAll('.syl-head').forEach(head => {
  head.addEventListener('click', () => {
    const item = head.closest('.syl-paper');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.syl-paper').forEach(p => p.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});

// TOC active link tracking
const secs = document.querySelectorAll('.ed-section[id]');
const tocLinks = document.querySelectorAll('.toc-link, .sb-toc-link');

if (secs.length && tocLinks.length) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        tocLinks.forEach(t => t.classList.remove('active'));
        const id = e.target.id;
        document.querySelectorAll(`.toc-link[href="#${id}"], .sb-toc-link[href="#${id}"]`).forEach(a => a.classList.add('active'));
      }
    });
  }, { rootMargin: '-10% 0px -70% 0px' });
  secs.forEach(s => obs.observe(s));
}