import React, { Component } from "react";
import Button from "../button/Button";
import contactImg from "../../images/contact.svg";
import "../global.scss";
import "./contact.scss";

class Contact extends Component {
  render() {
    return (
      <>
        <section className="contact-wrapper">
          <div className="contact-left">
            <img src={contactImg} alt="" />
          </div>
          <div className="contact-right">
            <h1>Contact Us</h1>
            <p>
              Discover your current English level by taking our free online
              English test.Sign up to our newsletter for learning tips and free
              resources
            </p>
            <div className="submit-wrapper">
              <input type="text" placeholder="Enter Your E-mail" />
              <Button className="btn" name="Subscribe" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
