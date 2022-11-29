import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="footer__content">
        <div className="footer__content-risk">
          <h2>Risk Warning:</h2>
          <p>
            CFDs are complex instruments and come with a high risk of losing
            money rapidly due to leverage. 71.24% of retail investor accounts
            lose money when trading CFDs with CapitalCo.Pro. You should consider
            whether you understand how CFDs work and whether you can afford to
            take the high risk of losing your money.{" "}
          </p>
        <div style={{display: "flex"}}>
           <div style={{position:"relative", width:"120px", height:"60px",margin:"20px"}}>
            <a href="https://www.teamviewer.com/link/?url=842558&id=1657706082608" style={{textDecoration:"none"}}>
              <img src="https://static.teamviewer.com/resources/badges/teamviewer_badge_flat1.png" alt="Download TeamViewer Remote Control" title="Download TeamViewer Remote Control" border="0" width="120" height="60" />
              
            </a>
          </div>
          <div style={{position:"relative", width:"120px", height:"60px",margin:"20px"}}>
            <a href="https://anydesk.com/en/downloads" target="_blank">
          <img border="0" alt="W3Schools" src="https://anydesk.com/_static/img/logos/anydesk-logo-40fe6c.svg" width="100" height="90" />
          </a>
          </div>
          </div>
        </div>
        <div className="footer__content-links">
          <div className="footer__content-links-single">
            <h4>Company</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/about">Contact Us</Link>
          </div>
          <div className="footer__content-links-single">
            <h4>Products</h4>
            <Link to="/products">Forex</Link>
            <Link to="/products">Metals</Link>
            <Link to="/products">Energies</Link>
            <Link to="/products">Equities</Link>
            <Link to="/products">Indices</Link>
            <Link to="/products">Commodities</Link>
            <Link to="/products">Cryptocurrencies</Link>
          </div>
          <div className="footer__content-links-single">
            <h4>Account Types</h4>
            <Link to="/accountTypes">Bronze</Link>
            <Link to="/accountTypes">Silver</Link>
            <Link to="/accountTypes">Gold</Link>
          </div>
        </div>
      </div>
      <h4 className="footer__copyright">
        Copyright @ 2022 Capital Co. <br /> All rights reserved
      </h4>
    </section>
  );
};

export default Footer;
