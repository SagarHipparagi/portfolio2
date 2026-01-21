/**
 * Dark Mode Toggle
 */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('dark-mode-toggle');

    if (!toggle) {
        console.error('Toggle button not found!');
        return;
    }

    console.log('Dark mode toggle initialized');

    // Handle click
    toggle.addEventListener('click', function () {
        const html = document.documentElement;
        const current = html.getAttribute('data-theme');
        const newTheme = current === 'dark' ? 'light' : 'dark';

        console.log('Toggling from', current, 'to', newTheme);

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Only prevent default for anchor links
            if (href.startsWith('#')) {
                e.preventDefault();

                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Optional: Add subtle fade-in on page load
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s ease';
        document.body.style.opacity = '1';
    }, 10);
});
