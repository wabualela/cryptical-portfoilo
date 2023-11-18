import "./Testimonials.css";

import { Data } from "./Data.jsx";
import React from "react";

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2 className="title">Testimonials</h2>
    <p className="subtitle">My Clients SAY</p>

    <div className="container">
      {Data.map((testimonial) => (
        <div className="card" key={testimonial.id}>
          <img
            src={testimonial.image}
            alt={testimonial.title}
            className="img"
          />

          <h3 className="name">{testimonial.title}</h3>
          <p className="description">{testimonial.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
