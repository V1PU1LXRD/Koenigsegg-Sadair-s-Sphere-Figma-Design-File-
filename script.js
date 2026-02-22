// ═══════════════════════════════════════════
// KOENIGSEGG SADAIR'S SPHERE — INTERACTIONS
// ═══════════════════════════════════════════

// Smooth entrance animations
document.addEventListener('DOMContentLoaded', () => {

    // Animate elements on load
    const animateIn = (selector, delay) => {
        const el = document.querySelector(selector);
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.8s ease ${delay}s`;

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100);
    };

    animateIn('.hero-stats', 0.2);
    animateIn('.hero-car', 0.4);
    animateIn('.hero-info', 0.6);
    animateIn('.hero-bg-title', 0);

    // Parallax effect on mouse move
    document.addEventListener('mousemove', (e) => {
        const car = document.querySelector('.hero-car');
        if (!car) return;

        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 10;

        car.style.transform = `translate(${x}px, ${y}px)`;
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(10, 10, 10, 0.95)';
            nav.style.backdropFilter = 'blur(10px)';
        } else {
            nav.style.background = 'linear-gradient(to bottom, rgba(10,10,10,0.9), transparent)';
        }
    });
});
