import { gsap } from "gsap";

const checkMediaAndApplyAnimation = (totalPage) => {
  const mediaQueryForPhones = window.matchMedia("(max-device-width: 767px)");
  const mediaQueryForTablets = window.matchMedia("(max-device-width: 1199px)");
  const mediaQueryForDesktops = window.matchMedia("(max-device-width: 1600px)");

  if (mediaQueryForPhones.matches) {
    let tl = gsap.timeline();
    tl.to(totalPage, {
      duration: 2,
      opacity: 1,
      xPercent: 50,
    });
  }
};

export default checkMediaAndApplyAnimation;
