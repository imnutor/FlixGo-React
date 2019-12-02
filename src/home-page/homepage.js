import React, { Component } from "react";
import CarouselComponent from "./Carousel/carouselComponent";
import ContentComponent from "./content/allMovie/contentComponent";

export default class Homepage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <CarouselComponent />
        <ContentComponent />
      </div>
    );
  }
}
