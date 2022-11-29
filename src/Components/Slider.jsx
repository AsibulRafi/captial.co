import React from "react";
import Carousel from "react-elastic-carousel";
import slider1 from "../Assets/forex.png";
import slider2 from "../Assets/indices.png";
import slider3 from "../Assets/equties.png";
import slider4 from "../Assets/crpto.png";
import slider5 from "../Assets/energies.png";
import slider6 from "../Assets/metals.png";
import slider7 from "../Assets/commodities.png";
const Slider = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <section className="slider">
      <Carousel breakPoints={breakPoints}>
        <div className="slider__single">
          <img src={slider1} alt="sliderImg" />
          <h4>Forex</h4>
        </div>
        <div className="slider__single">
          <img src={slider2} alt="sliderImg" />
          <h4>INDICES</h4>
        </div>
        <div className="slider__single">
          <img src={slider3} alt="sliderImg" />
          <h4>EQUITIES</h4>
        </div>
        <div className="slider__single">
          <img src={slider4} alt="sliderImg" />
          <h4>CRYPTOCURRENCIES</h4>
        </div>
        <div className="slider__single">
          <img src={slider5} alt="sliderImg" />
          <h4>Energies</h4>
        </div>
        <div className="slider__single">
          <img src={slider6} alt="sliderImg" />
          <h4>Metals</h4>
        </div>
        <div className="slider__single">
          <img src={slider7} alt="sliderImg" />
          <h4>Commodities</h4>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
