import React from "react";
import { BsFillCircleFill, BsFillStarFill } from "react-icons/bs";
import HomeSlider from "../Components/HomeSlider";
import TradingView from "../Components/TradingView";
import servicesImg from "../Assets/servicesImg.png";
import aboutUsImg from "../Assets/aboutUsImg.png";
import card1 from "../Assets/card1.png";
import card2 from "../Assets/card2.png";
import card3 from "../Assets/card3.png";
import client1 from "../Assets/client1.png";
import client2 from "../Assets/client2.png";
import ContactUs from "../Components/ContactUs";
const Home = () => {
  return (
    <>
      <HomeSlider />
      <TradingView />
      <section className="services">
        <div className="services__wrapper">
          <h2 className="services__heading">
            Our <span style={{ color: "#2F80ED" }}>Services</span>
          </h2>
          <div className="services__content">
            <img
              src={servicesImg}
              alt="servicesImg"
              className="services__content-img"
            />
            <div className="services__content-info">
              <h2>
                Fast order executions and Amazing
                <br /> Trading Conditions
              </h2>
              <ul>
                <li>- Forex</li>
                <li>- Commodities </li>
                <li>- Metals</li>
                <li>- Energies</li>
                <li>- Cryptocurrencies</li>
                <li>- Indices</li>
                <li>- Equities</li>
              </ul>
              <a
                href="https://client.capitalco.live/register"
                className="open__acc"
              >
                Open Account
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="aboutus">
        <div className="aboutus__content">
          <h2>About Us</h2>
          <p>
            CapitalCo.live was launched a few years back with a unique vision to
            provide unparalleled advanced trading conditions, premium education,
            and state-of-the-art trading tools in the Forex industry. Due to the
            continuous focus on localizing our products and services to suit
            each market, together with our successful collaboration with
            talented and experienced teams from all over the world. We were
            quickly established as the global trademark it is today.
          </p>
          <p>
            Our number one mission is centered on time. By valuing time and
            understanding the importance of efficiency in the fluctuating,
            lightning-fast world of financial markets, every decision we make is
            designed to ensure that our clients and business partners, as well
            as our team of professionals, invest their time wisely. This road is
            paved by an ironclad focus on educating our customers. Knowledge is
            power, and empowering traders to get the best value for their
            investments is our passion.
          </p>
          <p>
            At CapitalCo.live we are committed to making sure all our clients
            and investors stay connected to the various opportunities that arise
            in the market on a daily basis and ease in connecting with one
            another. With us as your financial stockbroker you are sure to get
            all the professional backing and support you require to soar in
            Forex trading.
          </p>
        </div>
        <div className="aboutus__img">
          <img src={aboutUsImg} alt="aboutUs" />
        </div>
      </section>
      <section className="cards">
        <div className="cards__wrapper">
          <div className="cards__single">
            <div className="cards__single-img">
              <img src={card1} alt="cards" />
            </div>
            <div className="cards__single-content">
              <h2>Our Advantages</h2>
              <ul>
                <li>
                  <BsFillCircleFill />
                  <p>Free Funding</p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>Multiple trading accounts</p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>Insurance for clients’ funds</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cards__single">
            <div className="cards__single-img">
              <img src={card2} alt="cards" />
            </div>
            <div className="cards__single-content">
              <h2>Secured Broker</h2>
              <ul>
                <li>
                  <BsFillCircleFill />
                  <p>
                    Client funds are held in <br />
                    segregated accounts
                  </p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>
                    Full Transparency Market
                    <br /> Leading Insurance
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="cards__single">
            <div className="cards__single-img">
              <img src={card3} alt="cards" />
            </div>
            <div className="cards__single-content">
              <h2>Multi-Asset Broker CFDs</h2>
              <ul>
                <li>
                  <BsFillCircleFill />
                  <p>Spot and Futures Contracts</p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>Gold and Oil</p>
                </li>
                <li>
                  <BsFillCircleFill />
                  <p>Shares of major companies</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="clients">
        <h2 className="clients__heading">
          This is what clients
          <br /> say about us
        </h2>
        <div className="clients__cards">
          <div className="clients__card">
            <div className="clients__card-heading">
              <img src={client1} alt="client" />
              <div>
                <h4>Riva de Ruhal</h4>
                <p>Real estate agent</p>
              </div>
            </div>
            <p>
              Thank you CapitalCo.live Trading website-wise, no one else is more
              loved I'm very happy with the support you had provided me!
            </p>
            <div className="clients__card-star">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
          <div className="clients__card">
            <div className="clients__card-heading">
              <img src={client2} alt="client" />
              <div>
                <h4>Efran Birsa</h4>
                <p>Sales advisor</p>
              </div>
            </div>
            <p>
              Top website in the world when it comes to all things investing.
              Thank you, for always being there to help me!
            </p>
            <div className="clients__card-star">
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default Home;
