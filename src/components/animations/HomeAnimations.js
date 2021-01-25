import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import { TimelineMax } from "gsap";

gsap.registerPlugin(TextPlugin);

let words = [
  "Full Stack Developer...",
  "Passionate Learner...",
  "Technology Enthusiast...",
  "Not Your Average Developer...",
  "First Class Team Player...",
];

let masterTl = gsap.timeline({ repeat: -1 }).pause();

export const skillsAnimation = (textElement) => {
  words.forEach((word) => {
    let wordsTl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 });
    wordsTl.to(textElement, {
      duration: 2,
      text: word,
    });
    masterTl.add(wordsTl);
  });
};

export const homeContainerAnimation = (
  element,
  sliderBackground,
  hello,
  iAm,
  myName,
  underline,
  letterA,
  box
) => {
  const tl = new TimelineMax();
  tl.fromTo(
    element,
    {
      height: "0vh",
    },
    {
      height: "60vh",
      ease: "back.inOut(1.7)",
    }
  )
    .fromTo(
      element,
      { duration: 3.5, width: "100%" },
      { width: "80%", ease: "back.inOut(1.7)" }
    )
    // for second animation
    .fromTo(
      sliderBackground,
      {
        x: "-100%",
        ease: "back.inOut(1.7)",
      },
      {
        duration: 1.3,
        x: "0%",
        ease: "slow(1.7, 1.7, false)",
      }
    )
    // third element animation
    .fromTo(
      hello,
      {
        opacity: 0,
        fontWeight: 300,
      },
      {
        duration: 2,
        opacity: 1,
        ease: "bounce.in",
        fontWeight: 800,
        y: -20,
      }
    )
    // animation for I am
    .fromTo(
      iAm,
      {
        opacity: 0,
        y: "100",
      },
      {
        opacity: 1,
        y: "0%",
        ease: "back.out(1.7)",
      }
    )
    .fromTo(
      myName,
      {
        opacity: 0,
        y: "-60",
      },
      {
        opacity: 1,
        duration: 1,
        y: "0%",
        ease: "back.out(1.7)",
        stagger: {
          amount: 1.5,
        },
      }
    )
    // target underline and animate it

    .to(underline, {
      opacity: 1,
      ease: "power2.inOut",
      repeat: -1,
    })

    //animate letterA ref
    .from(letterA, {
      duration: 1.5,
      opacity: 0,
      ease: "power3.out",
    })

    // create an animation for box animation
    .to(box, {
      duration: 1.2,
      width: "62px",
      ease: "power4.inOut",
      onComplete: () => {
        return masterTl.play();
      },
    })

    .to(box, {
      duration: 1.5,
      autoAlpha: 0.5,
      yoyo: true,
      repeat: -1,
      ease: "power4.inOut",
    });

  return tl;
};

// masterTl.add(homeContainerAnimation()).add(homeContainerBgAnimation());

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
//     let wordsTl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1.5 });
//     wordsTl.to(textElement, {
//       duration: 1.9,
//       text: word,
//     });

//     tl.add(wordsTl);
//   });
// };
