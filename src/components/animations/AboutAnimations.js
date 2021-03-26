import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ApplyAnimationOnMobile = (
  header,
  body,
  description,
  speech,
  aboutSkills,
  listItems,
  resumeParent,
  resume
) => {
  let masterTl = gsap.timeline();

  let headertl = gsap.timeline();
  let bodyTimeline = gsap.timeline();
  let resumeTimeline = gsap.timeline();
  let aboutSkillsTl = gsap.timeline();
  let listsTl = gsap.timeline();

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

  aboutSkillsTl.fromTo(
    aboutSkills,
    {
      opacity: 0,
      yPercent: 20,
    },
    {
      opacity: 1,
      yPercent: 0,
      ease: "power4.inOut",
      scrollTrigger: {
        scrub: 1,
        start: "top center-=300",
      },
    }
  );

  let allList = gsap.utils.toArray(listItems);
  allList.forEach((list) => {
    listsTl.fromTo(
      list,
      {
        opacity: 0,
        x: -20,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power4.inOut",
        stagger: {
          amount: 1.5,
        },
        scrollTrigger: {
          scrub: 1.2,
          // start: "top center-=300",
          // end: "bottom center",
        },
      }
    );
  });

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
        // trigger: resumeParent,
        // start: "top center",
        // end: "bottom 200px",
        scrub: 0.5,
      },
      duration: 1.5,
      opacity: 1,
      xPercent: 0,
      ease: "slow(0.5, 0.7, false)",
    }
  );

  //add all children timeline to the master timeline
  return masterTl
    .add(headertl)
    .add(bodyTimeline)
    .add(aboutSkillsTl)
    .add(listsTl)
    .add(resumeTimeline);
};

// the function below is for animating tablets view
export const ApplyAnimationOnTablet = (
  header,
  body,
  description,
  speech,
  photo,
  aboutSkills,
  listItems,
  resume
) => {
  let masterTl = gsap.timeline();
  let headertl = gsap.timeline();
  let bodyTimeline = gsap.timeline();
  let resumeTimeline = gsap.timeline();
  let aboutSkillsTl = gsap.timeline();

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
      yPercent: -100,
      ease: "slow(0.7, 0.7, false)",
    },
    {
      duration: 1.5,
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

  aboutSkillsTl.fromTo(
    aboutSkills,
    {
      opacity: 0,
      ease: "power4.inOut",
      yPercent: 50,
    },
    {
      opacity: 1,
      duration: 1,
      yPercent: 0,
      ease: "power4.inOut",
    }
  );

  let lists = gsap.utils.toArray(listItems);
  lists.forEach((listItem) => {
    aboutSkillsTl.fromTo(
      listItem,
      {
        x: -10,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        ease: "power4.inOut",
        stagger: {
          amount: 1.5,
        },
        scrollTrigger: {
          scrub: 1,
        },
      }
    );
  });

  resumeTimeline.fromTo(
    resume,
    {
      opacity: 0,
      xPercent: -5,
      ease: "power4.inOut",
    },
    {
      scrollTrigger: {
        scrub: 0.5,
      },

      opacity: 1,
      xPercent: 0,
      ease: "slow(0.5, 0.7, false)",
    }
  );

  //add all children timeline to the master timeline
  return masterTl
    .add(headertl)
    .add(bodyTimeline)
    .add(aboutSkillsTl)
    .add(resumeTimeline);
};

// apply animation on desktop

export const ApplyAnimationOnDesktop = (
  header,
  body,
  description,
  speech,
  photo,
  aboutSkills,
  listItems,
  resumeParent,
  resume
) => {
  let masterTl = gsap.timeline();
  let headertl = gsap.timeline();
  let bodyTimeline = gsap.timeline();
  let resumeTimeline = gsap.timeline();
  let aboutSkillsTl = gsap.timeline();

  // header takes whole screen before re-sizing to normal
  headertl.to(header, {
    duration: 1.5,
    y: 400,
    ease: "power4.out",
    opacity: 0,
  });

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
      yPercent: 100,
      ease: "slow(0.7, 0.7, false)",
    },
    {
      duration: 1.5,
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

  aboutSkillsTl.fromTo(
    aboutSkills,
    {
      opacity: 0,
      duration: 1.2,
      yPercent: -100,
      ease: "power4.inOut",
    },
    {
      opacity: 1,
      duration: 1,
      yPercent: 0,
      ease: "power4.inOut",
      scrollTrigger: {
        trigger: aboutSkills,
        scrub: 1,
      },
    }
  );

  let lists = gsap.utils.toArray(listItems);

  ScrollTrigger.batch(lists, {
    interval: 1.5, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
    scrub: 1,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: { each: 0.15 },
        overwrite: true,
      }),
    onLeave: (batch) =>
      gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
    onEnterBack: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
    onLeaveBack: (batch) =>
      gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
  });

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

  //add all children timeline to the master timeline
  return masterTl
    .add(headertl)
    .add(bodyTimeline)
    .add(aboutSkillsTl)
    .add(resumeTimeline);
};
