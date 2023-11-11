import "./Services.css";

import React from "react";
import Service from "./service";

const Services = () => (
  <section className="services section" id="services">
    <h2 className="section-title">My Services</h2>
    <p className="section-subtitle">What I offers</p>

    <div className="container grid">
      <Service name="Web Development" icon="uil-web-grid">
        <ServiceItem title="Business profile pages" />
        <ServiceItem title="Online E-stores" />
        <ServiceItem title="CMS websites" />
      </Service>

      <Service name="Moodle LMS" icon="uil-arrow">
        <ServiceItem title="Build a e-learning platform" />
        <ServiceItem title="Help update/upgrade existing platform" />
        <ServiceItem title="Build a custom functionality on request (Moodle plugin)" />
      </Service>

      <Service name="Consultation" icon="uil-edit">
        <ServiceItem title="Web apps development." />
        <ServiceItem title="E-learning platform Moodle-based development." />
        <ServiceItem title="Online store development." />
      </Service>
    </div>
  </section>
);

const ServiceItem = ({ title }) => (
  <li className="modal-service">
    <i className="uil uil-check-circle modal-icon" />
    <p className="modal-info">{title}</p>
  </li>
);
export default Services;
