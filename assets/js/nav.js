const navMenu = document.querySelector(".nav__links");
const openMenu = document.querySelector(".nav__open");
const closeMenu = document.querySelector(".nav__close");

openMenu.addEventListener("click", ()=> {
    navMenu.classList.add("nav__visible");
});

closeMenu.addEventListener("click", ()=> {
    navMenu.classList.remove("nav__visible");
});