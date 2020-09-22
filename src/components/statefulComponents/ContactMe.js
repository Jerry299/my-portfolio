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
        <div className="form-wrapper">
          <div className="form-group">
            <input type="text" name="name" required autoComplete="off" />
            <label className="label-name"></label>
            <span className="content-name">Name</span>
          </div>
          <div className="form-group">
            <input type="email" name="email" required autoComplete="off" />
            <label className="label-name"></label>
            <span className="content-name">Email</span>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="contact-message"
              required
              autoComplete="off"
            />
            <label className="label-name"></label>
            <span className="content-name">Message</span>
          </div>
          <div className="submit">Send it</div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
