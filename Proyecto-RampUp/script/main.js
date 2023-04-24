
// ScrollAnimation

import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const headerSelector = document.querySelector("header");

const scrollTimeline = new ScrollTimeline({
  scrollOffset: [CSS.px(1), CSS.px(20)],
});

headerSelector.animate(
  {
    // 0%
    backgroundColor: ["transparent", "rgba(255, 255, 255, 1)"]
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

// Script aboutme

const aboutMeTitle = document.querySelector(".aboutme .title")

const setVisibleItems = () => {
  if(getClientWidth() > 1024) {
    aboutMeTitle.innerText = "Habilidades";
  } else {
    aboutMeTitle.innerText = "Sobre mí";
  }
}

const getClientWidth = () => {
  return window.innerWidth
}


document.addEventListener("resize", () => {
  setVisibleItems()
})

