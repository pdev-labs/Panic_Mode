document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer for scroll animations
    const cards = document.querySelectorAll('.card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    cards.forEach((card, index) => {
        // Add a slight delay for a cascading effect
        card.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(card);
    });

    // 2. Copy to Clipboard Functionality
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(btn => {
        const originalSvg = btn.innerHTML;
        const tickSvg = '<svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/></svg>';

        btn.addEventListener('click', () => {
            const wrapper = btn.closest('.code-wrapper');
            const code = wrapper.querySelector('code').innerText;
            const feedback = wrapper.querySelector('.copy-feedback');

            navigator.clipboard.writeText(code).then(() => {
                // Show feedback and tick mark
                feedback.classList.add('show');
                btn.innerHTML = tickSvg;
                btn.style.color = '#10b981';
                
                // Hide feedback and revert icon after 2 seconds
                setTimeout(() => {
                    feedback.classList.remove('show');
                    btn.innerHTML = originalSvg;
                    btn.style.color = '';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
});
