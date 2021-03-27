// TODO : move it to stateful components folder for uniformity
import React, { useEffect, useRef, useState } from "react";
import "./MyWorks.scss";

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

  let tagItem = useRef(null);
  let container = useRef(null);

  useEffect(() => {
    // ApplyWorkAnimation(name, intro,  tagItem, container);
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
        <div className="project-content">
          <div>
            <p ref={(el) => (name = el)} id="name">
              {props.name}.
            </p>
            <p className="intro" ref={(el) => (intro = el)}>
              {" "}
              {props.intro}.{" "}
            </p>
            <p className="tags">
              <span className="tag_items" ref={(el) => (tagItem = el)}>
                {props.tag}.
              </span>
            </p>
          </div>
        </div>

        <div className="project-image">
          <div className="header-image">
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

          <div className="body_post"></div>
        </div>
      </div>
      {/* project ends */}
    </div>
  );
};

export default Work;

/* <div className="butn-cover">
              <a
                href={`${props.githubUrl}`}
                target="_blank"
                rel="noreferrer noopener"
                className="butn"
              >
                See On Github
              </a>
              <a
                href={`${props.appLink}`}
                target="_blank"
                rel="noreferrer noopener"
                className="butn2"
              >
                See Live
              </a>
            </div> */
