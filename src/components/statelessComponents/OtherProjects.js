import React from "react";
import "./OtherProjects.scss";
import { otherProjectsData } from "./WorksData";
import OtherProjectsTiles from "./OtherProjectsTiles";

const OtherProjects = () => {
  return (
    <section className="other_projects_container">
      <div className="other_projects_wrapper">
        <p className="other_projects_header">
          Other Fantastic Projects Worth Noting.
        </p>
        <div className="other-projects-grid">
          {otherProjectsData.map((tile) => {
            return (
              <OtherProjectsTiles
                key={tile.id}
                name={tile.projectName}
                description={tile.briefIntro}
                githubUrl={tile.githubLink}
                appLink={tile.liveAppLink}
                imageUrl={tile.imageLink}
                tags={tile.tags}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherProjects;
