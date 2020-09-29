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
                    <Link to="/about">
                      <div className="position">01.</div>About Me.
                    </Link>
                  </li>
                  <li>
                    <Link to="/mywork">
                      <div className="position">02.</div>My Works.
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact">
                      <div className="position">03.</div>Contact Me.
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
