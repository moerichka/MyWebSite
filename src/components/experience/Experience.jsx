import React from "react";
import "./experience.css";
import { BsFillCheckSquareFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>CSS</h4>
                  <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>JavaScript</h4>
                  <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>Materialize</h4>
                  <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>React</h4>
                  <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONT END */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
        <div className="experience__content">
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>NodeJS</h4>
                  <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>MongoDb</h4>
                  <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>MsSQL</h4>
                  <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>WebPack</h4>
                  <small className="text-light">Basics</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>Express</h4>
                  <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillCheckSquareFill />
              <div>
                  <h4>Asp.net</h4>
                  <small className="text-light">Basics</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
