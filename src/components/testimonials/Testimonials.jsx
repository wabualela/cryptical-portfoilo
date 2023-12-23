import "./Testimonials.css";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import { Data } from "./Data.jsx";
import { Pagination } from "swiper/modules";
import React from "react";

const Testimonials = () => (
  <section className="testimonials" id="testimonials">
    <h2 className="title">Testimonials</h2>
    <p className="subtitle">My Clients SAY</p>

    <Swiper
      className="container"
      modules={[Pagination]}
      pagination={{ clickable: true }}
      loop={true}
      spaceBetween={24}
      breakpoints={
        ({ 576: { slidesPerView: 2 } },
        { 768: { slidesPerView: 2, spaceBetween: 48 } })
      }
    >
      {Data.map((testimonial) => (
        <SwiperSlide className="card" key={testimonial.id}>
          <img
            src={testimonial.image}
            alt={testimonial.title}
            className="img"
          />

          <h3 className="name">{testimonial.title}</h3>
          <p className="description">{testimonial.description}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default Testimonials;
