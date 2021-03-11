import React, { useEffect, useRef, useState } from "react";
import contactSVG from "../../images/contactSVG.svg";
import "./ContactMe.css";
import Footer from "../statelessComponents/Footer";
import { useIntersection } from "react-use";
// Import animations
import { fadeIn, fadeOut, svgAnimate } from "../animations/ContactmeAnimations";

const ContactMe = () => {
  // state for input

  const [state, setState] = useState({
    name: "",
    email: "",
    contactmessage: "",
  });
  const [errors, setErrors] = useState("");
  console.log(errors);

  //variables for Dom API
  let formRef = useRef(null);
  let svgRef = useRef(null);
  let contactMessage = useRef(null);
  let getInTouch = useRef(null);

  useEffect(() => {
    document.title = "Contact Jerry";
    svgAnimate(svgRef, contactMessage, getInTouch);
  }, [svgRef]);

  // contact form animation starts
  const intersection = useIntersection(formRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.8,
  });

  intersection && intersection.intersectionRatio < 0.8
    ? fadeOut(".contact-form")
    : fadeIn(".contact-form");

  // contact form animation ends

  //event handlers

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  // form validation
  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    const { name, email, contactmessage } = state;
    //regex for name validation
    let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!name || !regName.test(name)) {
      formIsValid = false;
      errors["nameError"] = "Invalid Full Name";
    }
    if (!email || !emailPattern.test(email)) {
      formIsValid = false;
      errors["emailError"] = "Please Enter Your Email";
    }
    if (!emailPattern.test(email)) {
      formIsValid = false;
      errors["emailError"] = "Invalid Email";
    }
    if (!contactmessage) {
      formIsValid = false;
      errors["contactMessageError"] = "Please Leave A Message";
    }
    if (contactmessage.length < 4) {
      formIsValid = false;
      errors["contactMessageError"] =
        "Message shouldn't be less than 4 letters";
    }
    if (contactmessage.length > 55) {
      formIsValid = false;
      errors["contactMessageError"] =
        "Message shouldn't be more than 55 letters";
    }

    setErrors(errors);

    return formIsValid;
  };

  // send message to backend

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-svg" ref={(el) => (svgRef = el)}>
          <img src={contactSVG} alt="Contact-svg" />
        </div>
        <div className="contact-msg">
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
              <input type="text" name="name" required onChange={handleChange} />
              <label className="label-name">
                {" "}
                <span className="content-name">Full Name</span>
              </label>
            </div>
            {errors.nameError ? <small>{errors.nameError}</small> : null}
            <div className="form-group">
              <input
                type="email"
                name="email"
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <label className="label-name">
                {" "}
                <span className="content-name">Email</span>
              </label>
            </div>
            {errors.emailError ? <small>{errors.emailError}</small> : null}
            <div className="form-group">
              <input
                type="text"
                name="contactmessage"
                required
                autoComplete="off"
                onChange={handleChange}
              />
              <label className="label-name">
                {" "}
                <span className="content-name">Message</span>
              </label>
            </div>
            {errors.contactMessageError ? (
              <small>{errors.contactMessageError}</small>
            ) : null}
            <div type="submit" className="submit" onClick={validateForm}>
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
