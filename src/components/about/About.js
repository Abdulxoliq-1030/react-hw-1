import React, { Component } from "react";
import "../global.scss";
import "./about.scss";
import aboutImg from "../../images/about-img.svg";

class About extends Component {
  render() {
    return (
      <>
        <section className="about-wrapper">
          <div className="left-about">
            <h1>About</h1>
            <p>
              The model offers a framework for discussing problems related to
              the user's experience, as well as possible ways and means of
              solving them. Application development begins at the top level
              (strategy), where the future software product is described quite
              abstractly from the point of view of the expectations of both
              users and the customer.
            </p>
            <div className="happy-customers">
              <div className="customer">
                <h2>800</h2>
                <p>Pupils</p>
              </div>
              <div className="customer">
                <h2>18</h2>
                <p>Teachers</p>
              </div>
              <div className="customer">
                <h2>6</h2>
                <p>Foreign Languages</p>
              </div>
            </div>
          </div>
          <div className="right-about">
            <h2>About</h2>
            <img src={aboutImg} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default About;
