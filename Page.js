document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card, .info-grid, .getbot-card');
    elements.forEach(el => {
        el.style.opacity = 0;
    });

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transition = 'opacity 0.6s ease';
            }
        });
    });

    elements.forEach(el => {
        observer.observe(el);
    });
});
