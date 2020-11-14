 import React from 'react';
import "./MyWorks.scss";

const Work = (props) => {
    return (
      
          <div classNameName="project">
            <div classNameName="project-details">
              <p id="project-name">{props.name}</p>
              <div classNameName="project-intro"> {props.projectIntro} </div>
            </div>

            <div classNameName="card">
              <div classNameName="card-front" style={{backgroundImage:`url(${props.bgImage})`}} ></div>
              <div classNameName="card-back">
               
                <div classNameName="projects-links">
                  <div classNameName="butn_cont">
                    <a href={`${props.githubLink}`} target="_blank" rel="noreferrer noopener">Link To Github</a>
                  </div>
                  <div classNameName="butn_cont">
                    <a href={`${props.appLink}`} target="_blank" rel="noreferrer noopener">Link To App</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
};

















    
export default Work;