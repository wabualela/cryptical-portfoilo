import "./Footer.css";

import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <h2 className="footer-title">Wail</h2>

        <ul className="footer-list">
          <li>
            <a href="#about" className="footer-item-link">
              About
            </a>
          </li>
          <li>
            <a href="#project" className="footer-item-link">
              Project
            </a>
          </li>
          <li>
            <a href="#testimonials" className="footer-item-link">
              testimonials
            </a>
          </li>
        </ul>

        <div className="footer-social">
          <a
            href="https://github.com/wabualela/"
            className="footer-social-link"
            target="_blank"
          >
            <i className="bx bxl-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/wabualela/"
            className="footer-social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin" />
          </a>
        </div>

        <p className="footer-copyright">&#169; Wail. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
