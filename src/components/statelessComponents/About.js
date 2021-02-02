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
  let totalPage = useRef(null);
  let aboutHeader = useRef(null);
  let aboutBody = useRef(null);
  let description = useRef(null);
  let speech = useRef(null);
  let resumeParent = useRef(null);
  let resume = useRef(null);
  let aboutSection = useRef(null);
  let skillsHeader = useRef(null);
  let skillsHeader2 = useRef(null);
  let skillsHeader3 = useRef(null);

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
        skillsHeader2,
        skillsHeader3
      );
    }
    if (width >= 768 && width < 1199) {
      ApplyAnimationOnTablet(totalPage);
    }
    if (width >= 1200 && width < 1600) {
      ApplyAnimationOnDesktop(totalPage);
    }
  }, [width]);

  return (
    <section className="about-container" ref={(el) => (totalPage = el)}>
      <div className="about-wrapper">
        <div className="about-header" ref={(el) => (aboutHeader = el)}>
          <p>WHO AM I?</p>
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
                  <li>Description: Full Stack Javascript Developer.</li>
                  <li>Location: Nigeria.</li>
                  <li>Available: Yes,Interested In A New Challenge.</li>
                </ul>
              </div>
              <div
                className="about-details-speech details"
                ref={(el) => (speech = el)}
              >
                <span>Joseph Chinemerem Jeremiah</span> is a Passionate Tech
                Enthusiast, who is willing to learn and build solutions.His
                Background In Engineering inform his mindful but competitive
                approach.Jeremiah is Fueled by his passion,high energy levels
                and boundless enthusiasm for understanding technologies and
                considers himself a "Life long learner" eager to build on
                existing web technologies knowledge and stay in tune with the
                latest web technologies through continued courseworks and
                strongly believes professional development skills can be taught,
                but personality is inherent, i prefer to keep learning, continue
                challenging myself and do interesting things that matters.
              </div>
            </div>
          </div>
        </div>
        <div className="about-resume" ref={(el) => (resumeParent = el)}>
          <div className="about-resume-button" align="center">
            <a
              className="resume-btn-link"
              href="www.w"
              target="_blank"
              rel="nofollow noopener"
              ref={(el) => (resume = el)}
            >
              Check Out My C.V
            </a>
          </div>
        </div>
        {/* div below is about-skills */}
        <section className="about-skills" ref={(el) => (aboutSection = el)}>
          <p id="skillsHeader" ref={(el) => (skillsHeader = el)}>
            Skills Set
          </p>
          <p id="skillsHeader2" ref={(el) => (skillsHeader2 = el)}>
            What I Can Do.
          </p>
          <p id="skillsHeader3" ref={(el) => (skillsHeader3 = el)}>
            Tools I Can Work WIth.
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
