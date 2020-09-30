import React, { useEffect } from "react";
import contactSVG from "../../images/contactSVG.svg";
import "./ContactMe.css";
import Footer from "../statelessComponents/Footer";

const ContactMe = () => {
  useEffect(() => {
    document.title = "Contact Jerry";
  });
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-svg">
          <img src={contactSVG} alt="Contact-svg" />
        </div>
        <div className="contact-msg">
          <p id="msg">
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
      <form className="contact-form">
        <div className="form-wrapper">
          <div className="form-group">
            <input type="text" name="name" required autoComplete="off" />
            <label className="label-name">
              <span className="content-name">Name</span>
            </label>
          </div>
          <div className="form-group">
            <input type="email" name="email" required autoComplete="off" />
            <label className="label-name">
              {" "}
              <span className="content-name">Email</span>
            </label>
            <small></small>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="contact-message"
              required
              autoComplete="off"
            />
            <label className="label-name">
              <span className="content-name">Message</span>
            </label>
          </div>
          <div type="submit" className="submit">
            Send it
            <div className="line"></div>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default ContactMe;
