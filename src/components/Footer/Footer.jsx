import React from "react";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import CleaningLogo from "../../assets/cleaning-logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer__container">
        <section className="footer__brand">
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
        </section>
        <nav className="footer__nav" aria-label="Footer navigation">
          <h3 className="footer__title">Services</h3>
          <ul className="footer__links">
            <li>
              <a href="#residential">Residential Cleaning</a>
            </li>
            <li>
              <a href="#commercial">Commercial Cleaning</a>
            </li>
            <li>
              <a href="#basic-cleaning">Basic Cleaning</a>
            </li>
            <li>
              <a href="#deep-cleaning">Deep Cleaning</a>
            </li>
            <li>
              <a href="#move">Move-in / Move-out</a>
            </li>
          </ul>
        </nav>
        <section className="footer__contact">
          <h3 className="footer__title">Contact</h3>
          <address
            className="footer__contact-list"
            aria-label="Contact information"
          >
            <a className="footer__contact-item" href="tel:+16514438589">
              <FaPhone className="footer__icon" aria-hidden="true" />{" "}
              <span>(651) 443-8589</span>
            </a>
            <a
              className="footer__contact-item"
              href="mailto:infohashisluxecleaning@gmail.com"
              aria-label="Email Hashi's Luxe Cleaning at infohashisluxecleaning@gmail.com"
            >
              <FaEnvelope className="footer__icon" />{" "}
              <span>infohashisluxecleaning@gmail.com</span>
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
        </section>
      </div>
      <p className="footer__copyright">
        © {new Date().getFullYear()} Hashi's Luxe Cleaning LLC. All Rights
        Reserved.
      </p>
    </footer>
  );
}

export default Footer;
