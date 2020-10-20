import React from "react";
import "./MyWorks.scss";

const MyWorks = () => {
  return (
    <section className="works-container">
      <div className="works-wrapper">
        <h2>Some Projects I Have Worked On.</h2>

        <div className="projects-container">
          <div className="project">
            <div className="project details">
              <p id="project-name">Project Name</p>
              <div className="project-intro"></div>
            </div>

            <div className="card">
              <div className="card-front"></div>
              <div className="card-back">
                <h2>
                  Jane Doe
                  <br />
                  <span>Senior Designer</span>
                </h2>
                <div className="projects-links">
                  <p>Link to github</p>
                  <p>Link to live app</p>
                </div>
              </div>
            </div>
          </div>

          {/* another project */}
          <div className="project">
            <div className="project details">
              <p id="project-name">Project Name</p>
              <div className="project-intro"></div>
            </div>

            <div className="card">
              <div className="card-front"></div>
              <div className="card-back">
                <h2>
                  Jane Doe
                  <br />
                  <span>Senior Designer</span>
                </h2>
                <div className="projects-links">
                  <p>Link to github</p>
                  <p>Link to live app</p>
                </div>
              </div>
            </div>
          </div>
          {/* end of project */}
        </div>
      </div>
    </section>
  );
};

export default MyWorks;
