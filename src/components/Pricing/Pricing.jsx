import React from "react";
import "./Pricing.css";

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="pricing__container">
        <h2 className="pricing__title">Our Pricing</h2>
        <p className="pricing__subtitle">
          Flexible options for every home or office cleaning need.
        </p>
        <div className="pricing__cards">
          <div className="pricing__card">
            <h3>Basic Cleaning</h3>
            <p className="pricing__amount">$100</p>
            <ul>
              <li>Kitchen & bathroom cleaning</li>
              <li>Vacuum & mop floors</li>
              <li>Dust all surfaces</li>
            </ul>
            <button>Choose Plan</button>
          </div>
          <div className="pricing__card">
            <h3>Deep Cleaning</h3>
            <p className="pricing__amount">$200</p>
            <ul>
              <li>All Basic Cleaning</li>
              <li>Appliance & cabinet cleaning</li>
              <li>Baseboards and trim</li>
            </ul>
            <button>Choose Plan</button>
          </div>

          <div className="pricing__card">
            <h3>Commercial Cleaning</h3>
            <p className="pricing__amount">Contact Us</p>
            <ul>
              <li>Office & shared spaces</li>
              <li>Sanitization & floor care</li>
              <li>Trash & recycling removal</li>
            </ul>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
