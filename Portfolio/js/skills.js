const progressBars = document.querySelectorAll('.progress');

window.addEventListener('load', () => {

progressBars.forEach(bar => {

let width = bar.style.width;

bar.style.width = "0";

setTimeout(() => {
bar.style.width = width;
bar.style.transition = "2s";
}, 200);

});

});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
