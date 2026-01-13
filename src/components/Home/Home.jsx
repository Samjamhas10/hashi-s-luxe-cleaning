import React from "react";
// import logo from "../../assets/clean-logo.png";
import "./Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home__overlay">
        <div className="home__content">
          {/* <img
            src={logo}
            alt="Hashi's Luxe Cleaning LLC Logo"
            className="home__logo"
            loading="lazy"
          /> */}
          <h1 className="home__title">Hashi's Luxe Cleaning</h1>
          <p className="home__tagline">
            Luxury-level cleaning for homes and offices that demand perfection.
          </p>
          <p className="home__services">
            Residential • Move-Out • Deep Cleaning • Office Cleaning
          </p>
          <div className="home__actions">
            <button className="home__btn-contact">Contact Us</button>
            <button className="home__btn-services">View Services</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
