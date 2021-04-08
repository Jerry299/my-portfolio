// TODO : later on move it to stateful components folder for uniformity
import React, { useEffect, useRef, useState } from "react";
import "./MyWorks.scss";

import useWindowSize from "../../utils/useWindowSize";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

// import animations
import {
  ApplyWorkAnimationOnMobile,
  ApplyWorkAnimationOnTablet,
  ApplyWorkAnimationOnDesktop,
} from "../animations/WorkAnimation";
import userEvent from "@testing-library/user-event";

const Work = (props) => {
  //state for displaying image
  const [imgState, setImgState] = useState(false);

  // handler for image onload
  const showImageAfterItLoads = () => {
    setImgState(true);
  };

  //target DOM nodes using refs
  // let featuredProject = useRef(null);
  // let projectTitle = useRef(null);
  // let projectDescription = useRef(null);
  // let projectDescriptionIntro = useRef(null);
  // let projectTechList = useRef([]);
  // let projectLinks = useRef([]);
  // let projectImage = useRef(null);

  //get device width size
  const { width } = useWindowSize();

  useEffect(() => {
    console.log("rendering this");
    if (width >= 300 && width < 767) {
      ApplyWorkAnimationOnMobile();
    }
    if (width >= 768 && width < 1199) {
      ApplyWorkAnimationOnTablet();
    }
    if (width >= 1200 && width < 2900) {
      ApplyWorkAnimationOnDesktop();
    }
    return () => {
      console.log("clean up");
    };
  }, [imgState]);
  console.log(width, imgState);
  return (
    <div className="work-container">
      {/* project start */}
      {/* this div immediately below just reverses the layout of the card if it is odd  */}
      <div className="work-wrapper even">
        <div className="project-content">
          <div>
            <p className="project-overline">Featured Project</p>
            <h3 className="project-title"> {props.name}.</h3>

            <div className="project-description">
              <p className="intro"> {props.description}. </p>
            </div>
            <ul className="project-tech-list">
              {props.tag.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
            <div className="projects-links">
              <a
                href={props.githubUrl}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href={props.appLink}
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </a>
            </div>
          </div>
        </div>

        <div className="project-image">
          <div className="header-image">
            <div className="overlay"></div>
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
        </div>
      </div>
      {/* project ends */}
    </div>
  );
};

export default Work;
