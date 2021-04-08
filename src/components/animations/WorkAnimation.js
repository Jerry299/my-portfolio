import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ApplyWorkAnimationOnMobile = () => {};

export const ApplyWorkAnimationOnTablet = () => {};

export const ApplyWorkAnimationOnDesktop = (
  featuredProject,
  projectTitle,
  projectDescription,
  projectDescriptionIntro,
  projectTechList,
  projectLinks,
  projectImage
) => {
  let masterTimeline = gsap.timeline();

  let projectContainerTl = gsap.timeline();
  let projectContentTl = gsap.timeline();

  // animation for scrollTrigger

  // let allProjectContainer = gsap.utils.toArray(projectContainer);
  let allProjectContainer = gsap.utils.toArray(
    document.querySelectorAll(".work-container")
  );
  console.log(allProjectContainer);
  allProjectContainer.forEach((aContainer) => {
    projectContainerTl.from(aContainer, {
      opacity: 0,
      yPercent: -20,
      duration: 1.3,
      ease: "power4.inOut",
    });

    projectContainerTl.to(aContainer, {
      opacity: 1,
      yPercent: 0,
      ease: "power4.inOut",
      duration: 1.3,
      scrollTrigger: {
        trigger: aContainer,

        start: "top center",
        end: "bottom bottom",
        scrub: 1,
      },
    });
  });

  // projectContenTl
  //   .fromTo(
  //     projectDescription,
  //     {
  //       opacity: 0,
  //       backgroundColor: "transparent",
  //       y: 30,
  //     },
  //     {
  //       opacity: 1,
  //       duration: 1.2,
  //       ease: "power3.inOut",
  //       backgroundColor: "#112240",
  //       y: 0,
  //     }
  //   )
  //   .fromTo(
  //     projectDescriptionIntro,
  //     {
  //       opacity: 0,
  //       xPercent: 30,
  //     },
  //     {
  //       opacity: 1,
  //       xPercent: 0,
  //       duration: 1.3,
  //       ease: "power3.out",
  //     }
  //   );

  // projectContenTl.fromTo(
  //   projectImage,
  //   {
  //     opacity: 0,
  //   },
  //   {
  //     opacity: 1,

  //     ease: "power4.in",
  //   }
  // );

  // // animate technology list
  // let lists = gsap.utils.toArray(projectTechList);

  // lists.forEach((listItem) => {
  //   projectContenTl.fromTo(
  //     listItem,
  //     { opacity: 0, xPercent: -30 },
  //     {
  //       opacity: 1,
  //       xPercent: 0,
  //       ease: "expo.in",
  //       stagger: {
  //         amount: 1.3,
  //       },
  //     }
  //   );
  // });

  // // animate project linsk to github and live site
  // let links = gsap.utils.toArray(projectLinks);

  // links.forEach((link) => {
  //   projectContenTl.fromTo(
  //     link,
  //     { opacity: 0, yPercent: -30 },
  //     {
  //       opacity: 1,
  //       yPercent: 0,
  //       ease: "expo.in",
  //       stagger: {
  //         amount: 1.3,
  //       },
  //     }
  //   );
  // });

  return masterTimeline.add(projectContainerTl).add(projectContentTl, "+=8");
};
