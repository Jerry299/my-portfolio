import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ApplyWorkAnimation = () => {
  let masterTimeline = gsap.timeline();

  let projectContainerTl = gsap.timeline();
  let projectContentTl = gsap.timeline();

  // animation for scrollTrigger

  // let allProjectContainer = gsap.utils.toArray(projectContainer);
  let allProjectContainer = gsap.utils.toArray(
    document.querySelectorAll(".work-container")
  );

  allProjectContainer.forEach((aContainer) => {
    projectContainerTl.from(aContainer, {
      opacity: 0,
      xPercent: 20,
      duration: 1.3,
      ease: "power4.inOut",
    });

    projectContainerTl.to(aContainer, {
      opacity: 1,
      xPercent: 0,
      ease: "power4.inOut",
      duration: 1.3,
      scrollTrigger: {
        trigger: aContainer,

        start: "top top+=200",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });

  let otherOrojectsTile = gsap.utils.toArray(
    document.querySelectorAll(".other-projects-inner")
  );

  let otherOrojectsHeader = document.querySelector(".other_projects_header");

  projectContentTl.fromTo(
    otherOrojectsHeader,
    { opacity: 0 },
    {
      opacity: 1,
      scrollTrigger: {
        scrub: 1,
        trigger: otherOrojectsHeader,
        start: "top center",
      },
    }
  );

  ScrollTrigger.batch(otherOrojectsTile, {
    interval: 1.2, // time window (in seconds) for batching to occur. The first callback that occurs (of its type) will start the timer, and when it elapses, any other similar callbacks for other targets will be batched into an array and fed to the callback. Default is 0.1
    scrub: 1,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: { each: 0.2 },
        overwrite: true,
        ease: "power4.inOut",
      }),
    onLeave: (batch) =>
      gsap.set(batch, {
        opacity: 0,
        y: -30,
        overwrite: true,
        ease: "power4.inOut",
      }),
    onEnterBack: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        overwrite: true,
        ease: "power4.inOut",
      }),
    onLeaveBack: (batch) =>
      gsap.set(batch, {
        opacity: 0,
        y: 100,
        overwrite: true,
        ease: "power4.inOut",
      }),
  });

  return masterTimeline.add(projectContainerTl).add(projectContentTl);
};
