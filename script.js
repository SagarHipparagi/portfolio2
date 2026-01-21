/**
 * Minimal JavaScript for Portfolio Landing Page
 * Apple HIG-inspired - minimal interactions only
 */

document.addEventListener('DOMContentLoaded', () => {
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
