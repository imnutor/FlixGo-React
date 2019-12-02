import React, { Component } from "react";
import Slider from "react-slick";
export default class CarouselBg extends Component {
  render() {
    const settings = {
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      pauseOnHover: false,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="home__cover">
            <img src="./image/home/home__bg.jpg" />
          </div>
          <div className="home__cover">
            <img src="./image/home/home__bg2.jpg" />
          </div>
          <div className="home__cover">
            <img src="./image/home/home__bg3.jpg" />
          </div>
          <div className="home__cover">
            <img src="./image/home/home__bg4.jpg" />
          </div>
        </Slider>
      </div>
    );
  }
}
