document.addEventListener("DOMContentLoaded", () => {
    // Fade-in effect
    const fadeElements = document.querySelectorAll(".fade");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            } else {
                entry.target.classList.remove("fade-in");
            }
        });
    }, { threshold: 0.3 });

    fadeElements.forEach(el => observer.observe(el));

    // Video hover play/pause
    document.querySelectorAll("video").forEach(video => {
        video.addEventListener("mouseenter", () => video.play());
        video.addEventListener("mouseleave", () => video.pause());
    });

    // Side bubbles animation
    const container = document.getElementById("side-bubbles-container");
    for (let i = 0; i < 6; i++) {
        const bubble = document.createElement("div");
        bubble.classList.add("side-bubble");
        bubble.style.width = `${Math.random() * 150 + 50}px`;
        bubble.style.height = bubble.style.width;
        bubble.style.top = `${Math.random() * 100}vh`;
        bubble.style.left = Math.random() > 0.5 ? "-100px" : "calc(100vw + 50px)";
        container.appendChild(bubble);
    }
});
