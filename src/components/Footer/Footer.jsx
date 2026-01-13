import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer__container">
        <div className="footer__about">
          <p className="footer__title">Hashi's Luxe Cleaning LLC</p>
          <p className="footer__subtitle">
            Professional cleaning services you can trust. Making homes and
            offices spotless across Minnesota.
          </p>
        </div>
        <div className="footer__row">
          <div className="footer__section">
            <h3 className="footer__title">Services</h3>
            <ul className="footer__links">
              <li>
                <a href="#residential">Residential Cleaning</a>
              </li>
              <li>
                <a href="#commercial">Commercial Cleaning</a>
              </li>
              <li>
                <a href="#deep-cleaning">Deep Cleaning</a>
              </li>
              <li>
                <a href="#move">Move-in / Move-out</a>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">Company</h3>
            <ul className="footer__links">
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#careers">Careers</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer__section">
            <h3 className="footer__title">Contact</h3>
            <div className="footer__contact-list">
              <p>
                <FaPhone className="footer__icon" /> (651) 443-8589
              </p>
              <p>
                <FaEnvelope className="footer__icon" />{" "}
                info@hashisluxecleaning.com
              </p>
              <p>
                <FaMapMarkerAlt className="footer__icon" /> Minnesota, USA
              </p>
              <p>
                <FaClock className="footer__icon" /> Mon - Sat: 8am - 6pm
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="footer__copyright">
        ©2026 Hashi's Luxe Cleaning LLC. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
