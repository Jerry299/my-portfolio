import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Burger from "./Burger";
import "../../App.css";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-container ">
        <div className="wrapper ">
          <div className="inner-header">
            <div className="logo">
              <Link
                to="/"
                // style={{
                //   textDecoration: "none",
                //   fontFamily: " Poppins,san-serif",
                //   color: "#ece8e1",
                //   fontSize: "1.2rem",
                // }}
              >
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="menu">
              <div>
                <p className="">
                  <span className="bg"></span>
                  <span className="base"></span>
                  <span className="text">MENU</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Burger />
    </header>
  );
};

export default Header;
