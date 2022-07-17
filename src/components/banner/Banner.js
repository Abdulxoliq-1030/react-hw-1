import React, { Component } from "react";
import "../global.scss";
import "./banner.scss";
import bannerImg from "../../images/banner-img.svg";
import Button from "../button/Button";

class Banner extends Component {
  render() {
    return (
      <>
        <section className="wrapper">
          <div className="banner-left">
            <h1>Learn Any Foreign Language</h1>
            <p>
              With our teachers who write a program for each student, you will
              be able to make your first sketch after the first lesson.
            </p>
            <div className="button">
              <Button className="btn" name="Get Started" />
            </div>
          </div>
          <div className="banner-right">
            <img src={bannerImg} alt="" />
          </div>
        </section>
      </>
    );
  }
}

export default Banner;
