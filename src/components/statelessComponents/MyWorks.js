import React from "react";
import "./MyWorks.scss";
import Footer from "./Footer";
import Work from "./Work";
import { workData } from "./WorksData";

const MyWorks = () => {
  return (
    <section className="works-container">
      <div className="works-wrapper">
        <p className="project-header">Some Things That I've Built.</p>

        <div className="projects-container">
          <div className="projects-wrapper">
            <div>
              {workData.map((work) => {
                return (
                  <Work
                    key={work.id}
                    id={work.id}
                    name={work.projectName}
                    description={work.briefIntro}
                    imageUrl={work.imageLink}
                    githubUrl={work.githubLink}
                    appLink={work.liveAppLink}
                    tag={work.tags}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default MyWorks;
