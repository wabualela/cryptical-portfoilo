import "./Portfolio.css";

import React, { useEffect, useState } from "react";
import { projectsData, projectsNav } from "./Data";

import Project from "./Project";

const Portfolio = () => {
  const [nav, setNav] = useState({ title: "all" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (nav.title === "all") {
      setProjects(projectsData);
    } else {
      let newProjects = projectsData.filter((project) => {
        return project.category === nav.title;
      });
      setProjects(newProjects);
    }
  }, [nav]);

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="title">Portfolio</h2>
      <p className="subtitle">Most recent works</p>

      <div>
        <div className="filters">
          {projectsNav.map((thisNav, index) => (
            <span
              className={`${
                thisNav.title === nav.title ? "active" : ""
              }  filter-item`}
              key={index}
              onClick={(e) => setNav({ title: e.target.textContent })}
            >
              {thisNav.title}
            </span>
          ))}
        </div>
        <div className="container grid">
          {projects.map((project) => (
            <Project projectData={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
