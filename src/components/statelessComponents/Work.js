import React from 'react';
import "./MyWorks.scss";

const Work = () => {
    return (
        
        <div className="project">
            <div className="project-details">
              <p id="project-name">Blendz</p>
              <div className="project-intro">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
              galley of type and scrambled it t </div>
            </div>

            <div className="card">
              <div className="card-front"></div>
              <div className="card-back">
                <h2>
                  Blendz
                  <br />
                  <span>Coffee Store</span>
                </h2>
                <div className="projects-links">
                  <div className="butn_cont">
                    <a href="" target="_blank" rel="noreferrer noopener">Link To Github</a>
                  </div>
                  <div className="butn_cont">
                    <a href="" target="_blank" rel="noreferrer noopener">Link To Github</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

    
    );
};

export default Work;