const items = document.querySelectorAll('.timeline-item');

function revealTimeline() {

items.forEach(item => {

const top = item.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
item.classList.add('show');
}

});

}

window.addEventListener('scroll', revealTimeline);
revealTimeline();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});
