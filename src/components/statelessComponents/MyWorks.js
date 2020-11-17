import React from "react";
import "./MyWorks.scss";
import Footer from './Footer';
import Work from './Work'
import {workData} from './WorksData'

const MyWorks = () => {

  return (
    <section className="works-container">
      <div className="works-wrapper">
        <h2 className="project-header">Some Projects I Have Worked On.</h2>

        <div className="projects-container">
          <div className="projects-wrapper">
            <div>
              {/* {workData.map((i,work) => {
                return (
                  <Work key={work.id} name={work.projectName} intro={work.briefIntro} 
                  imageUrl={work.imageLink} githubUrl={work.githubLink} appLink={work.liveAppLink}
                  />
                )
              })} */}
              <Work/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default MyWorks;
