import React from "react";
import "./Intro2.css";
import "../../App.css";


const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-content">
        <div className="row">
          <div className="cols">
            <h5>Hello, World.</h5>
            <h1>I'm Joseph chinemerem j.</h1>

            <p className="intro-position">
              <span>Full-Stack Js Developer</span>
              {/* <span>UI/UX Designer</span> */}
            </p>
            <h6 className="hire">Hire me</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
