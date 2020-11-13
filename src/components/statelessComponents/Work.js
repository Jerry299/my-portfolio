import React from 'react';
import "./MyWorks.scss";

const Work = (props) => {
    return (
        
        <div className="project">
            <div className="project-details">
              <p id="project-name">{props.name}</p>
              <div className="project-intro"> {props.projectIntro} </div>
            </div>

            <div className="card">
              <div className="card-front" style={{backgroundImage:`url(${props.bgImage})`}} ></div>
              <div className="card-back">
                {/* <h2>
                  {props.backHeader}
                  <br />
                  <span> {props.backHeaderSpan} </span>
                </h2> */}
                <div className="projects-links">
                  <div className="butn_cont">
                    <a href={`${props.githubLink}`} target="_blank" rel="noreferrer noopener">Link To Github</a>
                  </div>
                  <div className="butn_cont">
                    <a href={`${props.appLink}`} target="_blank" rel="noreferrer noopener">Link To App</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

    
    );
};

export default Work;