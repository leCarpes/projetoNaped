
const nav = document.querySelector(".navHeader");
const modal = document.getElementById("buttonNapedMenu");

nav.classList.remove("open");

modal.addEventListener("click", () => {
    nav.classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
    }
});