import "./Skills.css";

import Backend from "./Backend";
import Frontend from "./Frontend";
import Moodle from "./Moodle";
import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="title">Skills</h2>
      <p className="subtitle">My Technical Level</p>

      <div className="skills-container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
