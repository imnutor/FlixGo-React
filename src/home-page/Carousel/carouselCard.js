import React, { Component } from "react";
import { IoIosPlay, IoIosStar } from "react-icons/io";
import {NavLink} from "react-router-dom";

export default class CarouselCard extends Component {
  
  render() {
    let { movie } = this.props;
    return (
      <div className="home__carousel">
        <div className="item">
          {/* card */}
          <div
            className="card card--big"
            style={{ width: "240px", marginRight: "50px" }}
          >
            <div className="card__cover">
              <img src={movie.hinhAnh} alt="" />
              <NavLink to={`/detail-movie/${movie.tenPhim}`} className="card__play">
                <IoIosPlay />
              </NavLink>
            </div>
            <div className="card__content">
              <h3 className="card__title">
                <a href="#">{movie.tenPhim}</a>
              </h3>
              <span className="card__category">
                <a href="#">Action</a>
                <a href="#">Triler</a>
              </span>
              <span className="card__rate">
                <i style={{ color: "#ff5860", textAlign: "center" }}>
                  <IoIosStar />
                </i>
                {movie.danhGia}
              </span>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    );
  }
}
