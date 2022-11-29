import React from "react";
import Hero from "../Components/Hero";
import webTrader1 from "../Assets/webTrader1.png";
import webTrader2 from "../Assets/webTrader2.png";
import webTrader3 from "../Assets/webTrader3.png";
import webTrader4 from "../Assets/webTrader4.png";
import webTrader5 from "../Assets/webTrader5.png";
import webTrader6 from "../Assets/webTrader6.png";
import ContactUs from "../Components/ContactUs";
import bgImg from "../Assets/webHero.png";
const Webtrader = () => {
  return (
    <>
      <Hero heading="Our Webtrader Platform" img={bgImg} />
      <section className="webTrader">
        <p className="webTrader__text">
          Capitalco.live is providing a new web based trading platform that runs
          on both PC and Mac. This platform, broadens our reach and addresses
          some ongoing needs of our clients who require a stable and flexible
          trading solution to access global forex markets. Our webtrader has
          been built with one purpose in mind and that's to improve the trading
          experience of our clients.
        </p>
        <h2 className="webTrader__heading">KEY FEATURES INCLUDE</h2>
        <div className="webTrader__info">
          <div className="webTrader__info-single">
            <img src={webTrader1} alt="webTrader" />
            <h3>
              Works with <br />
              any Browser
            </h3>
          </div>
          <div className="webTrader__info-single">
            <img src={webTrader2} alt="webTrader" />
            <h3>
              Multi-language <br />
              support
            </h3>
          </div>
          <div className="webTrader__info-single">
            <img src={webTrader3} alt="webTrader" />
            <h3>
              Fully synchronized
              <br /> with MT4
            </h3>
          </div>
          <div className="webTrader__info-single">
            <img src={webTrader4} alt="webTrader" />
            <h3>
              Trade directly <br />
              from the chart
            </h3>
          </div>
          <div className="webTrader__info-single">
            <img src={webTrader5} alt="webTrader" />
            <h3>
              No downloads, Flash or
              <br /> Java required
            </h3>
          </div>
          <div className="webTrader__info-single">
            <img src={webTrader6} alt="webTrader" />
            <h3>
              Keep your MT4 login
              <br /> and password
            </h3>
          </div>
        </div>
        <div className="webTrader__features">
          <h2 className="webTrader__features-heading">
            More Features Included
          </h2>
          <ul className="webTrader__features-section">
            <li>
              <p>View aggregated positions</p>
            </li>
            <li>
              <p>Advanced "Close All" functionality</p>
            </li>
            <li>
              <p>Real-time quotes and execution</p>
            </li>
            <li>
              <p>Dynamic order routing</p>
            </li>
            <li>
              <p>
                You can filter instruments using keyword or securities group or
                set your own asset classes
              </p>
            </li>
            <li>
              <p>
                By just optimizing the smart one-click trading mode, traders can
                set size, TP/SL, and also open orders with exceptional speed.
              </p>
            </li>
            <li>
              <p>
                You can choose any instrument by clicking on the star: view them
                easily by selecting instruments group “Favorite”
              </p>
            </li>
            <li>
              <p>
                ChartDock gives traders the ability to analyze up to 10 charts
                simultaneously. Charts can either be manually arranged or
                automatically
                <br /> arranged at the click of a button.
              </p>
            </li>
            <li>
              <p>
                Excellent HTML5 charting which includes five chart types, vector
                drawings, and 100+ studies.
              </p>
            </li>
            <li>
              <p>
                The summary tab shows traders aggregated positions grouped by
                symbol, allowing users to clearly see total P/L recorded for a
                particular instrument.
              </p>
            </li>
            <li>
              <p>
                Keep your eyes on the market trend and your open positions at
                the same time! Open and close trades directly from the chart.
              </p>
            </li>
            <li>
              <p>
                With advanced ‘Close All’ control, traders can close any
                transaction: profitable, losing, buy, sell and open positions
                with just one click.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default Webtrader;
