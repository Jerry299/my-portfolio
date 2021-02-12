// move it to stateful components folder for uniformity
import React, { useEffect, useRef, useState } from "react";
import "./MyWorks.scss";
//import useWindowSize from "../../utils/useWindowSize";

// import animations
import { ApplyWorkAnimation } from "../animations/WorkAnimation";

const Work = (props) => {
  //state for displaying image
  const [imgState, setImgState] = useState(false);

  // handler for image onload
  const showImageAfterItLoads = () => {
    setImgState(true);
  };

  //target DOM nodes
  let name = useRef(null);
  let intro = useRef(null);
  let tag = useRef(null);
  let tagItem = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    ApplyWorkAnimation(name, intro, tag, tagItem, container);
  });

  return (
    <div className="work-container">
      {/* project start */}
      {/* this div immediately below just reverses the layout of the card if it is odd  */}
      <div
        ref={(el) => (container = el)}
        className={`work-wrapper ${
          props.id % 2 === 0 ? "work-wrapper-even" : "work-wrapper-odd"
        }`}
      >
        <div className="card-info">
          <div>
            <p ref={(el) => (name = el)} id="name">
              {props.name}.
            </p>
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
          <div className="header-image">
            {/* <img src={`${props.imageUrl}`} alt="" className="img" /> */}
            {/* <img alt="" className="img" /> */}
            <img
              className="img"
              style={imgState ? { display: "none" } : {}}
              alt=""
            />
            <img
              className="img"
              src={`${props.imageUrl}`}
              onLoad={showImageAfterItLoads}
              style={imgState ? {} : { display: "none" }}
              alt=""
            />
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
