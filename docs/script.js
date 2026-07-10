document.addEventListener("DOMContentLoaded", () => {
    // 0. Theme Toggle Functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    const moonPath = "M12,18C11.11,18 10.26,17.8 9.5,17.45C11.56,16.5 13,14.42 13,12C13,9.58 11.56,7.5 9.5,6.55C10.26,6.2 11.11,6 12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31L23.31,12L20,8.69Z";
    const sunPath = "M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,2L14.39,5.42C13.65,5.15 12.84,5 12,5C11.16,5 10.35,5.15 9.61,5.42L12,2M3.34,7L7.5,6.65C6.9,7.16 6.36,7.78 5.94,8.5C5.5,9.24 5.25,10 5.11,10.79L3.34,7M3.36,17L5.12,13.23C5.26,14 5.53,14.78 5.95,15.5C6.37,16.24 6.91,16.86 7.5,17.37L3.36,17M20.65,7L18.88,10.79C18.74,10 18.47,9.23 18.05,8.5C17.63,7.78 17.1,7.15 16.5,6.64L20.65,7M20.64,17L16.5,17.36C17.1,16.85 17.64,16.22 18.06,15.5C18.5,14.76 18.75,13.97 18.89,13.19L20.64,17M12,22L9.59,18.56C10.33,18.83 11.14,19 12,19C12.82,19 13.63,18.83 14.37,18.56L12,22Z";
    const systemPath = "M21 3H3C1.89 3 1 3.89 1 5V17C1 18.11 1.89 19 3 19H8V21H16V19H21C22.11 19 23 18.11 23 17V5C23 3.89 22.11 3 21 3M21 17H3V5H21V17Z";

    let currentTheme = localStorage.getItem('theme') || 'system';
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    function applyTheme(theme) {
        let isLight = false;
        if (theme === 'system') {
            isLight = mediaQuery.matches;
            themeIcon.querySelector('path').setAttribute('d', systemPath);
        } else if (theme === 'light') {
            isLight = true;
            themeIcon.querySelector('path').setAttribute('d', sunPath);
        } else {
            isLight = false;
            themeIcon.querySelector('path').setAttribute('d', moonPath);
        }

        if (isLight) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
    }

    applyTheme(currentTheme);

    themeToggle.addEventListener('click', () => {
        if (currentTheme === 'system') {
            currentTheme = 'light';
        } else if (currentTheme === 'light') {
            currentTheme = 'dark';
        } else {
            currentTheme = 'system';
        }
        localStorage.setItem('theme', currentTheme);
        applyTheme(currentTheme);
    });

    mediaQuery.addEventListener('change', () => {
        if (currentTheme === 'system') {
            applyTheme('system');
        }
    });

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
