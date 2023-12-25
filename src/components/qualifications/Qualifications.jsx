import "./Qualifications.css";

import React, { useState } from "react";

const Qualifications = () => {
  const [active, setActive] = useState(true);
  return (
    <section id="qualifications" className="qualifications">
      <h2 className="title">Qualifications</h2>
      <p className="subtitle">My Personal Journey</p>

      <div className="container">
        <div className="tabs">
          <span
            role="button"
            className={
              active
                ? "qualifications-btn btn-flex btn-active"
                : "qualifications-btn btn-flex"
            }
            onClick={() => setActive(!active)}
          >
            <i className="uil uil-graduation-cap icon" />
            Education
          </span>

          <span
            role="button"
            className={
              active
                ? "qualifications-btn btn-flex"
                : "qualifications-btn btn-flex btn-active"
            }
            onClick={() => setActive(!active)}
          >
            <i className="uil uil-briefcase-alt icon" />
            Experience
          </span>
        </div>

        <div className="sections">
          <div className={active ? "content content-active" : "content"}>
            <Qualification
              above={false}
              title="Moodle Senior Developer"
              subtitle="Izdiad Uganda"
              years="July 2023 - Present"
            />
            <Qualification
              above={true}
              title="Moodle Senior Developer"
              subtitle="Izdiad Sudan"
              years="Jan 2023 - Jul 2023"
            />
            <Qualification
              above={false}
              title="FullStack PHP Developer"
              subtitle="KHALIL platform - remote"
              years="Nov 2022 - Jan 2022"
            />
            <Qualification
              above={true}
              title="Backend Developer"
              subtitle="Intelligent Project"
              years="Jul 2021 - Oct 2021"
            />
            <Qualification
              above={false}
              title="Backend developer"
              subtitle="MSC"
              years="Mar 2021 - Jul 2021"
            />
            <Qualification
              above={true}
              title="Senior Moodle Developer"
              subtitle="Innovative Solutions"
              years="Oct 2019 - Nov 2020"
            />
            <Qualification
              above={false}
              title="Backend Developer"
              subtitle="Click Grafix"
              years="Jun 2019 - Sep 2019"
            />
            <Qualification
              above={true}
              title="Senior Moodle Developer"
              subtitle="Innovative Solutions"
              years="Nov 2017 - Jun 2019"
            />
            <Qualification
              above={false}
              title="Teaching assistant"
              subtitle="International University of Afriac"
              years="May 2015 - May 2016"
            />
          </div>

          <div className={active ? "content" : "content content-active"}>
            <Qualification
              above={true}
              title="Bachelor of Computer Science"
              subtitle="National Ribat University"
              years="2010 - 2014"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

let Qualification = ({ title, subtitle, years, above }) => (
  <div className="data">
    {above && (
      <>
        <div></div>
        <div>
          <i className="rounder" />
          <i className="line" />
        </div>
      </>
    )}

    <div>
      <h3 className="qualification-title">{title}</h3>
      <p className="qualification-subtitle">{subtitle}</p>

      <div className="calendar">
        <i className="uil uil-calendar-alt" />
        {years}
      </div>
    </div>

    {!above && (
      <div>
        <span className="rounder"></span>
        <span className="line"></span>
      </div>
    )}
  </div>
);

let QualificationsBtn = ({ icon }, toggle, onClick) => (
  <span
    role="button"
    className={
      toggle
        ? "qualifications-btn btn-flex btn-toggled"
        : "qualifications-btn btn-flex"
    }
    onClick={onClick}
  >
    <i className={`uil ${icon} icon`} />
    Education
  </span>
);

export default Qualifications;
