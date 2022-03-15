import React from "react";
import "./about.css";
import CoolMe from "../../assets/Offwhite.png";
import { FaUniversity, FaLaptopCode } from "react-icons/fa";
import { IoMdGitNetwork } from "react-icons/io";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={CoolMe} alt="About img" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaUniversity className="about__icon" />
              <h5>Education</h5>
              <small>Master's degree</small>
            </article>
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Skills</h5>
              <small>15+ courses</small>
            </article>
            <article className="about__card">
              <IoMdGitNetwork className="about__icon" />
              <h5>Projects</h5>
              <small>More than 10!</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            neque quas ea laudantium eveniet eum eligendi maiores esse explicabo
            id reiciendis facere tempore deserunt minus, ut magni et
            perspiciatis? Distinctio, dicta iusto.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
