import React from "react";
import contactSVG from "../../images/contactSVG.svg";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-svg">
          <img src={contactSVG} alt="Contact-svg" />
        </div>
        <div className="contact-msg">
          <p>
            like what you see? have a project that you'd like to talk
            about,looking for a dev to hire? or want to ask a personal question?
          </p>
          <div className="get-in-touch">
            <h1>
              <span>Get in </span>
              <p>touch</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <input></input>
      </div>
    </div>
  );
};

export default ContactMe;
