import React from "react";
import "./Intro2.css";
import "../../App.css";
import Particles from "react-particles-js";

const Intro = () => {
  return (
    <div id="intro">
      <div className="intro-overlay">
        <Particles
          params={{
            particles: {
              shape: {
                type: "circle",
                stroke: {
                  width: 7,
                  color: "#fff",
                },
              },
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
            },
          }}
        />
      </div>
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
