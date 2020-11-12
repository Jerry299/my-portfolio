import React from "react";
import "./MyWorks.scss";
import Footer from './Footer';
import Work from './Work'

const MyWorks = () => {
  return (
    <section className="works-container">
      <div className="works-wrapper">
        <h2 className="project-header">Some Projects I Have Worked On.</h2>

        <div className="projects-container">
          <div className="projects-wrapper">
          <Work/>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default MyWorks;
