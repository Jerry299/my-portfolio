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
              <h4>
                Joseph Chinemerem Jeremiah is a Javascript Full-Stack Web
                Developer,currently located in Nigeria and is always interested
                in a challenge.
              </h4>
              <div>
                Joseph C Jeremiah is a Passionate Tech Enthusiast, who is
                willing to learn and build solutions. His Background In
                Engineering inform his mindful but competitive approach.
                Jeremiah is Fueled by his passion for understanding web
                technologies and considers himself a "Life long learner" eager
                to build on existing web technologies knowledge and stay in tune
                with the latest web technologies through continued coursework(On
                udemy,frontend masters,pluralsight lectures and workshops ) and
                professional development.
              </div>
            </div>
          </div>
        </div>
        <div className="about-resume">
          <h3>Hire Me</h3>
        </div>
        <div className="about-skills">
          <h3>What I Can Do</h3>
          <div className="about-skills__list">
            <ul>
              <li>
                HTML
                <FontAwesomeIcon icon={faHtml5} size="2x" />
              </li>
              <li>
                CSS
                <FontAwesomeIcon icon={faCss3} size="2x" />
              </li>
              <li>
                Javascript
                <FontAwesomeIcon icon={faJs} size="2x" />
              </li>
              <li>
                React Js
                <FontAwesomeIcon icon={faReact} size="2x" />
              </li>
              <li>
                Node Js
                <FontAwesomeIcon icon={faNodeJs} size="2x" />
              </li>
              <li>
                BootStrap
                <FontAwesomeIcon icon={faBootstrap} size="2x" />
              </li>
              <li>
                Git
                <FontAwesomeIcon icon={faGit} size="2x" />
              </li>
              <li>MongoDb & Postgres</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default About;
