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
});
