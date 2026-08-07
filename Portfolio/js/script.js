// ===============================
// PORTFOLIO MAIN SCRIPT
// ===============================

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// ===============================
// MOBILE NAVIGATION TOGGLE
// ===============================
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
        menuBtn.classList.toggle("active");
    });
}

// ===============================
// TYPING ANIMATION
// ===============================

const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Angular Developer"
];

let roleIndex = 0;
let charIndex = 0;
let typingElement = document.querySelector(".typing");

function typeRole() {
    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, 100);
    } else {
        setTimeout(eraseRole, 1500);
    }
}

function eraseRole() {
    if (charIndex > 0) {
        typingElement.textContent = roles[roleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 50);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 500);
    }
}

document.addEventListener("DOMContentLoaded", typeRole);

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    counter.innerText = "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;

        const increment = target / 200;

        if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(updateCounter, 20);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});

// ===============================
// ACTIVE NAVBAR LINK ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// ===============================
// PARALLAX EFFECT
// ===============================

document.addEventListener("mousemove", (e) => {
    const shapes = document.querySelectorAll(".parallax");

    shapes.forEach(shape => {
        const speed = shape.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        shape.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// ===============================
// FLOATING PARTICLES
// ===============================

function createParticle() {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    document.body.appendChild(particle);

    const size = Math.random() * 8 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particle.style.left = Math.random() * window.innerWidth + "px";

    const duration = Math.random() * 5 + 5;
    particle.style.animationDuration = duration + "s";

    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
}

setInterval(createParticle, 300);

// ===============================
// CARD HOVER EFFECTS
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
    });
});

// ===============================
// HERO IMAGE FLOAT ANIMATION
// ===============================

const heroImg = document.querySelector(".hero-img");

if (heroImg) {
    setInterval(() => {
        heroImg.classList.toggle("float");
    }, 2000);
}

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});
