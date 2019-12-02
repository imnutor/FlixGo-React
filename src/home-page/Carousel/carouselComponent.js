import React, { Component } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import CarouselCard from "./carouselCard";
import { connect } from "react-redux";
import * as action from "./../../redux/action/indexAPI";
import CarouselBg from "./carouselBg";
import Slider from "react-slick";

class CarouselComponent extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }
  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  renderListMovieHTML = () => {
    return this.props.listMovie.map((item, index) => {
      return <CarouselCard key={index} movie={item} />;
    });
  };

  render() {
    const settings = {
      infinite: true,
      slidesToShow: 4,
      speed: 500,
      rows: 1,
      arrows: false,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <section className="home">
        <CarouselBg />

        <div className="container">
          <div className="row"></div>

          <div className="carousel__card">
            <div className="col-12">
              <h1 className="home__title">
                <b>HOT MOVIE</b> OF THIS SEASON
              </h1>

              <button
                className="home__nav home__nav--prev"
                type="button"
                onClick={this.previous}
              >
                <i>
                  <IoIosArrowRoundBack />
                </i>
              </button>
              <button
                className="home__nav home__nav--next"
                type="button"
                onClick={this.next}
              >
                <i>
                  <IoIosArrowRoundForward />
                </i>
              </button>
            </div>
            <Slider ref={c => (this.slider = c)} {...settings}>
              {this.renderListMovieHTML()}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CarouselComponent);
