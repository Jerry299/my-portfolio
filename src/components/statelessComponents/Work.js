import React, { useRef, useEffect } from "react";
import "./MyWorks.scss";
import useWindowSize from "../../utils/useWindowSize";

// import animations
import {
  ApplyWorkAnimationOnMobile,
  ApplyWorkAnimationTablet,
  ApplyWorkAnimationOnDesktop,
} from "../animations/WorkAnimation";

const Work = (props) => {
  //variables for selecting DOM nodes
  let wrapper = useRef(null);

  // get device width
  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 300 && width < 767) {
      ApplyWorkAnimationOnMobile(wrapper);
    }

    if (width >= 768 && width < 1199) {
      ApplyWorkAnimationTablet();
    }

    if (width >= 1200 && width < 1600) {
      ApplyWorkAnimationOnDesktop();
    }
  }, [width]);

  return (
    <div className="work-container" ref={(el) => (wrapper = el)}>
      {/* project start */}
      {/* this div immediately below just reverses the layout of the card if it is odd  */}
      <div
        className={`work-wrapper ${
          props.id % 2 === 0 ? "work-wrapper-even" : "work-wrapper-odd"
        }`}
      >
        <div className="card-info">
          <div>
            <h2>{props.name}.</h2>
            <p className="intro"> {props.intro}. </p>
            <p className="tags">
              <span className="solid_tag">Tools: </span>{" "}
              <span className="tag_items">{props.tag}.</span>
            </p>
          </div>
        </div>

        <div className="cards">
          <div className="header-image">
            <img src={`${props.imageUrl}`} alt="" className="img" />
          </div>

          <div className="body_post" ref={(el) => (wrapper = el)}>
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
