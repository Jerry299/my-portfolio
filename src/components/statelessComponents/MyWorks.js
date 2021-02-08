import React, { useRef, useEffect } from "react";
import "./MyWorks.scss";
import Footer from "./Footer";
import Work from "./Work";
import { workData } from "./WorksData";

// import animations
import { projectHeaderAnimation } from "../animations/WorkAnimation";

const MyWorks = () => {
  // variables for dom nodes
  let projectHeader = useRef(null);
  let name = useRef(null);

  useEffect(() => {
    // projectHeaderAnimation(projectHeader, name);
  }, []);
  return (
    <section className="works-container">
      <div className="works-wrapper">
        <p className="project-header" ref={(el) => (projectHeader = el)}>
          Some Projects I Have Worked On.
        </p>

        <div className="projects-container">
          <div className="projects-wrapper">
            <div ref={(el) => (name = el)}>
              {workData.map((work) => {
                return (
                  <Work
                    key={work.id}
                    id={work.id}
                    name={work.projectName}
                    intro={work.briefIntro}
                    imageUrl={work.imageLink}
                    githubUrl={work.githubLink}
                    appLink={work.liveAppLink}
                    tag={work.tags}
                  />
                );
              })}
              {/* <Work/> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default MyWorks;
