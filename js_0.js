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



document.addEventListener("wheel", (event) => {
    event.preventDefault();
    let sections = document.querySelectorAll(".section");
    let index = [...sections].findIndex((s) => s.getBoundingClientRect().top >= 0);

    if (event.deltaY > 0 && index < sections.length - 1) {
        sections[index + 1].scrollIntoView({ behavior: "smooth" });
    } else if (event.deltaY < 0 && index > 0) {
        sections[index - 1].scrollIntoView({ behavior: "smooth" });
    }
}, { passive: false });
