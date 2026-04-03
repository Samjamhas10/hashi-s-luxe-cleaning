import React from "react";
import "./Services.css";

const SERVICE_CARDS = [
  {
    title: "Residential Cleaning",
    description:
      "Complete home cleaning services for apartments, houses, and condos",
    bullets: [
      "Kitchen & bathroom deep clean",
      "Vacuum & mop all floors",
      "Dust all surfaces",
      "Trash removal",
    ],
  },
  {
    title: "Small Office / Commercial Cleaning",
    description: "Professional office and business space cleaning",
    bullets: [
      "Sanitizing desks and shared surfaces",
      "Floor maintenance",
      "Vacuuming and floor care",
      "Trash and recycling removal",
    ],
  },
  {
    title: "Deep Cleaning",
    description:
      "Intensive cleaning for move-ins, move-outs, and special occasions",
    bullets: [
      "Inside appliances (oven, fridge, microwave)",
      "Baseboards and trim cleaning",
      "Interior and exterior cabinet cleaning",
      "Extra attention to high-touch areas",
    ],
  },
];

function Services() {
  return (
    <section
      id="services"
      className="services"
      aria-labelledby="services-title"
      aria-describedby="services-subtitle"
    >
      <div className="services__content">
        <h2 id="services-title">Our Cleaning Services</h2>
        <p id="services-subtitle" className="services__subtitle">
          From regular maintenance to deep cleaning, we have the right solution
          for your needs.
        </p>
        <div className="services__cards">
          <div className="service__card">
            <article className="service__card-content">
              <h3>Residential Cleaning</h3>
              <p>
                Complete home cleaning services for apartments, houses, and
                condos
              </p>
              <ul>
                <li>Kitchen & bathroom deep clean</li>
                <li>Vacuum & mop all floors</li>
                <li>Dust all surfaces</li>
                <li>Trash removal</li>
              </ul>
              <a className="service__cta" href="#contact">
                Get a quote
              </a>
            </article>
          </div>
          <div className="service__card">
            <h3>Small Office / Commercial Cleaning</h3>
            <p>Professional office and business space cleaning</p>
            <ul>
              <li>Sanitizing desks and shared surfaces</li>
              <li>Floor maintenance</li>
              <li>Vacuuming and floor care</li>
              <li>Trash and recycling removal</li>
            </ul>
          </div>
          <div className="service__card">
            <h3>Deep Cleaning</h3>
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
