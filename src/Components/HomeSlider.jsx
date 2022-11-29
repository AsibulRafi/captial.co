import React from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import homeSlider1 from "../Assets/homeSlider1.png";
import homeSlider2 from "../Assets/homeSlider2.png";
import homeSlider3 from "../Assets/homeSlider3.png";
const Slider = () => {
  const breakPoints = [{ width: 1, itemsToShow: 1 }];
  return (
    <section className="homeSlider">
      <Carousel
        breakPoints={breakPoints}
        enableAutoPlay={true}
        autoPlaySpeed={8000}
      >
        <div className="homeSlider__wrapper">
          <div className="homeSlider__content">
            <div className="homeSlider__info">
              <h2 className="homeSlider__info-heading">
                Stay up to date{" "}
                <span style={{ color: "#2F80ED" }}>
                  with
                  <br /> our experts!
                  <br /> Exclusive insights
                  <br />
                </span>{" "}
                and analysis
              </h2>
              <div className="homeSlider__info-text">
                <p>- Daily market analysis directly to your inbox</p>
                <p> - The latest financial news and forecasts </p>
                <p> - Weekly webinars with live Q&A</p>
              </div>
              <a
                to="https://client.capitalco.live/register"
                className="open__acc"
              >
                Open Account
              </a>
            </div>
            <div className="homeSlider__img">
              <img src={homeSlider1} alt="homeSlider" />
            </div>
          </div>
        </div>
        <div className="homeSlider__wrapper">
          <div className="homeSlider__content">
            <div className="homeSlider__info">
              <h2 className="homeSlider__info-heading">
                <span style={{ color: "#2F80ED" }}>
                  Diversify your
                  <br /> portfolio with
                  <br />{" "}
                </span>{" "}
                a true multi-asset
                <br /> broker and analysis
              </h2>
              <div className="homeSlider__info-text">
                <p>CFDs on:</p>
                <p>- Forex - Commodities - Metals - Energies </p>
                <p>- Crypto - Indices - Equities </p>
              </div>
              <a
                to="https://client.capitalco.live/register"
                className="open__acc"
              >
                Open Account
              </a>
            </div>
            <div className="homeSlider__img">
              <img src={homeSlider2} alt="homeSlider" />
            </div>
          </div>
        </div>
        <div className="homeSlider__wrapper">
          <div className="homeSlider__content">
            <div className="homeSlider__info">
              <h2 className="homeSlider__info-heading">
                Multi-asset trading <br />
                <span style={{ color: "#2F80ED" }}>
                  on one <br /> powerful platform
                </span>
              </h2>
              <div className="homeSlider__info-text">
                <p>-View aggregated positions</p>
                <p>-Advanced "Close All" functionality</p>
                <p>-Real-time quotes and execution</p>
                <p>-Dynamic order routing</p>
              </div>
              <a
                to="https://client.capitalco.live/register"
                className="open__acc"
              >
                Open Account
              </a>
            </div>
            <div className="homeSlider__img">
              <img src={homeSlider3} alt="homeSlider" />
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
