const filterButtons = document.querySelectorAll(".filters button");
const projects = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

button.addEventListener("click", () => {

filterButtons.forEach(btn =>
btn.classList.remove("active"));

button.classList.add("active");

const filter = button.dataset.filter;

projects.forEach(project => {

if(filter === "all"){
project.style.display = "block";
}
else if(project.classList.contains(filter)){
project.style.display = "block";
}
else{
project.style.display = "none";
}

});

});

});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});
