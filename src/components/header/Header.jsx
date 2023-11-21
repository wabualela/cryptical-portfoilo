import "./Header.css";

import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false); // Toggle Menu
  const [activeNav, setActiveNav] = useState("#home"); //Active Menu

  // toggle scrollup btn
  window.addEventListener("scroll", () => {
    let scrollUp = document.querySelector(".scrollup");
    if (window.scrollY >= 560) {
      scrollUp.classList.toggle("show");
    } else {
      scrollUp.classList.toggle("show");
    }
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav-logo">
          Wail
        </a>
        <div className={toggle ? "nav-menu show-menu" : "nav-menu"}>
          <ul className="nav-list">
            <NavItem
              title="Home"
              click={() => setActiveNav("#home")}
              active={activeNav === "#home"}
              href="#home"
              icon="uil-estate"
            />
            <NavItem
              click={() => setActiveNav("#about")}
              active={activeNav === "#about"}
              title="About"
              href="#about"
              icon="uil-user"
            />
            <NavItem
              click={() => setActiveNav("#skills")}
              active={activeNav === "#skills"}
              title="Skills"
              href="#skills"
              icon="uil-file-alt"
            />
            <NavItem
              click={() => setActiveNav("#services")}
              active={activeNav === "#services"}
              title="Service"
              href="#services"
              icon="uil-briefcase-alt"
            />
            <NavItem
              click={() => setActiveNav("#qualifications")}
              active={activeNav === "#qualifications"}
              title="Qualifications"
              href="#qualifications"
              icon="uil-scenery"
            />
            <NavItem
              click={() => setActiveNav("#contact")}
              active={activeNav === "#contact"}
              title="Contact"
              href="#contact"
              icon="uil-message"
            />
          </ul>
          {/* // TODO: add button */}
          <i
            className="uil uil-times nav-icon nav-close"
            onClick={() => setToggle(!toggle)}
          />
        </div>
        {/* // TODO: add button */}
        <i
          className="uil uil-apps nav-toggle"
          onClick={() => setToggle(!toggle)}
        />
      </nav>
    </header>
  );
};

const NavItem = ({ title, href, icon, click, active }) => (
  <li className="nav__item">
    <a
      href={href}
      className={active ? "nav-link active-link" : "nav-link"}
      onClick={click}
    >
      <i className={`uil ${icon} nav-icon`} /> {title}
    </a>
  </li>
);

export default Header;
