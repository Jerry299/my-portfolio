import React from "react";
import { Link } from "react-router-dom";
import "./Burger.css";

const Burger = () => {
  return (
    <div className="burger-menu">
      <div className="bg-secondary-color"></div>
      <div className="menu-layer">
        <div className="menu-icon-bg"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <span className="position">01.</span>
                    <Link to="/about">About Me</Link>
                  </li>
                  <li>
                    <span className="position">02.</span>
                    <Link to="/skills">Skill Set</Link>
                  </li>
                  <li>
                    <span className="position">03.</span>
                    <Link to="/mywork">My Works</Link>
                  </li>
                  <li>
                    <span className="position">04.</span>
                    <Link to="/contact">Contact Me</Link>
                  </li>
                </ul>
              </nav>

              <div className="socials">
                Social Handles:
                <span>Facebook</span>
                <span>Twitter</span>
                <span>LinkedIn</span>
                <span>Github</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
