document.addEventListener('DOMContentLoaded', function () {

    // =========================
    // TAB SWITCHING
    // =========================
    window.switchTab = function (name, el) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
        if (el) el.classList.add('active');
        const targetTab = document.getElementById('tab-' + name);
        if (targetTab) targetTab.classList.add('active');
    };


// =========================
// DEFAULT TAB ON PAGE LOAD
// =========================
document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

// Always open Quick tab
document.getElementById('tab-btn-quick')?.classList.add('active');
document.getElementById('tab-quick')?.classList.add('active');
    // =========================
    // SCROLL TO RESULT — only after form submit
    // =========================
    const resultElement =
        document.querySelector('.profile-summary.visible') ||
        document.querySelector('.results-section.visible');

    if (resultElement && sessionStorage.getItem('scrollToResult') === '1') {
        sessionStorage.removeItem('scrollToResult');
        setTimeout(() => {
            const y = resultElement.getBoundingClientRect().top + window.pageYOffset - 90;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }, 300);
    }

    // =========================
    // LOADING SPINNER + SET SCROLL FLAG ON SUBMIT
    // =========================
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function () {
            // Flag to scroll after page reloads with results
            sessionStorage.setItem('scrollToResult', '1');
            const spinner = document.getElementById('loadingSpinner');
            if (spinner) spinner.style.display = 'flex';
        });
    });

    // =========================
    // DOB VALIDATION
    // =========================
    document.querySelectorAll('input[type="date"][name="dob"]').forEach(input => {
        input.addEventListener('change', function () {
            const dob = new Date(this.value);
            const cutoff = new Date();
            cutoff.setFullYear(cutoff.getFullYear() - 16);
            this.setCustomValidity(dob > cutoff ? 'You must be at least 16 years old' : '');
        });
    });

    // =========================
    // FAQ
    // =========================
    window.toggleFaq = function (btn) {
        btn.closest('.faq-item')?.classList.toggle('open');
    };

    // =========================
    // FILTER EXAMS
    // =========================
    window.filterExams = function (category) {
        document.querySelectorAll('.exam-card').forEach(card => {
            if (category === 'all') { card.style.display = 'block'; return; }
            const dept = card.querySelector('.department-badge')?.textContent?.trim();
            card.style.display = dept === category ? 'block' : 'none';
        });
    };

});