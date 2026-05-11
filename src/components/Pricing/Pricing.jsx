import React from "react";
import "./Pricing.css";

const pricingPlans = [
  {
    id: 1,
    title: "Basic Cleaning",
    price: "$150 +",
    description: "Best for recurring maintenance cleaning",
    features: [
      "Kitchen & bathroom cleaning",
      "Vacuum & mop floors",
      "Dust all surfaces",
    ],
    buttonText: "Book Basic Cleaning",
  },
  {
    id: 2,
    title: "Deep Cleaning",
    price: "$300 +",
    description: "Best for first-time or detailed cleaning",
    features: [
      "Includes all Basic Cleaning services",
      "Appliance & cabinet cleaning",
      "Baseboards and trim",
    ],
    buttonText: "Book Deep Cleaning",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="pricing" aria-labelledby="pricing-title">
      <div className="pricing__container">
        <h2 id="pricing-title" className="pricing__title">
          Our Pricing
        </h2>
        <p className="pricing__subtitle">
          Flexible options for every home or office cleaning need. Prices vary
          based on home size, condition, and cleaning scope.
        </p>
        <div className="pricing__cards">
          {pricingPlans.map((plan) => (
            <article key={plan.id} className="pricing__card">
              <h3>
                {plan.icon} {plan.title}
              </h3>

              <p
                className="pricing__amount"
                aria-label={`${plan.price} starting price`}
              >
                {plan.price}
              </p>

              <p className="pricing__description">{plan.description}</p>

              <ul>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>

              <a
                href="#contact"
                className="pricing__button"
                aria-label={`Book ${plan.title}`}
              >
                {plan.buttonText}
              </a>
            </article>
          ))}
        </div>

        <div className="pricing__cta">
          <p>Not sure which plan is right for you?</p>

          <a
            href="#contact"
            className="pricing__cta-button"
            aria-label="Contact Hashi's Luxe Cleaning"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
