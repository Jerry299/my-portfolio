import React, { useRef, useEffect } from "react";
import "./About.css";
import Footer from "./Footer";

// import { faDatabase } from "@fortawesome/free-solid-svg-icons";
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
  let aboutSkills = useRef(null);
  // let skillsContainer = useRef(null);
  let resume = useRef(null);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width >= 300 && width < 767) {
      ApplyAnimationOnMobile(
        aboutHeader,
        aboutBody,
        description,
        speech,
        aboutSkills,
        ".list-item",
        resumeParent,
        resume
      );
    }
    if (width >= 768 && width < 1199) {
      ApplyAnimationOnTablet(
        aboutHeader,
        aboutBody,
        description,
        speech,
        ".about-photo",
        aboutSkills,
        ".list-item",
        resume
      );
    }
    if (width >= 1200 && width < 2900) {
      ApplyAnimationOnDesktop(
        aboutHeader,
        aboutBody,
        description,
        speech,
        ".about-photo",
        aboutSkills,
        ".list-item",
        resumeParent,
        resume
      );
    }
  }, [width]);

  return (
    <section className="about-container">
      <div className="about-wrapper">
        <div className="about-header">
          <p ref={(el) => (aboutHeader = el)}>WHO AM I?</p>
        </div>
        <div className="about-body" ref={(el) => (aboutBody = el)}>
          <div className="about-photo">
            <div>
              <div className="about-overlay"></div>
              <img
                src="https://res.cloudinary.com/jerry299/image/upload/c_scale,r_7,w_354/v1566591871/IMG_20190707_123854_5_edlopp.png"
                alt=""
              />
            </div>
          </div>
          <div className="about-details" ref={(el) => (description = el)}>
            <div className="about-details-content">
              <div>
                <ul>
                  <li>Description: Javascript Developer.</li>
                  <li>Location: Nigeria.</li>
                  <li>Available: Yes,Interested In A New Challenge.</li>
                </ul>
              </div>
              <div
                className="about-details-speech details"
                ref={(el) => (speech = el)}
              >
                <p>
                  Hello, I am Jerry, a software engineer from Anambra,Nigeria.
                </p>
                <p>
                  I really enjoy creating things that are live on the internet,
                  I am motivated by thirst for knowledge ,and building products
                  that would always be cost effective and meet stakeholders
                  value.
                </p>
                <p>
                  Fantastic football player just if you need an excellent team
                  player and goal getter.
                </p>
              </div>
            </div>
          </div>
        </div>
        <section className="about-skills">
          <p ref={(el) => (aboutSkills = el)}>
            Here is a list of technologies that I can work with.
          </p>
          <ul className="skills-list">
            <li className="list-item">HTML</li>
            <li className="list-item">(S)CSS</li>
            <li className="list-item">Javascript</li>
            <li className="list-item">React Js</li>
            <li className="list-item">Node Js</li>
            <li className="list-item">Express Js</li>
            <li className="list-item">MongoDb</li>
            <li className="list-item">Postgres</li>
          </ul>
        </section>
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
      </div>
      <Footer />
    </section>
  );
};

export default About;
