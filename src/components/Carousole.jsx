import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousole.css";
import slide1 from "../Images/slide1.jpg";
import slide2 from "../Images/slide2.jpg";
import slide3 from "../Images/slide3.jpg";

class Carousole extends React.Component {
  render() {
    return (
      <div className="carousole-div">
        <Carousel
          dynamicHeight="50vh"
          autoPlay="true"
          infiniteLoop="true"
          showThumbs="false"
          interval="3000"
        >
          <div className="image">
            <img src={slide1} className="img" alt="Slide1" />
            <div className="feature">
              <h1>Welcome to Government College of Engineering and Research, Avasari</h1>
            </div>
          </div>
          <div className="image">
            <img src={slide2} className="img" alt="Slide2"/>
            <div className="feature">
              <h1>Welcome to Government College of Engineering and Research, Avasari</h1>
            </div>
          </div>
          <div className="image">
            <img src={slide3} className="img" alt="Slide3"/>
            <div className="feature">
              <h1>Welcome to Government College of Engineering and Research, Avasari</h1>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}
export default Carousole;
