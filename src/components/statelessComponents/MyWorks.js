import React from "react";
import "./MyWorks.scss";

const MyWorks = () => {
  return (
    <section className="works-container">
      <div className="works-wrapper">
        <h2>Some Projects I Have Worked On.</h2>
      </div>
      <div className="projects-container">
        <div className="project">
          <div className="project details">
            <h5 id="project-name">Project Name</h5>
            <div className="project-intro"></div>
          </div>
          <div className="card">
            <div className="card-front"></div>
            <div className="card-back">
              <p>See on github</p>
              <p>See live</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
