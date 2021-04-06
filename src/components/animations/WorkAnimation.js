import splitWord from "../../utils/splitWord";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const ApplyWorkAnimationOnMobile = () => {};

export const ApplyWorkAnimationOnTablet = () => {};

export const ApplyWorkAnimationOnDesktop = (
  featuredProject,
  projectTitle,
  projectDescription,
  projectDescriptionIntro
) => {
  let masterTimeline = gsap.timeline();

  let projectContenTl = gsap.timeline();
  let splitWordTl = gsap.timeline();

  const splitedWord = splitWord(projectDescriptionIntro);
  console.log(splitedWord);
  projectContenTl.fromTo(
    [featuredProject, projectTitle, projectDescription],
    { opacity: 0, y: 30, ease: "power4.out" },
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

  return masterTimeline.add(projectContenTl).add(splitWordTl);
};
