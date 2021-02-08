import React, { useEffect, useRef } from "react";
import "./MyWorks.scss";
import useWindowSize from "../../utils/useWindowSize";

// import animations
import {
  ApplyWorkAnimationOnMobile,
  ApplyWorkAnimationTablet,
  ApplyWorkAnimationOnDesktop,
} from "../animations/WorkAnimation";

const Work = (props) => {
  //target DOM nodes
  let name = useRef(null);
  let intro = useRef(null);
  let tag = useRef(null);
  let tagItem = useRef(null);
  let imageWrapper = useRef(null);

  // get device width
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 300 && width < 767) {
      ApplyWorkAnimationOnMobile();
    }

    if (width >= 768 && width < 1199) {
      ApplyWorkAnimationTablet();
    }

    if (width >= 1200 && width < 1600) {
      ApplyWorkAnimationOnDesktop(name, intro, tag, tagItem, imageWrapper);
    }
  }, [width]);

  return (
    <div className="work-container">
      {/* project start */}
      {/* this div immediately below just reverses the layout of the card if it is odd  */}
      <div
        className={`work-wrapper ${
          props.id % 2 === 0 ? "work-wrapper-even" : "work-wrapper-odd"
        }`}
      >
        <div className="card-info">
          <div>
            <h2 ref={(el) => (name = el)}>{props.name}.</h2>
            <p className="intro" ref={(el) => (intro = el)}>
              {" "}
              {props.intro}.{" "}
            </p>
            <p className="tags">
              <span className="solid_tag" ref={(el) => (tag = el)}>
                Tools:{" "}
              </span>{" "}
              <span className="tag_items" ref={(el) => (tagItem = el)}>
                {props.tag}.
              </span>
            </p>
          </div>
        </div>

        <div className="cards">
          <div className="header-image" ref={(el) => (imageWrapper = el)}>
            <img src={`${props.imageUrl}`} alt="" className="img" />
          </div>

          <div className="body_post">
            <div className="butn-cover">
              <a
                href="www"
                target="_blank"
                rel="noreferrer noopener"
                className="butn"
              >
                See On Github
              </a>
              <a
                href="www"
                target="_blank"
                rel="noreferrer noopener"
                className="butn2"
              >
                See Live
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* project ends */}
    </div>
  );
};

export default Work;
