import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

// export const ApplyWorkAnimationOnMobile = (
//   name,
//   intro,
//   tag,
//   tagItem,
//   imageWrapper
// ) => {};

// export const ApplyWorkAnimationTablet = () => {};

export const ApplyWorkAnimation = (name, intro, tagItem, container) => {
  let masterTl = gsap.timeline();

  // children timeline
  let containerTl = gsap.timeline();
  let nameTl = gsap.timeline();
  let introTl = gsap.timeline();

  containerTl.fromTo(
    container,
    {
      opacity: 0,
      y: -60,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: container,
        start: "top center+=10px",
        end: "bottom bottom-=120",
        scrub: 0.5,
      },
    }
  );

  nameTl.fromTo(
    name,
    {
      opacity: 0,
      height: "0%",
      duration: 1.5,
    },
    {
      opacity: 1,
      duration: 1.5,
      height: "100%",
      ease: "power4.out",
      scrollTrigger: {
        trigger: name,
        start: "top center",
        end: "bottom bottom",
        scrub: 0.5,
      },
    }
  );

  introTl.fromTo(
    [intro, tagItem],
    {
      y: -70,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      ease: "power4.out",
      stagger: {
        each: 1.5,
      },
      scrollTrigger: {
        trigger: intro,
        start: "top center+=50",
        end: " bottom bottom-=20,",
        scrub: 0.5,
      },
    }
  );

  masterTl.add(containerTl).add(nameTl).add(introTl);
  return masterTl;
};

const tl = gsap.timeline();
