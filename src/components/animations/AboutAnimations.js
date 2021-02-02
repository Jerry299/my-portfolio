import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ApplyAnimationOnMobile = (
  header,
  body,
  description,
  speech,
  resumeParent,
  resume,
  skillsHeader,
  skillsHeader2,
  skillsHeader3
) => {
  let masterTl = gsap.timeline();

  let headertl = gsap.timeline();
  let bodyTimeline = gsap.timeline();
  let resumeTimeline = gsap.timeline();
  let skillsTimeline = gsap.timeline();

  headertl.to(header, {
    duration: 1,
    y: 300,
    ease: "power4.out",
  });
  headertl.from(header, {
    duration: 1,
    y: 300,
    ease: "power4.out",
  });
  headertl.to(header, {
    y: 0,
    ease: "power4.out",
  });

  bodyTimeline.fromTo(
    body,
    { opacity: 0, yPercent: 100, ease: "slow(0.7, 0.7, false)" },
    { duration: 1, opacity: 1, yPercent: 0, ease: "slow(0.7, 0.7, false)" }
  );
  bodyTimeline.fromTo(
    [description, speech],
    { opacity: 0, y: 70, ease: "power4.out" },
    {
      duration: 1.3,
      opacity: 1,
      y: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 1.5,
      },
      scrollTrigger: {
        trigger: body,
        start: 10,
        end: 700,
        scrub: 1.5,
      },
    }
  );

  resumeTimeline.fromTo(
    resume,
    {
      opacity: 0,
      duration: 1.3,
      xPercent: -100,
      ease: "power4.inOut",
    },
    {
      scrollTrigger: {
        trigger: resumeParent,
        start: "top center",
        end: "bottom 200px",
        scrub: 0.5,
      },
      duration: 3,
      opacity: 1,
      xPercent: 0,
      ease: "slow(0.5, 0.7, false)",
    }
  );

  // this tl animates sliding in and out of the skills headers
  skillsTimeline.to(skillsHeader, {
    duration: 1.5,
    y: 40,
    fontSize: "2.5rem",
    ease: "power3.inOut",
  });
  skillsTimeline.to(skillsHeader, {
    xPercent: 100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.inOut",
  });
  skillsTimeline
    .fromTo(
      skillsHeader2,
      {
        xPercent: -100,
        display: "block",
        duration: 1.3,
        y: -30,
        ease: "power3.inOut",
      },
      {
        xPercent: 0,
        duration: 2.5,
        opacity: 1,
        fontSize: "2.5rem",
        ease: "power3.inOut",
      }
    )
    .to(skillsHeader2, {
      xPercent: 100,
      duration: 1.5,
      opacity: 1,
      ease: "power3.inOut",
    });

  // third header
  skillsTimeline
    .fromTo(
      skillsHeader3,
      {
        xPercent: -100,

        duration: 1.3,
        y: -50,
        ease: "power3.inOut",
      },
      {
        xPercent: 0,
        display: "block",
        duration: 2.5,
        opacity: 1,
        fontSize: "2.5rem",
        ease: "power3.inOut",
      }
    )
    .to(skillsHeader3, {
      xPercent: 100,
      duration: 1.5,
      opacity: 1,
      y: -50,
      ease: "power3.inOut",
    })
    .to(skillsHeader3, {});

  //add all children timeline to the master timeline
  return masterTl
    .add(headertl)
    .add(bodyTimeline)
    .add(resumeTimeline)
    .add(skillsTimeline);
};

export const ApplyAnimationOnTablet = (totalPage) => {
  let tl = gsap.timeline();
  tl.to(totalPage, {
    duration: 2,
    opacity: 1,
    xPercent: -50,
  });
};

export const ApplyAnimationOnDesktop = (totalPage) => {
  let tl = gsap.timeline();
  tl.to(totalPage, {
    duration: 2,
    opacity: 1,
    backgroundColor: "red",
  });
};

// gsap.defaults({ ease: "power3" });
// gsap.set(".box", { y: 100 });

// ScrollTrigger.batch(".box", {
//   start: "top bottom-=100px",
//   onEnter: (batch) =>
//     gsap.to(batch, { opacity: 1, y: 0, backgroundSize: "100%", stagger: 0.15 }),
//   onLeaveBack: (batch) =>
//     gsap.to(batch, { opacity: 0, y: 100, backgroundSize: "0%", stagger: 0.1 }),
// });

// when ScrollTrigger does a refresh(), it maps all the positioning data which
// factors in transforms, but in this example we're initially setting all the ".box"
// elements to a "y" of 100 solely for the animation in which would throw off the normal
// positioning, so we use a "refreshInit" listener to reset the y temporarily. When we
// return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
// ScrollTrigger.addEventListener("refreshInit", () =>
//   gsap.set(".box", { y: 0, backgroundSize: "0%" })
// );

// ScrollTrigger.batch(details, {
//   start: "top bottom-=10px",
//   onEnter: (batch) =>
//     gsap.to(batch, {
//       opacity: 1,
//       y: 0,
//       backgroundSize: "100%",
//       stagger: 0.15,
//     }),
//   onLeaveBack: (batch) =>
//     gsap.to(batch, {
//       opacity: 0,
//       y: 100,
//       backgroundSize: "0%",
//       stagger: 0.1,
//     }),
// })
