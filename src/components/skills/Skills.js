import React, { Component } from "react";
import "../global.scss";
import "./skills.scss";
import "../button/button.scss";
import area1 from "../../images/area-1.svg";
import area2 from "../../images/area-2.svg";
import area3 from "../../images/area-3.svg";
import area4 from "../../images/area-4.svg";
import Button from "../button/Button";

class Skills extends Component {
  render() {
    return (
      <>
        <section className="skills-wrapper">
          <h1>Skills</h1>
          <div className="areas">
            <div className="area skill-area-1">
              <img src={area1} alt="" />
              <h1>Speaking</h1>
              <p>
                Improve your English skills and confidence. Live classes and
                interactive lessons online. 20% extra free for a limited time
                only
              </p>
              <p>
                Learn English online and improve your skills through our
                high-quality courses and resources – all designed for adult
                language learners.
              </p>
              <Button className="btn" name="Learn More" />
            </div>
            <div className="area skill-area-2">
              <img src={area2} alt="" />
              <h1>Writing</h1>
              <p>
                One of the most important and extensive areas of natural
                science, the science that studies substances, also their
                composition
              </p>
              <Button className="btn" name="Learn More" />
            </div>
            <div className="area skill-area-3">
              <img src={area3} alt="" />
              <h1>Reading</h1>
              <p>
                One of the most important and extensive areas of natural
                science, the science that studies substances, also their
                composition
              </p>
              <Button className="btn" name="Learn More" />
            </div>
            <div className="area skill-area-4">
              <div>
                <h1>Listening</h1>
                <p>
                  Here you can find activities to practise your listening
                  skills. Listening will help you to improve your understanding
                </p>
                <Button className="btn" name="Learn More" />
              </div>
              <img src={area4} alt="" />
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Skills;
