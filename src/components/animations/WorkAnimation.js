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

  let projectContenTl = gsap.timeline();

  // scale the image down before the animation begins
  // projectContenTl.set(projectImage, { opacity: 0 });

  projectContenTl.fromTo(
    [featuredProject, projectTitle],
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1.3,
      ease: "power4.out",
      stagger: {
        amount: 1.5,
      },
    }
  );

  projectContenTl
    .fromTo(
      projectDescription,
      {
        opacity: 0,
        backgroundColor: "transparent",
        y: 30,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power3.inOut",
        backgroundColor: "#112240",
        y: 0,
      }
    )
    .fromTo(
      projectDescriptionIntro,
      {
        opacity: 0,
        xPercent: 30,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1.3,
        ease: "power3.out",
      }
    );

  projectContenTl.fromTo(
    projectImage,
    {
      opacity: 0,
    },
    {
      opacity: 1,

      ease: "power4.in",
    }
  );

  // animate technology list
  let lists = gsap.utils.toArray(projectTechList);

  lists.forEach((listItem) => {
    projectContenTl.fromTo(
      listItem,
      { opacity: 0, xPercent: -30 },
      {
        opacity: 1,
        xPercent: 0,
        ease: "expo.in",
        stagger: {
          amount: 1.3,
        },
      }
    );
  });

  // animate project linsk to github and live site
  let links = gsap.utils.toArray(projectLinks);

  links.forEach((link) => {
    projectContenTl.fromTo(
      link,
      { opacity: 0, yPercent: -30 },
      {
        opacity: 1,
        yPercent: 0,
        ease: "expo.in",
        stagger: {
          amount: 1.3,
        },
      }
    );
  });

  return masterTimeline.add(projectContenTl);
};

// #root > div > div.wrapper > div > section > div.works-wrapper > div > div > div > div:nth-child(1) > div > div.project-content > div > ul > li:nth-child(1)
