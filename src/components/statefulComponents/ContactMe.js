import React, { useEffect, useRef } from "react";
import contactSVG from "../../images/contactSVG.svg";
import "./ContactMe.css";
import Footer from "../statelessComponents/Footer";
import { useIntersection } from "react-use";
import { fadeIn, fadeOut, svgAnimate } from "../animations/ContactmeAnimations";

const ContactMe = () => {
  //variables for Dom API
  let formRef = useRef(null);
  let svgRef = useRef(null);
  let contactMessage = useRef(null);
  let getInTouch = useRef(null);

  useEffect(() => {
    document.title = "Contact Jerry";
    svgAnimate(svgRef, contactMessage, getInTouch);
  }, []);
  const intersection = useIntersection(formRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  intersection && intersection.intersectionRatio < 0.8
    ? fadeOut(".contact-form")
    : fadeIn(".contact-form");
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-svg" ref={(el) => (svgRef = el)}>
          <img src={contactSVG} alt="Contact-svg" />
        </div>
        <div className="contact-msg" r>
          <p id="msg" ref={(el) => (contactMessage = el)}>
            like what you see? have a project that you'd like to talk
            about,looking for a dev to hire? or want to ask a personal question?
          </p>
          <div className="get-in-touch" ref={(el) => (getInTouch = el)}>
            <h1>
              <span>Get in </span>
              <p>touch</p>
            </h1>
          </div>
        </div>
      </div>
      <div className="form-container" ref={formRef}>
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
      </div>

      <Footer />
    </div>
  );
};

export default ContactMe;
