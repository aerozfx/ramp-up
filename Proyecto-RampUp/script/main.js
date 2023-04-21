import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";

const headerSelector = document.querySelector("header");

const scrollTimeline = new ScrollTimeline({
  scrollOffset: [CSS.percent(0), CSS.percent(100)],
});

headerSelector.animate(
  {
    // 0%
    backdropFilter: ["blur(0px)", "blur(30px)"],
  },
  {
    timeline: scrollTimeline,
  }
);
