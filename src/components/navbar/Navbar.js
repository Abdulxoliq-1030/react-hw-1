import React, { Component } from "react";
import "./navbar.scss";
import "../global.scss";
import logo from "../../images/Britlex.svg";
import hamburger from "../../images/hamburger.png";

class Navbar extends Component {
  render() {
    return (
      <section className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>

        <ul className="navbar-links">
          <li className="nav-link">
            <a href="#">Home</a>
          </li>
          <li className="nav-link">
            <a href="#">Skills</a>
          </li>
          <li className="nav-link">
            <a href="#">About Us</a>
          </li>
          <li className="nav-link">
            <a href="#">Pricing</a>
          </li>
          <li className="nav-link">
            <a href="#">Contacts</a>
          </li>
        </ul>
        <div className="nav-button">
          <button>Lets Talk</button>
        </div>
        <div className="hamburger-btn">
          <img src={hamburger} alt="" />
        </div>
      </section>
    );
  }
}

export default Navbar;
