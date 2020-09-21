import React from "react";
import { Link } from "react-router-dom";
import "./Burger.css";

import "../../App.css";

const Burger = () => {
  return (
    <div className="burger-menu">
      <div className="bg-secondary-color"></div>
      <div className="menu-layer">
        <div className="menu-icon-bg"></div>
        <div className="container">
          <div className="wrapper">
            {/*  */}
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <sup className="position">01.</sup>
                    <Link to="/about">About Me</Link>
                  </li>
                  <li>
                    <sup className="position">02.</sup>
                    <Link to="/skills">Skill Set</Link>
                  </li>
                  <li>
                    <sup className="position">03.</sup>
                    <Link to="/mywork">My Works</Link>
                  </li>
                  <li>
                    <sup className="position">04.</sup>
                    <Link to="/contact">Contact Me</Link>
                  </li>
                </ul>
              </nav>

              <div className="socials">
                {/* Social Handles:
                <p>Facebook</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
                <p>Github</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
