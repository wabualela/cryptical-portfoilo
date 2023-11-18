import "./Contact.css";

import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="title">Get in Touch</h2>
      <p className="subtitle">Contact ME</p>

      <div className="container grid">
        <div className="content">
          <h3 className="title">Talk to me</h3>
          <div className="info">
            <Card />
            <Card title="Write me your project" />
          </div>
        </div>

        <div className="content">
          <h3 className="title">Write me your project</h3>
          <div className="info">
            <Card title="Email" />
            <Card title="Write me your project" />
          </div>
        </div>
      </div>
    </section>
  );
};

let Card = ({ title }) => (
  <div className="card">
    <i className="bx bx-contact" />
    <h4 className="card-title">{title}</h4>
    <p className="card-data"></p>
    <a href="" className="contact-btn">
      Write me
      <i className="bx bx-right-arrow-alt contact-btn-icon" />
    </a>
  </div>
);
export default Contact;
