import './styles/style.css'
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

console.log('allure')

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: true,
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.registerPlugin(ScrollTrigger)

let sections = gsap.utils.toArray('.section')

sections.forEach((section) => {
  gsap.to(section, {
    yPercent: 100,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'bottom bottom',
      end: 'bottom top',
      scrub: true,
    },
  })
})

// gsap.to('.section__01', {
//   yPercent: 100,
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.section__02',
//     start: 'top bottom',
//     end: 'top top',
//     scrub: true,
//   },
// })
