const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("active");
        document.body.classList.toggle("nav-open", isOpen);

        const icon = menuToggle.querySelector("i");
        if (isOpen) {
            icon.classList.replace("fa-bars", "fa-times");
        } else {
            icon.classList.replace("fa-times", "fa-bars");
        }
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("active");
            document.body.classList.remove("nav-open");
            const icon = menuToggle.querySelector("i");
            icon.classList.replace("fa-times", "fa-bars");
        });
    });

    document.addEventListener("click", function (e) {
        if (nav.classList.contains("active") &&
            !nav.contains(e.target) &&
            !menuToggle.contains(e.target)) {
            nav.classList.remove("active");
            document.body.classList.remove("nav-open");
            const icon = menuToggle.querySelector("i");
            icon.classList.replace("fa-times", "fa-bars");
        }
    });
}
