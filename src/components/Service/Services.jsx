import React from "react";
import { services } from "../../utils/constants";
import { Wrapper } from "./ServicesWrapper";

const Services = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="section-center">
          <h3 className="section-title">
            custom furniture <br /> built only for you
          </h3>
          <div className="services-center">
            {services.map((service) => {
              const { id, icon, title, text } = service;
              return (
                <article className="service" key={id}>
                  <span className="icon">{icon}</span>
                  <h4>{title}</h4>
                  <p>{text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Services;
