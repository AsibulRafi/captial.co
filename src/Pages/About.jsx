import React from "react";
import Hero from "../Components/Hero";
import heroBg from "../Assets/aboutHero.png";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <Hero heading="About Us" img={heroBg} />
      <section className="about__info" id="about">
        <h2 className="about__info-heading">Who are we?</h2>
        <div className="about__info-text">
          <p>
            Capitalco.live was launched a few years back with a unique vision to
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
            At Capitalco.live we are committed to making sure all our clients
            and investors stay connected to the various opportunities that arise
            in the market on a daily basis and ease in connecting with one
            another. With us as your financial stockbroker you are sure to get
            all the professional backing and support you require to soar in
            Forex trading.
          </p>
        </div>
      </section>
      <section className="contactUs" id="contact">
        <div className="contactUs__card ">
          <div className="contactUs__card-content about__contact">
            <div className="contactUs__card-content-form ">
              <input
                type="text"
                name="name"
                placeholder="support@Capitalco.live"
                readonly
              />
              <input
                type="text"
                name="Number"
                placeholder="61861879037"
                readonly
              />
            </div>
            <div className="contactUs__card-content-info ">
              <h2 className="about__contact-h2">
                Don't Hesitate <br />
                to contact us
              </h2>
              <Link
                to="/about"
                className="contactUs__card-content-btn about__contact-btn"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
