/* ============================================================
   Selçuk TÜME — Scroll Reveal (IntersectionObserver)
   ============================================================ */

(function () {
    'use strict';

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
        // Immediately show all elements
        document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach(function (el) {
            el.classList.add('revealed');
        });
        return;
    }

    // ── Single-element reveals ─────────────────────────────
    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const delay = parseInt(el.dataset.revealDelay) || 0;

                    setTimeout(function () {
                        el.classList.add('revealed');
                    }, delay);

                    revealObserver.unobserve(el);
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: '0px 0px -40px 0px'
        }
    );

    // ── Stagger-children reveals ───────────────────────────
    const staggerObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    staggerObserver.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: '0px 0px -20px 0px'
        }
    );

    // ── Initialize ─────────────────────────────────────────
    function init() {
        document.querySelectorAll('[data-reveal]').forEach(function (el) {
            revealObserver.observe(el);
        });

        document.querySelectorAll('[data-reveal-stagger]').forEach(function (el) {
            staggerObserver.observe(el);
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

