import "boxicons";

import React from "react";

const Info = () => {
  return (
    <div className="about-info grid">
      <div className="about-box">
        <box-icon className="about-icon" name="award"></box-icon>
        <h3 className="about-title">Experience</h3>
        <p className="about-subtitle">
          {new Date().getFullYear() - 2017} Years Working
        </p>
      </div>

      <div className="about-box">
        <box-icon className="about-icon" name="briefcase-alt"></box-icon>
        <h3 className="about-title">Completed</h3>
        <p className="about-subtitle">10 + projects</p>
      </div>

      <div className="about-box">
        <box-icon className="about-icon" name="support"></box-icon>
        <h3 className="about-title">Support</h3>
        <p className="about-subtitle">Online 24/7</p>
      </div>
    </div>
  );
};

export default Info;
