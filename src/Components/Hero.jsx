import React from "react";

const Hero = ({ img, heading }) => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${img})` }}>
      <div className="hero__wrapper">
        <div className="hero__heading">
          <h2>{heading}</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
