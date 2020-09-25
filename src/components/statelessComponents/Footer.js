import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const date = () => {
    return new Date().getFullYear();
  };

  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div id="contact-wrapper">
          <div className="contact-phone">
            <h4 className="care2call">Care to Call?</h4>
            <p>08169222615</p>
          </div>
          <div className="contact-email">
            <h4>Or Send A Mail</h4>
            <p>josephjeremiah564@yahoo.com</p>
          </div>
          <div className="contact-address">
            <p>
              24,School Road,Harbour Layout,Ogbaru L.G.A,Anambra state,Nigeria
            </p>
          </div>
        </div>
        <div className="social-icons">
          <h4>Follow me on</h4>
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/joseph-jeremiah-3a6a22161/"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="https://github.com/Jerry299"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://twitter.com/JerryDnewDev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              href="https://facebook.com/Jgrin7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="copyrights">
        <small className="copy">
          {" "}
          &copy; {date()}, Joseph Chinemerem Jeremiah
        </small>
      </div>
    </div>
  );
};

export default Footer;
