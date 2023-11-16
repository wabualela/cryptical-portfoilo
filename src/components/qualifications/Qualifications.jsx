import "./qualifications.css";

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
              subtitle="Kampala Uganda - IZDIAD Ltd."
              years="2023 - Present"
            />
            <Qualification
              above={true}
              title="FullStack Developer"
              subtitle="Remote - KHALIL PLATFORM"
              years="2022 - 2022"
            />
            <Qualification
              above={false}
              title="FullStack Developer"
              subtitle="Freelancer"
              years="2022 - 2022"
            />
            <Qualification
              above={true}
              title="Moodle Developer"
              subtitle="Innovative Solutions Ltd."
              years="2017 - 2021"
            />
          </div>

          <div className={active ? "content" : "content content-active"}>
            <Qualification
              above={true}
              title="Moodle Senior Developer"
              subtitle="Kampala Uganda - IZDIAD Ltd."
              years="2023 - Present"
            />
            <Qualification
              above={false}
              title="FullStack Developer"
              subtitle="Remote - KHALIL PLATFORM"
              years="2022 - 2022"
            />
            <Qualification
              above={true}
              title="FullStack Developer"
              subtitle="Freelancer"
              years="2022 - 2022"
            />
            <Qualification
              above={false}
              title="Moodle Developer"
              subtitle="Innovative Solutions Ltd."
              years="2017 - 2021"
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
          <i className="line"/>
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
