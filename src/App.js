import React, { Component } from "react";
import About from "./components/about/About";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./components/global.scss";
import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";
import Skills from "./components/skills/Skills";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Banner />
        <Skills />
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
