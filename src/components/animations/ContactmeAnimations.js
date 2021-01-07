import { TweenLite } from "gsap";

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
