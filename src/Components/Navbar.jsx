import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import logodk from "../Assets/logoDark.png";
const Navbar = () => {
  const [navOpen, isNavOpen] = useState(false);
  const toggle = () => {
    isNavOpen(!navOpen);
  };
  return (
    <header>
      <nav className="nav">
        <div className="nav__wrapper">
          <div
            className={`${navOpen ? "nav__hamburger open" : "nav__hamburger"}`}
            onClick={toggle}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="nav__logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="nav__btns">
            <a href="https://client.capitalco.live/" className="log-in">
              Login
            </a>
            <a
              href="https://client.capitalco.live/register"
              className="open-acc"
            >
              Open account
            </a>
          </div>
        </div>
      </nav>
      <div
        className={`${
          navOpen
            ? "nav__links has-fade fade-in"
            : "nav__links has-fade fade-out"
        }`}
      >
        <div className="nav__links-wrapper">
          <ul className="nav__links-lists">
            <li>
              <Link to="/" onClick={toggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggle}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={toggle}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/accountTypes" onClick={toggle}>
                Account types
              </Link>
            </li>
            <li>
              <Link to="/platform" onClick={toggle}>
                Platform
              </Link>
            </li>
            <li>
              <Link to="/resources" onClick={toggle}>
                Resources
              </Link>
            </li>
            <li>
              <div className="mb-nav__btns">
                <a href="https://client.capitalco.live/" className="log-in">
                  Login
                </a>
                <a
                  href="https://client.capitalco.live/register"
                  className="open-acc"
                >
                  Open account
                </a>
              </div>
            </li>
          </ul>
        </div>
        <img src={logodk} alt="logoDk" className="logoOpen" />
      </div>
    </header>
  );
};

export default Navbar;
