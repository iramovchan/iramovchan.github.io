// // script.js
// let currentProjectIndex = 0;
// const projects = [
//     { img: 'pws_image.png', info: 'PWS Project' },
//     { img: 'project2.png', info: 'Another Project' },
//     { img: 'project3.png', info: 'Cool Project' }
// ];

// function showProject(index) {
//     const projectElement = document.querySelector('.project');
//     const { img, info } = projects[index];
//     projectElement.innerHTML = `
//         <img src="${img}" alt="${info}">
//         <div class="project-info">${info}</div>
//     `;
// }

// let currentIndex = 0;
// const projects = document.querySelectorAll('.project');
// const totalProjects = projects.length;

// function showProject(index) {
//     projects.forEach((project, i) => {
//         project.style.display = i === index ? 'block' : 'none';
//     });
// }

// function prevProject() {
//     currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
//     showProject(currentIndex);
// }

// function nextProject() {
//     currentIndex = (currentIndex + 1) % totalProjects;
//     showProject(currentIndex);
// }

// // Initialize the first project
// showProject(currentIndex);


// let currentIndex = 0;
// const projects = document.querySelectorAll('.project');
// const totalProjects = projects.length;

// function showProject(index) {
//     const container = document.querySelector('.project-container');
//     container.style.transform = `translateX(-${index * 100}%)`;
// }

// function nextProject() {
//     currentIndex = (currentIndex + 1) % totalProjects;
//     showProject(currentIndex);
// }

// // Auto-scroll every 5 seconds
// setInterval(nextProject, 5000);

// // Initialize the first project
// showProject(currentIndex);



// document.addEventListener("wheel", (event) => {
//     event.preventDefault();
//     let sections = document.querySelectorAll(".section");
//     let index = [...sections].findIndex((s) => s.getBoundingClientRect().top >= 0);

//     if (event.deltaY > 0 && index < sections.length - 1) {
//         sections[index + 1].scrollIntoView({ behavior: "smooth" });
//     } else if (event.deltaY < 0 && index > 0) {
//         sections[index - 1].scrollIntoView({ behavior: "smooth" });
//     }
// }, { passive: false });




// document.addEventListener("DOMContentLoaded", () => {
//     const fadeElements = document.querySelectorAll(".fade");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("fade-in");
//             } else {
//                 entry.target.classList.remove("fade-in");
//             }
//         });
//     }, { threshold: 0.3 });

//     fadeElements.forEach(el => observer.observe(el));
// });


// document.querySelectorAll("video").forEach(video => {
//     video.addEventListener("mouseenter", () => video.play());
//     video.addEventListener("mouseleave", () => video.pause());
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.getElementById("side-bubbles-container");
//     for (let i = 0; i < 6; i++) {
//         const bubble = document.createElement("div");
//         bubble.classList.add("side-bubble");
//         bubble.style.width = `${Math.random() * 150 + 50}px`;
//         bubble.style.height = bubble.style.width;
//         bubble.style.top = `${Math.random() * 100}vh`;
//         bubble.style.left = Math.random() > 0.5 ? "-100px" : "calc(100vw + 50px)";
//         container.appendChild(bubble);
//     }
// });



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
