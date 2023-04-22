
// ScrollAnimation

import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const headerSelector = document.querySelector("header");

const scrollTimeline = new ScrollTimeline({
  scrollOffset: [CSS.percent(1), CSS.percent(99)],
});

headerSelector.animate(
  {
    // 0%
    backdropFilter: ["blur(0px)", "blur(30px)"],
    backgroundColor: ["transparent", "rgba(255, 255, 255, .7)"]
  },
  {
    timeline: scrollTimeline,
  }
);


// Animación hamburguer
const hamburguer = document.querySelector(".hamburguer");
const menuHamburguer = document.querySelectorAll(".line");
const slider = document.querySelector(".slider")

hamburguer.addEventListener("click", () => {
  slider.classList.toggle("active")
  menuHamburguer.forEach(element => {
    element.classList.toggle("active")
  })
})