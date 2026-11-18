// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const menuIcon = menuToggle ? menuToggle.querySelector("i") : null;

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("active");
        document.body.classList.toggle("nav-open", isOpen);

        if (menuIcon) {
            menuIcon.classList.toggle("fa-bars", !isOpen);
            menuIcon.classList.toggle("fa-times", isOpen);
        }
    });

    // Close on nav link click
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            document.body.classList.remove("nav-open");
            if (menuIcon) {
                menuIcon.classList.replace("fa-times", "fa-bars");
            }
        });
    });

    // Close when clicking outside
    document.addEventListener("click", function (e) {
        if (navMenu.classList.contains("active") &&
            !navMenu.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            navMenu.classList.remove("active");
            document.body.classList.remove("nav-open");
            if (menuIcon) {
                menuIcon.classList.replace("fa-times", "fa-bars");
            }
        }
    });

}


// ==============================
// PROJECT FILTERING + COMPLEXITY SORT
// ==============================

const filterButtons = document.querySelectorAll(".filters button");
const projectsGrid  = document.querySelector(".projects-grid");
const projectCards  = Array.from(document.querySelectorAll(".project-card"));

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Active state on button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        // Determine which cards to show
        const visible = filter === "all"
            ? [...projectCards]
            : projectCards.filter(card => card.classList.contains(filter));

        // Sort visible cards by complexity (data-complexity attr, highest first)
        visible.sort((a, b) => {
            return (parseInt(b.dataset.complexity) || 0) -
                   (parseInt(a.dataset.complexity) || 0);
        });

        // Hide all, then re-append in sorted order
        projectCards.forEach(card => {
            card.style.display = "none";
        });

        visible.forEach(card => {
            card.style.display = "flex";
            projectsGrid.appendChild(card); // re-order in DOM
        });

    });
});


// ==============================
// PROJECT CARD ANIMATION ON SCROLL
// ==============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, { threshold: 0.1 });

projectCards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(card);
});
