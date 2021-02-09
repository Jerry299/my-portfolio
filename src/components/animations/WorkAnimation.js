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

export const ApplyWorkAnimationOnMobile = (
  name,
  intro,
  tag,
  tagItem,
  imageWrapper
) => {};

export const ApplyWorkAnimationTablet = () => {};

export const ApplyWorkAnimationOnDesktop = (
  name,
  intro,
  tag,
  tagItem,
  imageWrapper,
  container
) => {
  let masterTl = gsap.timeline();

  // children timeline
  let containerTl = gsap.timeline();
  containerTl.fromTo(
    container,
    {
      y: 80,
      duration: 2,
    },
    {
      y: 0,
    }
  );
  containerTl.fromTo(
    container,
    {
      backgroundSize: "550px",
      height: "0%",
      duration: 2,
    },
    {
      backgroundSize: "250px",
      height: "100%",
      ease: "back.out(1.7)",
    }
  );

  masterTl.add(containerTl);
  return masterTl;
};

const tl = gsap.timeline();
