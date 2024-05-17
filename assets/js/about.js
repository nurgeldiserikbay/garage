/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

document.addEventListener("DOMContentLoaded", () => {
  // gsap.registerPlugin(ScrollTrigger)

  const historySection = document.querySelector('.history-section')
  const historySectionLine = document.querySelector('.history-section__line')
  const historySectionInner = document.querySelector('.history-section__inner')
  const histories = document.querySelector('.histories')
  const historiesGradient = document.querySelector('.histories__gradient')

  historySection.style.height = histories.scrollHeight + 'px'
  histories.style.maxHeight = window.innerHeight + 'px'

  const startY = historySection.offsetTop + historySectionLine.offsetTop
  const y = histories.scrollHeight - historySectionInner.clientHeight

  window.addEventListener("scroll", srollCallback);
  srollCallback()
  function srollCallback() {
    const trX = window.scrollY - startY

    if (trX > 0 && trX < y) {
      histories.style.transform = `translateY(${trX}px)`
      historiesGradient.style.transform = `translateY(${trX}px)`
      histories.scrollTop = trX
    } else if (trX > y) {
      histories.style.transform = `translateY(${y}px)`
      historiesGradient.style.transform = `translateY(${y}px)`
      histories.scrollTop = y
    }
    else {
      histories.style.transform = `translateY(${0}px)`
      historiesGradient.style.transform = `translateY(${0}px)`
      histories.scrollTop = 0
    }
  }
})


// gsap.to('.history-section__inner', {
//   scrollTrigger: {
//     trigger: '.history-section',
//     start: "top top",
//     end: "bottom " + bottomOffet + 'px',
//     scrub: true,
//     toggleActions: 'restart pause reverse pause',
//   },
//   y: y,
// })

// gsap.to('.histories', {
//   scrollTrigger: {
//     trigger: '.history-section',
//     start: "top top",
//     end: "bottom " + bottomOffet + 'px',
//     scrub: true,
//     toggleActions: 'restart pause reverse pause',
//   },
//   scrollTop: y,
// })

/******/ })()
;
//# sourceMappingURL=about.js.map