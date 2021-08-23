const hamMenu = document.querySelector(".ham-menu");
const open = document.querySelector(".fa-bars");
const close = document.querySelector(".fa-times");
const navContainer = document.getElementById("navContainer");
const navbarLinks = document.getElementById("navbarLinks");
const navbar = document.querySelector('.navbar');
const body = document.querySelector("body")

hamMenu.addEventListener("click", toggler)
function toggler() {
    let checkOpen = open.classList.contains("d-none")
    if (!checkOpen) {
        navbarLinks.classList.add("d-block");
        navContainer.classList.add("column");
        open.classList.add("d-none");
        close.classList.remove("d-none")
    } else {
        navbarLinks.classList.remove("d-block");
        navContainer.classList.remove("column");
        open.classList.remove("d-none");
        close.classList.add("d-none");
    };
};

// Scroll Revel

window.sr = ScrollReveal();

sr.reveal(".animation-left", {
    origin: "left",
    duration: 1000,
    distance: '20rem',
    delay: 300
});

sr.reveal(".animation-right", {
    origin: "right",
    duration: 1000,
    distance: '20rem',
    delay: 600
});

sr.reveal(".animation-top", {
    origin: "top",
    duration: 1000,
    distance: '20rem',
    delay: 300
});

sr.reveal('.animation-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

// Scroll check

var lastScrollTop = 0;
var backToTop;

window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        backToTop = st - 30;

        navbar.style.transform = "translatey(0px)"
        navbar.style.transition = "transform .3s ease-in"
    } else if (st < backToTop) {
        navbar.classList.add("sticky-nav");
        navbar.style.transform = "translatey(69px)"
        navbar.style.transition = "transform .3s ease-in"
    };
    if(st < 52){
        navbar.classList.remove("sticky-nav");
        navbar.style.transform = "translatey(0px)"
        navbar.style.transition = "transform 0s ease-in"
    }
    lastScrollTop = st <= 0 ? 0 : st;
});