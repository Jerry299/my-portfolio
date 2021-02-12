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
  boxes
) => {
  let masterTl = gsap.timeline();

  let headertl = gsap.timeline();
  let bodyTimeline = gsap.timeline();
  let resumeTimeline = gsap.timeline();
  let skillsTimeline = gsap.timeline();

  // header takes whole screen before re-sizing to normal
  headertl.to(header, {
    duration: 1.5,
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

  // body starts from being not to view to sliding up into view
  bodyTimeline.fromTo(
    body,
    { opacity: 0, yPercent: 100, ease: "slow(0.7, 0.7, false)" },
    { duration: 1, opacity: 1, yPercent: 0, ease: "slow(0.7, 0.7, false)" }
  );
  bodyTimeline.fromTo(
    [description, speech],
    {
      opacity: 0,
      y: 70,
      ease: "power4.out",
    },
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
        start: 5,
        end: 600,
        scrub: 0.7,
        // markers: true,
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

  skillsTimeline.fromTo(
    skillsHeader,
    {
      opacity: 0,
      y: 70,
      duration: 1.3,
      ease: "circ.inOut",
    },
    {
      opacity: 1,
      ease: "circ.inOut",
      duration: 1.4,
      y: 0,
      scrollTrigger: {
        trigger: skillsHeader,
        start: "top center",
        end: "+=100px",
        scrub: 0.5,
      },
    }
  );

  let allBoxes = gsap.utils.toArray(boxes);
  allBoxes.forEach((box) => {
    skillsTimeline.fromTo(
      box,
      {
        opacity: 0,
        yPercent: 50,
      },
      {
        opacity: 1,
        yPercent: 0,
        ease: "back.out(1.7)",
        stagger: {
          amount: 1,
        },
        scrollTrigger: {
          trigger: box,
          start: "top center+=50",
          end: "+=220px",
          scrub: 0.7,
        },
      }
    );
  });

  //add all children timeline to the master timeline
  return masterTl
    .add(headertl)
    .add(bodyTimeline)
    .add(resumeTimeline)
    .add(skillsTimeline, "+=2");
};

// the function below is for animating tablets view
export const ApplyAnimationOnTablet = (
  header,
  body,
  description,
  speech,
  photo,
  resumeParent,
  resume,
  skillsHeader,
  boxes
) => {
  let masterTl = gsap.timeline();

  let headertl = gsap.timeline();
  let bodyTimeline = gsap.timeline();
  let resumeTimeline = gsap.timeline();
  let skillsTimeline = gsap.timeline();

  // header takes whole screen before re-sizing to normal
  headertl.to(header, {
    duration: 1.5,
    y: 400,
    ease: "power4.out",
  });
  headertl.from(header, {
    duration: 1,
    y: 400,
    ease: "power4.out",
  });
  headertl.to(header, {
    y: 0,
    ease: "power4.out",
  });

  // body starts from being not to view to sliding up into view
  bodyTimeline.fromTo(
    body,
    {
      opacity: 0,
      duration: 2,
      backgroundColor: "#ffe8e8",
      yPercent: -100,
      ease: "slow(0.7, 0.7, false)",
    },
    {
      duration: 1.5,
      backgroundColor: "#ffe200",
      opacity: 1,
      yPercent: 0,
      ease: "slow(0.7, 0.7, false)",
    }
  );
  bodyTimeline.fromTo(
    [description, speech, photo],
    {
      opacity: 0,
      y: -70,
      ease: "power4.out",
    },
    {
      duration: 1.3,
      opacity: 1,
      y: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 1.8,
      },
    }
  );

  resumeTimeline.fromTo(
    resume,
    {
      opacity: 0,
      duration: 1.5,
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

  skillsTimeline.fromTo(
    skillsHeader,
    {
      opacity: 0,
      y: 70,
      duration: 1.3,
      ease: "circ.inOut",
    },
    {
      opacity: 1,
      ease: "circ.inOut",
      duration: 1.4,
      y: 0,
      scrollTrigger: {
        trigger: skillsHeader,
        start: "top center",
        end: "+=100px",
        scrub: 0.5,
      },
    }
  );

  let allBoxes = gsap.utils.toArray(boxes);
  allBoxes.forEach((box) => {
    skillsTimeline.fromTo(
      box,
      {
        opacity: 0,
        yPercent: 50,
        duration: 1.7,
        scale: 2,
        ease: "sine.out",
      },
      {
        opacity: 1,
        yPercent: 0,
        ease: "back.out(1.7)",
        duration: 1.5,
        scale: 1,
        stagger: {
          amount: 1.4,
        },
        scrollTrigger: {
          trigger: box,
          start: "top center+=70",
          end: "bottom bottom",
          scrub: 0.7,
        },
      }
    );
  });

  //add all children timeline to the master timeline
  return masterTl
    .add(headertl)
    .add(bodyTimeline)
    .add(resumeTimeline)
    .add(skillsTimeline, "+=5");
};

// apply animation on desktop

export const ApplyAnimationOnDesktop = (
  header,
  circle,
  body,
  description,
  speech,
  photo,
  resumeParent,
  resume,
  skillsHeader,
  boxes
) => {
  let masterTl = gsap.timeline();

  let headertl = gsap.timeline();
  let bodyTimeline = gsap.timeline();
  let resumeTimeline = gsap.timeline();
  let skillsTimeline = gsap.timeline();

  // header takes whole screen before re-sizing to normal
  headertl.to(header, {
    duration: 1.5,
    y: 400,
    ease: "power4.out",
    opacity: 0,
  });

  //animation for moving circle to and fro then display text
  headertl.to(circle, {
    opacity: 1,
    x: 300,
    y: -90,
    duration: 1.2,
    backgroundColor: "#edcfa9",
    boxShadow: "50px -50px 70px 35px #faf3dd",
    ease: "back.out(1.7)",
  });
  headertl.to(circle, {
    x: -300,
    backgroundColor: "#feceab",
    duration: 1.4,
    ease: "back.out(1.7)",
    boxShadow: "50px -50px 70px 35px #b9fffc",
  });
  headertl.to(circle, {
    x: 300,
    duration: 1.4,
    backgroundColor: "#ff9292",
    ease: "back.out(1.7)",
    boxShadow: "-50px 50px 70px 35px #ffb4b4",
  });
  headertl.to(circle, {
    y: 500,
    duration: 1.4,
    backgroundColor: "#28df99",
    ease: "slow(0.7, 0.7, false)",
    boxShadow: "-50px -50px 70px 75px #99f3bd",
  });
  headertl.set(circle, {
    display: "none",
  });

  //animation for moving circle to and fro then display text ends
  headertl.from(header, {
    duration: 1,
    opacity: 1,
    y: 400,
    ease: "power4.out",
  });
  headertl.to(header, {
    y: 0,
    ease: "power4.out",
  });

  // body starts from being not to view to sliding up into view
  bodyTimeline.fromTo(
    body,
    {
      opacity: 0,
      duration: 2,
      backgroundColor: "#ffe8e8",
      yPercent: 100,
      ease: "slow(0.7, 0.7, false)",
    },
    {
      duration: 1.5,
      backgroundColor: "#ffe200",
      opacity: 1,
      yPercent: 0,
      ease: "slow(0.7, 0.7, false)",
    }
  );
  bodyTimeline.fromTo(
    [description, speech],
    {
      opacity: 0,
      y: -70,
      ease: "power4.out",
    },
    {
      duration: 1.3,
      opacity: 1,
      y: 0,
      ease: "power4.inOut",
      stagger: {
        amount: 1.8,
      },
    }
  );

  bodyTimeline.fromTo(
    photo,
    {
      opacity: 0,
      duration: 1,
    },
    {
      opacity: 1,
      duration: 1.8,
      ease: "slow(0.5, 0.7, false)",
    }
  );

  resumeTimeline.fromTo(
    resume,
    {
      opacity: 0,
      duration: 1.5,
      xPercent: -100,
      ease: "power4.inOut",
    },
    {
      scrollTrigger: {
        trigger: resumeParent,
        start: "top bottom",
        end: "bottom 600px",
        scrub: 0.5,
      },
      duration: 3,
      opacity: 1,
      xPercent: 0,
      ease: "slow(0.5, 0.7, false)",
    }
  );

  skillsTimeline.fromTo(
    skillsHeader,
    {
      opacity: 0,
      y: 70,
      duration: 1.3,
      ease: "circ.inOut",
    },
    {
      opacity: 1,
      ease: "circ.inOut",
      duration: 1.4,
      textAlign: "center",
      paddingTop: "2rem",
      y: 0,
      scrollTrigger: {
        trigger: skillsHeader,
        start: "top bottom",
        end: "+=100px",
        scrub: 0.5,
      },
    }
  );

  let allBoxes = gsap.utils.toArray(boxes);
  allBoxes.forEach((box) => {
    skillsTimeline.fromTo(
      box,
      {
        opacity: 0,
        yPercent: 50,
        duration: 1.7,
        scale: 0.2,
        ease: "sine.out",
      },
      {
        opacity: 1,
        yPercent: 0,
        ease: "back.out(1.7)",
        duration: 1.5,
        scale: 1,
        stagger: {
          amount: 1.4,
        },
        scrollTrigger: {
          trigger: box,
          start: "top bottom+=200",
          end: "bottom center",
          scrub: 0.7,
        },
      }
    );
  });

  //add all children timeline to the master timeline
  return masterTl
    .add(headertl)
    .add(bodyTimeline)
    .add(resumeTimeline)
    .add(skillsTimeline, "+=5");
};
