import { gsap } from "gsap";

let masterTl = gsap.timeline();
//animation for MyWorks.js component
export const projectHeaderAnimation = (projectHeader) => {
  const tl = gsap.timeline();

  tl.to(projectHeader, {
    duration: 1.5,
    y: 300,
    ease: "power4.out",
    height: "100vh",
  });

  tl.fromTo(
    projectHeader,
    {
      duration: 1,
      y: 300,
      ease: "power4.out",
      height: "100vh",
    },
    {
      y: 0,
      ease: "power4.out",
      yoyo: true,
      height: "100%",
    }
  );
  masterTl.add(tl);
  return tl;
};

//animation for individual work.js component

export const ApplyWorkAnimationOnMobile = (wrapper) => {
  let tl = gsap.timeline();
  tl.from(wrapper, { opacity: 0 }, { opacity: 1 });

  masterTl.add(tl);
  return tl;
};

export const ApplyWorkAnimationTablet = () => {};

export const ApplyWorkAnimationOnDesktop = () => {};
