import "./scrollup.css";

import React from "react";

const ScrollUp = () => {
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
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup-icon" />
    </a>
  );
};

export default ScrollUp;
