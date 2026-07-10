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
        btn.addEventListener('click', () => {
            const wrapper = btn.closest('.code-wrapper');
            const code = wrapper.querySelector('code').innerText;
            const feedback = wrapper.querySelector('.copy-feedback');

            navigator.clipboard.writeText(code).then(() => {
                // Show feedback
                feedback.classList.add('show');
                
                // Hide feedback after 2 seconds
                setTimeout(() => {
                    feedback.classList.remove('show');
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    });
});
