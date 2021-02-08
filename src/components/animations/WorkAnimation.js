import { gsap } from "gsap";

// use dom manipulation

//animation for MyWorks.js component
export const projectHeaderAnimation = (projectHeader, name) => {
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
  // tl.fromTo(
  //   name,
  //   {
  //     opacity: 0,
  //     duration: 1.5,
  //   },
  //   {
  //     opacity: 1,
  //   }
  // );

  return tl;
};

//animation for individual work.js component

export const ApplyWorkAnimationOnMobile = () => {};

export const ApplyWorkAnimationTablet = () => {};

export const ApplyWorkAnimationOnDesktop = (
  name,
  intro,
  tag,
  tagItem,
  imageWrapper
) => {
  let masterTl = gsap.timeline();
  console.log(name);
  // children timeline
  let nametl = gsap.timeline();
  nametl.fromTo(
    name,
    {
      opacity: 0,
      y: 30,
      duration: 2,
    },
    {
      opacity: 1,
      y: 0,
    }
  );

  masterTl.add(nametl);
  return masterTl;
};

const tl = gsap.timeline();
