
import React from "react";

import {projects, projectsNav} from "./Projects";

const Works = () => {
    return (
        <div className="work-filters">
            {projectsNav.map((project, index) => {
                return (
                    <span className="work-item">{ project.name }</span>
                )
            })}
        </div>
    );
}

export default Works;