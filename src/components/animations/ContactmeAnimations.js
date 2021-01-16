import { TweenLite } from "gsap";
import { gsap } from "gsap";

export const fadeIn = (target) => {
  TweenLite.to(target, 2, {
    opacity: 1,
    y: -60,
    ease: "power4.out",
    stagger: {
      amount: 0.7,
    },
  });
};

export const fadeOut = (target) => {
  TweenLite.to(target, 2, {
    opacity: 0,
    x: -20,
    ease: "power4.out",
  });
};

export const svgAnimate = (target, target2, target3) => {
  // gsap.to(target, { duration: 3.5, ease: "back.out(1.7)", opacity: 1 });
  gsap
    .timeline()
    .from(target, {
      duration: 2.5,
      opacity: 0,
      xPercent: -100,
      ease: "slow(0.7, 0.7, false)",
    })
    .to(target, {
      opacity: 1,
      x: 10,
      duration: 2,
      ease: "slow(0.7, 0.7, false)",
    })
    .from(target2, {
      opacity: 0,
      // duration: 1,
      ease: "back.out(1.7)",
      yPercent: 100,
    })
    .to(target2, {
      opacity: 1,
      duration: 2,
      ease: "back.out(1.7)",
    })
    .from(target3, {
      opacity: 0,
      ease: "elastic.out(1, 0.3)",
      yPercent: -100,
      duration: 2,
    })
    .to(target3, {
      opacity: 1,
      duration: 2,
      ease: "elastic.out(1, 0.3)",
    });
};
