import React from "react";
import logo from "../../assets/clean-logo.png";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="nav">
      <div className="nav__logo">
        <img
          src={logo}
          alt="Hashi's Luxe Cleaning LLC Logo"
          className="nav__logo"
          loading="lazy"
        />
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
