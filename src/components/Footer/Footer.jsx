import React from "react";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import CleaningLogo from "../../assets/cleaning-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo" aria-label="Footer">
      <div className="footer__container">
        <div className="footer__brand">
          <p className="footer__title">Hashi's Luxe Cleaning LLC</p>
          <img
            src={CleaningLogo}
            alt="Logo"
            className="footer__logo"
            loading="lazy"
          />
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
            <address className="footer__contact-list">
              <a className="footer__contact-item" href="tel:+16514438589">
                <FaPhone className="footer__icon" /> <span>(651) 443-8589</span>
              </a>
              <a
                className="footer__contact-item"
                href="mailto:info@hashisluxecleaning.com"
              >
                <FaEnvelope className="footer__icon" />{" "}
                <span>info@hashisluxecleaning.com</span>
              </a>
              <p className="footer__contact-item">
                <FaMapMarkerAlt className="footer__icon" />{" "}
                <span>Minnesota, USA</span>
              </p>
              <p className="footer__contact-item">
                <FaClock className="footer__icon" />{" "}
                <span>Mon - Sat: 8am - 6pm</span>
              </p>
            </address>
          </div>
        </div>
      </div>

      <p className="footer__copyright">
        © {new Date().getFullYear()} Hashi's Luxe Cleaning LLC. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
