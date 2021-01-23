import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { TimelineMax } from "gsap";

gsap.registerPlugin(TextPlugin);
let words = [
  "Full Stack Javascript Developer...",
  "Passionate Learner...",
  "Technology Enthusiast...",
];

// let masterTl = gsap.timeline({ repeat: -1 }).pause();
let masterTl = gsap.timeline();

// let homeTl = gsap.timeline();
// let boxTl = gsap.timeline();

export const homeContainerAnimation = (element, element2) => {
  const tl = new TimelineMax();
  tl.fromTo(
    element,
    {
      duration: 1.5,
      height: "0vh",
    },
    {
      height: "60vh",
      ease: "back.inOut(1.7)",
    }
  )
    .fromTo(
      element,
      { duration: 2.5, width: "100%" },
      { width: "80%", ease: "back.inOut(1.7)" }
    )
    .fromTo(
      element2,
      {
        x: "-100%",
        ease: "back.inOut(1.7)",
      },
      {
        x: "0%",
        ease: "slow(0.7, 0.7, false)",
      }
    );

  return tl;
};

export const homeContainerBgAnimation = (element) => {
  const tl = new TimelineMax();
  tl.fromTo(
    element,
    {
      x: "-100%",
      ease: "back.inOut(1.7)",
    },
    {
      x: "0%",
      ease: "slow(0.7, 0.7, false)",
    }
  );
  return tl;
};

masterTl.add(homeContainerAnimation());
// export const animateHelloWorld = (element) => {
//   const tl = gsap.timeline({ duration: 1 });
//   tl.fromTo(
//     element,
//     {
//       opacity: 0,
//     },
//     {
//       opacity: 1,
//     }
//   );
//   return tl;
// };

// export const animationForHomeHiandHomeName = (el1, el2, el3, el4, el5) => {
//   homeTl.from(el1, {
//     duration: 2.3,
//     y: -300,
//     repeat: 0,
//     ease: "elastic.out(1, 0.3)",
//   });
//   homeTl.from(el2, {
//     duration: 1.9,
//     x: -500,
//     opacity: 0,
//     ease: "elastic.out(2, 0.3)",
//   });
//   homeTl.from(el3, {
//     duration: 1,
//     y: 200,
//     opacity: 0,
//     ease: "bounce.out",
//   });
//   homeTl.from(el4, {
//     duration: 1,
//     y: -200,
//     opacity: 0,
//     ease: "elastic.out(1.75, 0.3)",
//   });
//   homeTl.from(el5, {
//     duration: 1,
//     x: 200,
//     opacity: 0,
//     ease: "elastic.out(1.75, 0.3)",
//   });
// };

// export const underlineTextAndFadeUp = (el, el2) => {
//   boxTl
//     .to(el, {
//       duration: 4,
//       width: "85px",
//       ease: "power4.inOut",
//     })
//     .from(el2, {
//       duration: 4,
//       y: 50,
//       opacity: 0,
//       ease: "power3.out",
//       onComplete: () => masterTl.play(),
//     })
//     .to(el, {
//       duration: 4,
//       height: "34px",
//       ease: "elastic.out",
//     })
//     .to(el, {
//       duration: 4.5,
//       autoAlpha: 0.5,
//       yoyo: true,
//       repeat: -1,
//       ease: "power4.inOut",
//     });
// };

// export const homeAnimationsForMySkills = (element) => {
//   gsap.to(element, {
//     opacity: 0,
//     ease: "power2.inOut",
//     repeat: -1,
//   });
// };

// export const wordsAnimation = (textElement) => {
//   words.forEach((word) => {
//     let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
//     tl.to(textElement, {
//       duration: 1.9,
//       text: word,
//     });

//     masterTl.add(tl);
//   });
// };

// tl.fromTo(
//   element,
//   {
//     width: 0,
//     marginLeft: "50%",
//     overflow: "hidden",
//     ease: "back.inOut(1.7)",
//   },
//   {
//     width: "100%",
//     marginLeft: 0,
//     delay: 1,
//   }
// );
