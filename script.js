document.addEventListener("DOMContentLoaded", () => {
    const centerDisplay = document.getElementById("center-display");
    const triggers = document.querySelectorAll(".hover-trigger");
    
    const defaultImageSrc = centerDisplay.src;

    triggers.forEach(trigger => {
        trigger.addEventListener("mouseenter", function() {
            const targetSrc = this.getAttribute("data-target");
            if(targetSrc) {
                centerDisplay.style.opacity = 0.5;
                setTimeout(() => {
                    centerDisplay.src = targetSrc;
                    centerDisplay.style.opacity = 1;
                }, 150);
            }
        });

        trigger.addEventListener("mouseleave", function() {
            centerDisplay.style.opacity = 0.5;
            setTimeout(() => {
                centerDisplay.src = defaultImageSrc;
                centerDisplay.style.opacity = 1;
            }, 150);
        });
    });
});

function scrollCarousel(trackId, scrollAmount) {
    const track = document.getElementById(trackId);
    if(track) {
        track.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

/* ── Switchable skeleton for image-driven row 1 ─────────────── */
/* ── Switchable skeleton for ALL image-driven rows ─────────────── */
(function () {
    const switchables = document.querySelectorAll('.skeleton-switchable');
    if (!switchables.length) return;

    switchables.forEach(switchable => {
        const options   = switchable.querySelectorAll('.skel-option');
        const targetId  = switchable.dataset.target;
        const outputBox = document.getElementById(targetId);
        
        if (!outputBox) return;

        const resultImg  = outputBox.querySelector('.result-img');
        const overlayImg = outputBox.querySelector('.skeleton-overlay');

        let current = 0;

        switchable.addEventListener('click', () => {
            options[current].classList.remove('active');

            current = (current + 1) % options.length;

            options[current].classList.add('active');

            const nextResult = options[current].dataset.result;
            resultImg.src  = nextResult;

            overlayImg.src = options[current].src;
        });
    });
})();