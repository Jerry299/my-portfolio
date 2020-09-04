import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-overlay"></div>
      <div className="intro-content">
        <div>
          <h5>Hello, World.</h5>
          <h1>I'm Joseph chinemerem jeremiah.</h1>

          <p class="intro-position">
            <span>Full-Stack Developer</span>
            {/* <span>UI/UX Designer</span> */}
          </p>
          <h6>Hire me</h6>
        </div>
      </div>
    </div>
  );
};

export default Intro;
