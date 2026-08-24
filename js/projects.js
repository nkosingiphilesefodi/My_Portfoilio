// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");
const menuIcon = menuToggle.querySelector("i");


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");


    // Change menu icon
    if (navMenu.classList.contains("active")) {

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");

    } else {

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    }

});


// ==============================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// ==============================

const navLinks = document.querySelectorAll("#nav-menu a");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuIcon.classList.remove("fa-times");
        menuIcon.classList.add("fa-bars");

    });

});


// ==============================
// PROJECT FILTERING
// ==============================

const filterButtons = document.querySelectorAll(".filters button");
const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {


        // Remove active class from all buttons
        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Add active class to selected button
        button.classList.add("active");


        // Get selected category
        const filter = button.getAttribute("data-filter");


        projectCards.forEach(card => {


            // Show all projects
            if (filter === "all") {

                card.style.display = "flex";

            }

            // Show selected category
            else if (card.classList.contains(filter)) {

                card.style.display = "flex";

            }

            // Hide other projects
            else {

                card.style.display = "none";

            }


        });


    });

});


// ==============================
// PROJECT CARD ANIMATION
// ==============================

projectCards.forEach(card => {

    card.style.transition =
        "opacity 0.3s ease, transform 0.3s ease";

});
