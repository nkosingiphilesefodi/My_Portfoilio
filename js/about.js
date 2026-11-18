// ==============================
// MOBILE NAVIGATION TOGGLE
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navMenu.classList.toggle("active");
        document.body.classList.toggle("nav-open", isOpen);

        const icon = menuToggle.querySelector("i");
        if (isOpen) {
            icon.classList.replace("fa-bars", "fa-times");
        } else {
            icon.classList.replace("fa-times", "fa-bars");
        }
    });

    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            document.body.classList.remove("nav-open");
            const icon = menuToggle.querySelector("i");
            icon.classList.replace("fa-times", "fa-bars");
        });
    });

    document.addEventListener("click", function (e) {
        if (navMenu.classList.contains("active") &&
            !navMenu.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            navMenu.classList.remove("active");
            document.body.classList.remove("nav-open");
            const icon = menuToggle.querySelector("i");
            icon.classList.replace("fa-times", "fa-bars");
        }
    });
}

// ==============================
// SCROLL REVEAL
// ==============================

const revealTargets = document.querySelectorAll(
    ".timeline-item, .passion-card, .value-card, .info-card, .identity-card, .focus-list > div"
);

revealTargets.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealTargets.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 80) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on load in case elements are already in view
