import React from "react";
import logo from "../../assets/clean-logo.png";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav" aria-label="Primary navigation">
      <a href="#home" className="nav__brand">
        <img
          src={logo}
          alt="Hashi's Luxe Cleaning LLC logo"
          className="nav__logo"
        />
      </a>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#services" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#pricing" className="nav__link">
            Pricing
          </a>
        </li>
        <li className="nav__item">
          <a href="#contact" className="nav__link">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
