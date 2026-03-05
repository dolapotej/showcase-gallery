const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});


const cards = document.querySelectorAll(".card");

window.addEventListener("load", () => {

cards.forEach((card, index) => {

setTimeout(() => {
card.classList.add("show");
}, index * 200);

});

});