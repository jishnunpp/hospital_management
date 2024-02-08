import React from "react";
import "./header.css";
import logo from "../../Assets/esight-logo.jpg";
import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="header section-padding">
      <div className="header-logo">
        <div className="logo-image">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h2>
            ESIGHT <br />
            HOSPITAL
          </h2>
        </div>
      </div>
      <div className="header-menu">
        <ul>
          <Link to={"/"} className="link">
            <li>Home</li>
          </Link>
          <Link to={"features"} className="link">
            <li>Features</li>
          </Link>
          <Link to={"benefit"} className="link">
            <li>Benefits</li>
          </Link>

          <Link to={"contacts"} className="link">
           
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            className="navbar_menu-icon"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            className="navbar_menu-icon"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-links">
            <ul>
              <Link to={"/"} className="link">
                <li>Home</li>
              </Link>
              <Link to={"features"} className="link">
                <li>Features</li>
              </Link>
              <Link to={"benefit"} className="link">
                <li>Benefits</li>
              </Link>

              <Link to={"contacts"} className="link">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
