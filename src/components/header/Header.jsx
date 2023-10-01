import React, { useState } from "react";
import * as Unicons from "@iconscout/react-unicons";
import "./Header.css";

const Header = () => {
  const [toggle, setToggle] = useState(false); // Toggle Menu

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Wail
        </a>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <li className="nav__item">
              <a href="#home" className="nav-link active-link">
                <Unicons.UilEstate className="nav-icon" /> Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav-link">
                <Unicons.UilUser className="nav-icon" /> About
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills" className="nav-link">
                <Unicons.UilFileAlt className="nav-icon" /> Skills
              </a>
            </li>

            <li className="nav__item">
              <a href="#services" className="nav-link">
                <Unicons.UilBriefcaseAlt className="nav-icon" /> Services
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio" className="nav-link">
                <Unicons.UilScenery className="nav-icon" /> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact" className="nav-link">
                <Unicons.UilMessage className="nav-icon" /> Contact
              </a>
            </li>
          </ul>
          {/* // TODO: add button */}
          <Unicons.UilTimes
            className="nav-icon nav-close"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        {/* // TODO: add button */}
        <Unicons.UilApps
          className="nav-toggle"
          onClick={() => setToggle(!toggle)}
        />
      </nav>
    </header>
  );
};

export default Header;
