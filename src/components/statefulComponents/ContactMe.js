import React from "react";
import contactSVG from "../../images/contactSVG.svg";

const ContactMe = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-form"></div>
        <div className="contact-svg">
          <img src={contactSVG} alt="Contact-svg" />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
