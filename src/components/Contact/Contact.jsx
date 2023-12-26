/* eslint-disable react/prop-types */

import "./Contact.css";

import React, { useRef } from "react";

import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  let form = useRef();
  let [msg, setMsg] = useState("");

  let sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_amat2lf",
        "template_2nqwglf",
        form.current,
        "0y1KPL1IRJ8rthidc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsg(
            "Thank you for reaching out to me. I have received your email and will get back to you soon."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setTimeout(() => setMsg(""), 8000);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="title">Get in Touch</h2>
      <p className="subtitle">Contact mE</p>
      <div className={`${msg ? "show" : ""} alert-success `}>{msg}</div>

      <div className="container grid">
        <div className="content">
          <h3 className="contact-title">Talk to me</h3>
          <div className="contact-info">
            <ContactCard
              title="Email"
              subtitle="wailabualela@gmail.com"
              icon="bx-mail-send"
              link="mailto:wailabualela@gmail.com "
              label="Email me"
            />
            <ContactCard
              title="WhatsApp"
              subtitle="+249 91 285 7030"
              icon="bxl-whatsapp"
              link="https://wa.me/+249912857030"
              label="Chat with me"
            />
            <ContactCard
              title="Linkedin"
              subtitle="Connect with me"
              icon="bxl-linkedin"
              link="https://www.linkedin.com/in/wabualela"
              label="Connect with me"
            />
          </div>
        </div>

        <div className="content">
          <h3 className="contact-title">Write me your business</h3>

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label className="form-label">Full name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="First name and last name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="someone@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Contact number</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="For contact and Whatsapp"
              />
            </div>

            <div className="form-group form-textarea">
              <label className="form-label">Business</label>
              <textarea
                name="business"
                cols="30"
                rows="10"
                className="form-control"
                placeholder="Please write a description about your business"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-flex">
              Send message
              <svg
                className="btn-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                  fill="var(--container-color)"
                ></path>
                <path
                  d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                  fill="var(--container-color)"
                ></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

let ContactCard = ({ title, subtitle, link, icon, label = "Write Me" }) => (
  <div className="contact-card">
    <i className={`bx ${icon} bx-contact contact-card-icon`} />
    <h4 className="contact-card-title">{title}</h4>
    <p className="contact-card-subtitle">{subtitle}</p>
    <a
      href={link}
      className="contact-card-btn"
      target="_blank"
      rel="noreferrer"
    >
      {label}
      <i className="bx bx-right-arrow-alt contact-card-btn-icon" />
    </a>
  </div>
);
export default Contact;
