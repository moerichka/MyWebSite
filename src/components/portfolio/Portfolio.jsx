import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Proj1.jpg";
import IMG2 from "../../assets/Proj2.jpg";
import IMG3 from "../../assets/Proj3.jpg";
import IMG4 from "../../assets/Proj4.jpg";
import IMG5 from "../../assets/Proj5.jpg";
import IMG6 from "../../assets/Proj6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "New Automation Tool for Your Home",
    github: "https://github.com/moerichka/LandingPage",
    demo: "https://boring-bhabha-2989d0.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Our Latest Developments",
    github: "https://github.com/moerichka/LandingPage",
    demo: "https://relaxed-carson-fd7fbb.netlify.app",
  },
  {
    id: 3,
    image: IMG3,
    title: "Beutiful registration form",
    github: "https://github.com/moerichka/RegistrationForm",
    demo: "https://boring-bhabha-2989d0.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Site for courses",
    github: "https://github.com/moerichka/SiteForCourses",
    demo: "https://boring-bhabha-2989d0.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "MPT university Bot",
    github: "https://github.com/moerichka/mpt-university-bot",
    demo: "https://web.telegram.org/z/#5211488602",
  },
  {
    id: 6,
    image: IMG6,
    title: "Pyatnashki from the univercity",
    github: "https://github.com/moerichka/pyatnashki",
    demo: "https://hardcore-yonath-1296cf.netlify.app",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary">
                  LiveDemo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
