import React, { useRef, useEffect } from "react";
import "./About.css";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJs,
  faGit,
  faNodeJs,
  faBootstrap,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import useWindowSize from "../../utils/useWindowSize";

//animation functions
import {
  ApplyAnimationOnMobile,
  ApplyAnimationOnTablet,
  ApplyAnimationOnDesktop,
} from "../animations/AboutAnimations";

const About = () => {
  let aboutHeader = useRef(null);
  let aboutBody = useRef(null);
  let description = useRef(null);
  let speech = useRef(null);
  let resumeParent = useRef(null);
  let resume = useRef(null);

  let skillsHeader = useRef(null);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 300 && width < 767) {
      ApplyAnimationOnMobile(
        aboutHeader,
        aboutBody,
        description,
        speech,
        resumeParent,
        resume,
        skillsHeader,
        ".box"
      );
    }
    if (width >= 768 && width < 1199) {
      ApplyAnimationOnTablet(
        aboutHeader,
        aboutBody,
        description,
        speech,
        ".about-photo",
        resumeParent,
        resume,
        skillsHeader,
        ".box"
      );
    }
    if (width >= 1200 && width < 2900) {
      ApplyAnimationOnDesktop(
        aboutHeader,
        ".circle",
        aboutBody,
        description,
        speech,
        ".about-photo",
        resumeParent,
        resume,
        skillsHeader,
        ".box"
      );
    }
  }, [width]);

  return (
    <section className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <p ref={(el) => (aboutHeader = el)}>WHO AM I?</p>
          <span className="circle"></span>
        </div>
        <div className="about-body" ref={(el) => (aboutBody = el)}>
          <div className="about-photo">
            <img
              src="https://res.cloudinary.com/jerry299/image/upload/c_scale,r_8,w_354/v1601525318/Snapchat-1598616708_b63zjo.png"
              alt=""
            />
          </div>
          <div className="about-details" ref={(el) => (description = el)}>
            <div className="about-details-content">
              <div>
                <ul>
                  <li>Description: Javascript Developer MERN STACK.</li>
                  <li>Location: Nigeria.</li>
                  <li>Available: Yes,Interested In A New Challenge.</li>
                </ul>
              </div>
              <div
                className="about-details-speech details"
                ref={(el) => (speech = el)}
              >
                <span>Joseph Chinemerem Jeremiah</span> is a Passionate Human
                Being, Who loves to Learn new things,tools and technologies. He
                takes Functionality to the core and has a great eye for
                aesthetics, A very cool team player who feels collaboration
                brings out the best in participating parties. He always takes
                time to update existing knowledge, A fantastic football
                player,video game lover.
              </div>
            </div>
          </div>
        </div>
        <div className="about-resume" ref={(el) => (resumeParent = el)}>
          <div className="about-resume-button" align="center">
            <a
              className="resume-btn-link"
              href="https://docs.google.com/document/d/1dyPodNxdfH4Megnb9S759mKMapjZN_7XrzZ7uudcjBo/edit?usp=sharing"
              target="_blank"
              rel="nofollow noopener noreferrer"
              ref={(el) => (resume = el)}
            >
              Check Out My C.V
            </a>
          </div>
        </div>
        {/* div below is about-skills */}
        <section className="about-skills">
          <p ref={(el) => (skillsHeader = el)} id="skillsHeader">
            <span className="skills_header">Tools</span> <span> </span>
            <span className="skills_header">I</span> <span> </span>
            <span className="skills_header">Can</span> <span> </span>
            <span className="skills_header">Work</span> <span> </span>
            <span className="skills_header">With.</span>
          </p>

          <div className="container ">
            <div className="row justify-content-center">
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  HTML
                  <FontAwesomeIcon
                    icon={faHtml5}
                    size="2x"
                    style={{ color: "#e34626", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  CSS
                  <FontAwesomeIcon
                    icon={faCss3}
                    size="2x"
                    style={{ color: "#264de4", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="row justify-content-center">
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  Javascript
                  <FontAwesomeIcon
                    icon={faJs}
                    size="2x"
                    style={{
                      color: "#f0db4f",
                      marginLeft: ".5rem",
                    }}
                  />
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  React Js
                  <FontAwesomeIcon
                    icon={faReact}
                    size="2x"
                    style={{ color: "#61DBFB", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
            </div>
            {/* third row */}
            <div className="row justify-content-center">
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  Node Js
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    size="2x"
                    style={{ color: "#68A063", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  BootStrap
                  <FontAwesomeIcon
                    icon={faBootstrap}
                    size="2x"
                    style={{ color: "#602C50", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
            </div>

            {/* fourth row */}
            <div className="row justify-content-center">
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  Git & Github
                  <FontAwesomeIcon
                    icon={faGit}
                    size="2x"
                    style={{ color: "#f14e32", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  MongoDb
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="2x"
                    style={{ color: "#116149", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
            </div>
            {/* fifth row */}
            <div className="row justify-content-center">
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  Postgres
                  <FontAwesomeIcon
                    icon={faDatabase}
                    size="2x"
                    style={{ color: "#336791", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
              <div className="col-xs-6 col-sm-6 col-md-4 box-container">
                <div className="box">
                  Express
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    size="2x"
                    style={{ color: "#68A063", marginLeft: ".5rem" }}
                  />
                </div>
              </div>
            </div>

            {/* end of boxes */}
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
};

export default About;
