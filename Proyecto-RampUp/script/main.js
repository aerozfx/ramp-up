
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

// Script aboutme

const aboutMeTitle = document.querySelector(".aboutme .title")
const aboutMeTextSection = document.querySelector(".aboutme-info-text")
const skills = document.querySelector(".aboutme-info-skills")
const aboutMeImg = document.querySelector(".aboutme-info img")

const setVisibleItems = () => {
  if(getWidthClient() > 1024) {
    aboutMeTitle.innerText = "Habilidades";
    aboutMeTextSection.classList.add("hidden");
    skills.classList.add("visible");
    aboutMeImg.classList.add("hidden");
  } else {
    aboutMeImg.classList.remove("hidden")
    skills.classList.remove("visible");
    aboutMeTextSection.classList.remove("hidden")
    aboutMeTitle.innerText = "Sobre mí";
  }
}

const getWidthClient = () => {
  return screen.width
}

window.addEventListener("resize", () => {
  setVisibleItems()
})


// Perspective transform based on mouse movement


