import React from "react";
import { Link } from "react-router-dom";

const Burger = () => {
  return (
    <div className="burger-menu">
      <div className="bg-secondary-color"></div>
      <div className="menu-layer">
        <div className="menu-icon-bg"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-list">
              <nav>
                <ul>
                  <li>
                    <Link to="/about">About Me</Link>
                  </li>
                  <li>
                    <Link to="/skills">Skill Set</Link>
                  </li>
                  <li>
                    <Link to="/mywork">My Works</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Me</Link>
                  </li>
                </ul>
              </nav>
              <div className="personality">
                <h3 className="my-name">joseph chinemerem jeremiah</h3>
                <p className="my-person">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </div>
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
