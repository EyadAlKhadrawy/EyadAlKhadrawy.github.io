/* =====================================================
   PROJECTS
===================================================== */

const projects = [

    {
        icon: "🚗",

        title: "Smart Car Counter",

        description:
            "An embedded parking system that counts cars entering and leaving using sensors and controls status LEDs.",

        technologies: [
            "MicroPython",
            "ESP32",
            "Sensors"
        ],

        link: "#"
    },


    {
        icon: "📡",

        title: "ESP32 Wi-Fi Projects",

        description:
            "Experiments with ESP32 networking, access points, Wi-Fi communication and IoT systems.",

        technologies: [
            "ESP32",
            "Wi-Fi",
            "IoT",
            "C++"
        ],

        link: "#"
    },


    {
        icon: "🎮",

        title: "Unity Multiplayer Game",

        description:
            "A multiplayer game project experimenting with networking, AI bots and online gameplay systems.",

        technologies: [
            "Unity",
            "C#",
            "Netcode"
        ],

        link: "#"
    },


    {
        icon: "💡",

        title: "Embedded Electronics",

        description:
            "Various experiments combining microcontrollers, LEDs, displays, sensors and electronic modules.",

        technologies: [
            "ESP32",
            "Arduino",
            "Electronics"
        ],

        link: "#"
    },


    {
        icon: "🌐",

        title: "ESP-NOW Network",

        description:
            "Experiments with ESP32 devices communicating wirelessly using ESP-NOW.",

        technologies: [
            "ESP32",
            "ESP-NOW",
            "Networking"
        ],

        link: "#"
    },


    {
        icon: "🤖",

        title: "AI Experiments",

        description:
            "Exploring machine learning and artificial intelligence through software and embedded projects.",

        technologies: [
            "Python",
            "AI",
            "Machine Learning"
        ],

        link: "#"
    }

];


function loadProjects() {

    const grid =
        document.getElementById("projectsGrid");


    projects.forEach(project => {

        const card =
            document.createElement("article");

        card.className =
            "project-card reveal";


        const technologies =
            project.technologies
                .map(tech => `<span>${tech}</span>`)
                .join("");


        card.innerHTML = `

            <div class="project-image">
                ${project.icon}
            </div>

            <div class="project-body">

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

                <div class="project-tech">
                    ${technologies}
                </div>

                <a
                    href="${project.link}"
                    class="project-link">

                    View Project →

                </a>

            </div>

        `;


        grid.appendChild(card);

    });

}


loadProjects();


/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("active");

        });

    });


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle =
    document.getElementById("themeToggle");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light");

    themeToggle.textContent = "☀️";

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");


    const light =
        document.body.classList.contains("light");


    if (light) {

        themeToggle.textContent = "☀️";

        localStorage.setItem(
            "theme",
            "light"
        );

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }
    );


function observeRevealElements() {

    document
        .querySelectorAll(".reveal")
        .forEach(element => {

            revealObserver.observe(element);

        });

}


observeRevealElements();


/* =====================================================
   SCROLL TO TOP
===================================================== */

const scrollTop =
    document.getElementById("scrollTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollTop.classList.add("visible");

    } else {

        scrollTop.classList.remove("visible");

    }

});


scrollTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =====================================================
   FOOTER YEAR
===================================================== */

document.getElementById("year")
    .textContent =
    new Date().getFullYear();