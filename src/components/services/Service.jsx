import React, { useState } from "react";

const Service = ({ name, icon, children }) => {
  const [toggleService, setToggleService] = useState(false);

  return (
    <div className="content">
      <div>
        <i className={`uil ${icon} icon`} />
        <h3 className="title">{name}</h3>
      </div>
      <span
        role="button"
        className="services-btn"
        onClick={() => setToggleService(!toggleService)}
      >
        View More
        <i className="uil uil-arrow-right services-btn-icon" />
      </span>
      <div className={toggleService ? "active modal" : "modal"}>
        <div className="modal-content">
          <i
            role="button"
            className="uil uil-times modal-close"
            onClick={() => setToggleService(!toggleService)}
          />
          <h3 className="modal-title">{name}</h3>
          <p className="modal-description">
            Service with more than 4 years of experience. Providing quality work
            to clients and companies.
          </p>
          <ul className="modal-services grid">{children}</ul>
        </div>
      </div>
    </div>
  );
};

export default Service;
