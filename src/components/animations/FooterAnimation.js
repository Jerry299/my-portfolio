import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const footerAnimate = (target, target2) => {
  gsap
    .timeline()
    .from(target, {
      opacity: 0,
      duration: 2,
      xPercent: -100,
      scale: 2,
      ease: "slow(0.7, 0.7, false)",
    })
    .to(target, {
      opacity: 1,
      duration: 2,
      ease: "slow(0.7, 0.7, false)",
      background: "red",
      scrollTrigger: {
        trigger: target2,
        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
};
