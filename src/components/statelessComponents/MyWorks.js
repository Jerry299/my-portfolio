import React from "react";
import "./MyWorks.scss";
import Footer from './Footer';
import Work from './Work'
import {WorkData} from './WorksData'

const MyWorks = () => {

  return (
    <section className="works-container">
      <div className="works-wrapper">
        <h2 className="project-header">Some Projects I Have Worked On.</h2>

        <div className="projects-container">
          <div className="projects-wrapper">
            <div>
              {/* {WorkData.map((work) => {
                return <Work key={work.id}
                name={work.projectName} projectIntro={work.introData}
                backHeader={work.backHeader} backHeaderSpan={work.backHeaderSpan}
                githubLink={work.linkToGithub} appLink={work.linkToLiveApp}
                bgImage={work.backGroundImage}
                />
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
