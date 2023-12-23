import "./Work.css";

import React from "react";
import Works from "./Works";

const Work = () => {
    return (
        <section className="work" id="portfolio">
            <h2 className="title">Portfolio</h2>
            <p className="subtitle">Most recent works</p>

            <Works />
        </section>
    );
}

export default Work;