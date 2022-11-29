import React from "react";
import Hero from "../Components/Hero";
import { AiFillCheckCircle } from "react-icons/ai";
import ContactUs from "../Components/ContactUs";
import heroBg from "../Assets/accountsHero.png";
const AccountsTypes = () => {
  return (
    <>
      <Hero heading="Account Types" img={heroBg} />
      <section className="accountTypes">
        <div className="accountTypes__single">
          <h2 className="accountTypes__single-heading">Test account</h2>
          <p className="accountTypes__single-text">
            This is the is most affordable, and is convenient for individuals on a
            constraint budget to get their products off the ground and in the
            hands of their users.
          </p>
          <div className="accountTypes__single-info">
            <h4>What You'll get</h4>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>private account manager </p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>professional investment plan</p>
            </div>
           
          </div>
          <hr className="accountTypes__single-line" />
          <div className="accountTypes__single-pricing">
            <h2>250$</h2>
          </div>
          <button className="accountTypes__single-btn">Choose</button>
        </div>
        <div className="accountTypes__single">
          <h2 className="accountTypes__single-heading">Silver account </h2>
          <p className="accountTypes__single-text">
            This is the is most affordable, and is convenient for individuals on a
            constraint budget to get their products off the ground and in the
            hands of their users.
          </p>
          <div className="accountTypes__single-info">
            <h4>What You'll get</h4>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>private account manager</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>professional investment plan</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>fully managed account</p>
            </div>
          </div>
          <hr className="accountTypes__single-line" />
          <div className="accountTypes__single-pricing">
            <h2>10,000$ - 50,000$</h2>
          </div>
          <button className="accountTypes__single-btn">Choose</button>
        </div>
        <div className="accountTypes__single">
          <h2 className="accountTypes__single-heading">Gold account</h2>
          <p className="accountTypes__single-text">
            This is the is most affordable, and is convenient for individuals on a
            constraint budget to get their products off the ground and in the
            hands of their users.
          </p>
          <div className="accountTypes__single-info">
            <h4>What You'll get</h4>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>private account manager</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>professional investment plan</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>fully managed account</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>full access to all the assets</p>
            </div>
          </div>
          <hr className="accountTypes__single-line" />
          <div className="accountTypes__single-pricing">
            <h2>50,000$- 250,000$</h2>
          </div>
          <button className="accountTypes__single-btn">Choose</button>
        </div>
        <div className="accountTypes__single">
          <h2 className="accountTypes__single-heading">Vip account</h2>
          <p className="accountTypes__single-text">
            This is the is most affordable, and is convenient for individuals on a
            constraint budget to get their products off the ground and in the
            hands of their users.
          </p>
          <div className="accountTypes__single-info">
            <h4>What You'll get</h4>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>private account manager</p>
              
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>professional investment plan</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>fully managed account</p>
            </div>
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>full access to all the assets</p>
            </div>
           
            <div className="accountTypes__single-info_single">
              <AiFillCheckCircle />
              <p>no spread or swaps</p>
            </div>
          </div>
          <hr className="accountTypes__single-line" />
          <div className="accountTypes__single-pricing">
            <h2>250k +</h2>
           
          </div>
          <button className="accountTypes__single-btn">Choose</button>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default AccountsTypes;
