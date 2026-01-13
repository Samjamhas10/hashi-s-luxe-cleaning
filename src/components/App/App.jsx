import React from "react";

// import components
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Services from "../Services/Services";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

// import styles
import "./App.css";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <Services />
      <Pricing />
      <Contact />
      <Footer />
      <h1>Welcome to Hashi's Luxe Cleaning!</h1>
    </div>
  );
}

export default App;
