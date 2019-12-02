import React, { Component } from "react";
import { IoIosPlay, IoIosStar } from "react-icons/io";

export default class ItemCard extends Component {
  render() {
    return (
      <div className="col-6 col-sm-12 col-lg-6">
        <div className="card card--list">
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="card__cover">
                <img src={this.props.movieRelease.imageMovie} alt="" />
                <a href="#" className="card__play">
                  <i>
                    <IoIosPlay />
                  </i>
                </a>
              </div>
            </div>
            <div className="col-12 col-sm-8">
              <div className="content__info">
                <h3 className="card__title">
                  <a href="#">{this.props.movieRelease.name}</a>
                </h3>
                <span className="card__category">
                  <a href="#">{this.props.movieRelease.tag}</a>
                </span>
                <div className="card__wrap">
                  <span className="card__rate">
                    <i style={{ color: "rgb(255,88,96)", textAlign: "center" }}>
                      <IoIosStar />
                    </i>
                    {this.props.movieRelease.rate}
                  </span>
                  <ul className="card__list">
                    <li>{this.props.movieRelease.resolution}</li>
                    <li>{this.props.movieRelease.ageSuitable}</li>
                  </ul>
                </div>
                <div className="card__description">
                  <p>
                  {this.props.movieRelease.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
