import React from "react";

const Project = ({ projectData }) => {
  return (
    <div className="card" key={projectData.id}>
      <img
        src={projectData.image}
        alt={projectData.title}
        className="card-img"
      />
      <h3 className="card-title">{projectData.title}</h3>
      <a href="" className="card-link">
        Demo
        <i className="bx bx-right-arrow-alt card-link-icon"></i>
      </a>
    </div>
  );
};

export default Project;
