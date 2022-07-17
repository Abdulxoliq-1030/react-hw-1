import React, { Component } from "react";
import "../global.scss";
import "./footer.scss";
import footerLogo from "../../images/Britlex.svg";

class Footer extends Component {
  render() {
    return (
      <>
        <section className="footer-wrapper">
          <div>
            <img src={footerLogo} alt="" />
            <p>Terms and Conditions • Privacy Policy • Cookie Policy</p>
          </div>
        </section>
      </>
    );
  }
}

export default Footer;
