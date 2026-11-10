/* ============================================================
   Selçuk TÜME — Counter Animation (countUp)
   ============================================================ */

(function () {
    'use strict';

    /**
     * Animates a number from 0 to target value.
     * @param {HTMLElement} el - Element whose textContent will be updated.
     * @param {number} target - Target number.
     * @param {number} duration - Animation duration in ms.
     * @param {string} suffix - Optional suffix (e.g. "+", "%").
     */
    function countUp(el, target, duration, suffix) {
        const start = 0;
        const startTime = performance.now();
        suffix = suffix || '';

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(start + (target - start) * eased);

            el.textContent = current.toLocaleString('tr-TR') + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // ── Observe counter elements ───────────────────────────
    const counterObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.counterTarget) || 0;
                    const duration = parseInt(el.dataset.counterDuration) || 2000;
                    const suffix = el.dataset.counterSuffix || '';

                    countUp(el, target, duration, suffix);
                    counterObserver.unobserve(el);
                }
            });
        },
        {
            threshold: 0.3
        }
    );

    function init() {
        document.querySelectorAll('[data-counter-target]').forEach(function (el) {
            el.textContent = '0';
            counterObserver.observe(el);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

