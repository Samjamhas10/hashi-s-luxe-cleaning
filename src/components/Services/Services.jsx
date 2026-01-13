import React from "react";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services">
      <div className="services__content">
        <h1>Our Cleaning Services</h1>
        <p className="services__subtitle">
          From regular maintenance to deep cleaning, we have the right solution
          for your needs.
        </p>

        <div className="services__cards">
          <div className="service__card">
            <h2>Residential Cleaning</h2>
            <p>
              Complete home cleaning services for apartments, houses, and condos
            </p>
            <ul>
              <li>Kitchen & bathroom deep clean</li>
              <li>Vacuum & mop all floors</li>
              <li>Dust all surfaces</li>
              <li>Trash removal</li>
            </ul>
          </div>

          <div className="service__card">
            <h2>Small Office / Commercial Cleaning</h2>
            <p>Professional office and business space cleaning</p>
            <ul>
              <li>Sanitizing desks and shared surfaces</li>
              <li>Floor maintenance</li>
              <li>Vacuuming and floor care</li>
              <li>Trash and recycling removal</li>
            </ul>
          </div>

          <div className="service__card">
            <h2>Deep Cleaning</h2>
            <p>
              Intensive cleaning for move-ins, move-outs, and special occasions
            </p>
            <ul>
              <li>Inside appliances (oven, fridge, microwave)</li>
              <li>Baseboards and trim cleaning</li>
              <li>Interior and exterior cabinet cleaning</li>
              <li>Extra attention to high-touch areas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
