import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__subtitle">
          Have questions or want to schedule a cleaning? Reach out to us!
        </p>
        <div className="contact__info">
          <a href="tel:+16514438589" className="contact__item">
            <FaPhone className="contact__icon" />
            <span>(651) 443-8589</span>
          </a>
          <a
            href="mailto:info@hashisluxecleaning.com"
            className="contact__item"
          >
            <FaEnvelope className="contact__icon" />
            <span>info@hashisluxecleaning.com</span>
          </a>
          <p className="contact__item">
            <FaMapMarkerAlt className="contact__icon" />
            <span>Minnesota, USA</span>
          </p>
        </div>
        <form className="contact__form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
