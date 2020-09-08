import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Burger from "./Burger";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="wrapper">
          <div className="inner-header">
            <div className="logo">
              <Link to="/" style={{ textDecoration: "none" }}>
                JCJ
              </Link>
            </div>
            <div className="menu">
              <button className="btn btn-header">Menu</button>
            </div>
          </div>
        </div>
      </div>
      <Burger />
    </header>
  );
};

export default Header;
