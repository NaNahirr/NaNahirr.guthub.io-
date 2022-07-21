let parallax = document.querySelector(".parallax");
let title = document.querySelector(".title");

function scrollParallax(){
    let scrollTop = document.documentElement.scrollTop;
    parallax.style.transform = "translateY(" + scrollTop *-0.7+ "px)";
    title.style.transform = "translateY(" + scrollTop *0.5+ "px)";
};
window.addEventListener("scroll", scrollParallax);