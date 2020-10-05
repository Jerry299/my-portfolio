import React from "react";
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
import {} from "@fortawesome/free-regular-svg-icons";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <h1>WHO AM I?</h1>
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
                latest web technologies through continued coursework(On
                udemy,frontend masters,pluralsight lectures and workshops) and
                professional development.skills can be taught, but personality
                is inherent, i prefer to keep learning, continue challenging
                myself and do interesting things that matters.
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
        <div className="about-skills">
          <p>Skills Set</p>
          <div className="about-skills__list">
            <ul>
              <li>
                HTML
                <FontAwesomeIcon
                  icon={faHtml5}
                  size="2x"
                  style={{ color: "#e34626", marginLeft: ".5rem" }}
                />
              </li>
              <li>
                CSS
                <FontAwesomeIcon
                  icon={faCss3}
                  size="2x"
                  style={{ color: "#264de4", marginLeft: ".5rem" }}
                />
              </li>
              <li>
                Javascript
                <FontAwesomeIcon
                  icon={faJs}
                  size="2x"
                  style={{
                    color: "#f0db4f",
                    marginLeft: ".5rem",
                    background: "#000",
                  }}
                />
              </li>
              <li>
                React Js
                <FontAwesomeIcon
                  icon={faReact}
                  size="2x"
                  style={{ color: "#61DBFB", marginLeft: ".5rem" }}
                />
              </li>
              <li>
                Node Js
                <FontAwesomeIcon
                  icon={faNodeJs}
                  size="2x"
                  style={{ color: "#68A063", marginLeft: ".5rem" }}
                />
              </li>
              <li>
                BootStrap
                <FontAwesomeIcon
                  icon={faBootstrap}
                  size="2x"
                  style={{ color: "#602C50", marginLeft: ".5rem" }}
                />
              </li>
              <li>
                Git & Github
                <FontAwesomeIcon
                  icon={faGit}
                  size="2x"
                  style={{ color: "#F1502F", marginLeft: ".5rem" }}
                />
              </li>
              <li>MongoDb & Postgres Databases</li>
              <li>Express Js</li>
              <li>Testing WIth Jest</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;