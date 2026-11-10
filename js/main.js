/* ============================================================
   Selçuk TÜME — Main JavaScript
   Shared functionality across all pages
   ============================================================ */

// ── Privacy Modal ──────────────────────────────────────────
function togglePrivacyModal(show) {
    const modal = document.getElementById('privacy-modal');
    if (!modal) return;
    if (show) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        togglePrivacyModal(false);
    }
});

// ── Mobile Menu ────────────────────────────────────────────
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');
    if (!menu || !icon) return;
    menu.classList.toggle('open');
    icon.textContent = menu.classList.contains('open') ? 'close' : 'menu';
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#mobile-menu a').forEach(function (link) {
        link.addEventListener('click', function () {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('hamburger-icon');
            if (menu) menu.classList.remove('open');
            if (icon) icon.textContent = 'menu';
        });
    });
});

// ── Navbar Scroll Effect ───────────────────────────────────
(function () {
    const nav = document.querySelector('nav');
    if (!nav) return;

    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                if (window.scrollY > 60) {
                    nav.classList.add('nav-scrolled');
                } else {
                    nav.classList.remove('nav-scrolled');
                }
                ticking = false;
            });
            ticking = true;
        }
    });
})();

// ── Parallax Effect ────────────────────────────────────────
(function () {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    if (parallaxElements.length === 0) return;

    let ticking = false;
    window.addEventListener('scroll', function () {
        if (!ticking) {
            window.requestAnimationFrame(function () {
                const scrollY = window.scrollY;
                parallaxElements.forEach(function (el) {
                    const speed = parseFloat(el.dataset.parallaxSpeed) || 0.4;
                    el.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
                });
                ticking = false;
            });
            ticking = true;
        }
    });
})();

