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

//animation functions
import checkMediaAndApplyAnimation from "../animations/AboutAnimations";

const About = () => {
  let totalPage = useRef(null);

  useEffect(() => {
    checkMediaAndApplyAnimation(totalPage);
  }, []);
  return (
    <section className="about-container" ref={(el) => (totalPage = el)}>
      <div className="about-wrapper">
        <div className="about-header">
          <p>WHO AM I?</p>
        </div>
        <div className="about-body">
          <div className="about-photo">
            <img
              src="https://res.cloudinary.com/jerry299/image/upload/c_scale,r_8,w_354/v1601525318/Snapchat-1598616708_b63zjo.png"
              alt=""
            />
          </div>
          <div className="about-details">
            <div className="about-details-content">
              <div>
                <ul>
                  <li>Description: Full Stack Javascript Developer.</li>
                  <li>Location: Nigeria.</li>
                  <li>Available: Yes,Interested In A New Challenge.</li>
                </ul>
              </div>
              <div className="about-details-speech">
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
        <div className="about-resume">
          <div className="about-resume-button" align="center">
            <a
              className="resume-btn-link"
              href="www.w"
              target="_blank"
              rel="nofollow noopener"
            >
              Check Out My C.V
            </a>
          </div>
        </div>
        {/* div below is about-skills */}
        <section className="about-skills">
          <p>Skills Set</p>
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
