import React from "react";
import "./services.css";
import { BiCheckCircle } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Can</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web service</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>XML-RPC, SOAP, REST service to get and push any data</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>NodeJS or ASP.NET servers, which are crossplatform</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Web-Service contains database, which can be deployed on the remote virtual mashine</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Web-Service also </p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB SERVICE */}
        <article className="service">
          <div className="service__head">
            <h3>Web site</h3>
          </div>
          <ul className="service__list">
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB SERVICE */}
        <article className="service">
          <div className="service__head">
            <h3>Web server</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
            <li>
              <div>
                <BiCheckCircle className="service__list-icon" />
              </div>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, assumenda?</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB SERVICE */}
      </div>
    </section>
  );
};

export default Services;
