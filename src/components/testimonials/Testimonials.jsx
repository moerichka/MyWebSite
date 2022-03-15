import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/Av1.jpg";
import AVTR2 from "../../assets/Av2.jpg";
import AVTR3 from "../../assets/Av3.jpg";
import AVTR4 from "../../assets/Av4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Cute anime girl",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel a est deserunt culpa perferendis amet dolorem nostrum soluta, vero libero nemo temporibus possimus. Blanditiis impedit aspernatur aliquam illo nihil?",
  },
  {
    avatar: AVTR2,
    name: "Cute anime girl",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel a est deserunt culpa perferendis amet dolorem nostrum soluta, vero libero nemo temporibus possimus. Blanditiis impedit aspernatur aliquam illo nihil?",
  },
  {
    avatar: AVTR3,
    name: "Cute anime girl",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel a est deserunt culpa perferendis amet dolorem nostrum soluta, vero libero nemo temporibus possimus. Blanditiis impedit aspernatur aliquam illo nihil?",
  },
  {
    avatar: AVTR4,
    name: "Cute anime girl",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem vel a est deserunt culpa perferendis amet dolorem nostrum soluta, vero libero nemo temporibus possimus. Blanditiis impedit aspernatur aliquam illo nihil?",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Some comments</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="clients__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
