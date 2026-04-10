import React from "react";

// import components
import Home from "../Home/Home";
import Navigation from "../Navigation/Navigation";
import Services from "../Services/Services";
import CleaningPics from "../CleaningPics/CleaningPics";
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
      <CleaningPics />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
