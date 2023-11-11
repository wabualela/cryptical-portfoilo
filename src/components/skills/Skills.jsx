import "./Skills.css";

import Backend from "./Backend";
import Frontend from "./Frontend";
import Moodle from "./Moodle";
import React from "react";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">My Technical Level</p>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
