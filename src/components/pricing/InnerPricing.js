import React, { Component } from "react";
import "../global.scss";
import "./pricing.scss";

class InnerPricing extends Component {
  render() {
    return (
      <>
        <div className="pricing-item">
          <img src={this.props.img} alt="" />
          <h1>{this.props.title}</h1>
          <p>{this.props.text}</p>
          <button>{this.props.btnText}</button>
        </div>
      </>
    );
  }
}

export default InnerPricing;
