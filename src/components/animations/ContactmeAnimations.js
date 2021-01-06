import { TweenLite } from "gsap";

const svgAnimation = (target) => {
  TweenLite.to(target, 2, { fill: "red" });
};

export default svgAnimation;
