import React from "react";
import "./OtherProjects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const OtherProjectsTiles = ({
  name,
  description,
  githubUrl,
  appLink,
  tags,
}) => {
  return (
    <div className="other-projects-inner">
      <header>
        <div className="other-projects-top">
          <div className="other-projects-links">
            <a
              href={githubUrl}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href={appLink}
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
            </a>
          </div>
        </div>
        <div className="other-projects-title">
          <p>{name}</p>
        </div>
        <div className="other-projects-description">{description}</div>
      </header>
      <footer>
        <ul className="other-projects-tech-list">
          {tags.map((tag, i) => {
            return <li key={i}>{tag}</li>;
          })}
        </ul>
      </footer>
    </div>
  );
};

export default OtherProjectsTiles;
