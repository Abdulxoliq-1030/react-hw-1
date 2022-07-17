import React, { Component } from "react";
import img1 from "../../images/img-1.svg";
import img2 from "../../images/img-2.svg";
import img3 from "../../images/img-3.svg";
import "../global.scss";
import InnerPricing from "./InnerPricing";
import "./pricing.scss";

class Pricing extends Component {
  render() {
    return (
      <>
        <section className="pricing-wrapper">
          <h1>Pricing</h1>
          <div className="pricings">
            <InnerPricing
              img={img1}
              title="Self-study online course"
              text="Start learning English online in live classes with qualified EC teachers and students from all over the world."
              btnText="£5.99 per month"
            />
            <InnerPricing
              img={img2}
              title="Live online classes"
              text="Start learning English online in live classes with qualified EC teachers and students from all over the world. Start learning English online in live classes with qualified EC teachers and students from all over the world."
              btnText=" £12.99  per month"
            />
            <InnerPricing
              img={img3}
              title="Personal Tuition"
              text="Start learning English online in live classes with qualified EC teachers and students from all over the world."
              btnText="  £20.99  per month"
            />
          </div>
        </section>
      </>
    );
  }
}

export default Pricing;
