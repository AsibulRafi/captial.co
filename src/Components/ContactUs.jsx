import React from "react";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <section className="contactUs">
      <div className="contactUs__card">
        <div className="contactUs__card-content">
          <h2>
            Don't Hesitate <br />
            to contact us
          </h2>
          <Link to="/about" className="contactUs__card-content-btn">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
