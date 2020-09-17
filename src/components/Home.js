import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-wrapper">
        <h1 className="home-hi">
          {" "}
          Hello <span id="home-world">World,</span>
        </h1>
        <h2 className="home-name">
          I am <span className="my-name">Joseph Chinemerem Jeremiah</span>,
        </h2>
        <div className="home-sentence">
          <p className="home-skills">
            A Javascript Full Stack Developer,A Passionate Learner and A
            Technology Enthusiast.
          </p>
        </div>

        <div className="social-accounts"></div>
      </div>
      <div className="click">
        <p>
          <em>click on menu to get started.</em>
        </p>
      </div>
    </div>
  );
};

export default Home;
