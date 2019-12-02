import React, { Component } from 'react'
import { IoIosPlay, IoIosStar } from "react-icons/io";
import {NavLink} from "react-router-dom";

export default class ItemCartoon extends Component {
    render() {
      let {Cartoon} = this.props;
        return (
            <div className="col-6 col-sm-4 col-lg-3 col-xl-2">
        <div className="card">
          <div className="card__cover">
            <img src={Cartoon.imgCartoon} alt="" />
            <NavLink to={`/detail-cartoon/${Cartoon.id}`} className="card__play">
              <i>
                <IoIosPlay />
              </i>
            </NavLink>
          </div>
          <div className="card__content">
            <h3 className="card__title">
        <a href="#">{Cartoon.nameCartoon}</a>
            </h3>
            <span className="card__category">
        <a href="#">{Cartoon.tagCartoon}</a>
            </span>
            <span className="card__rate">
              <i style={{ color: "rgb(255,88,96)", textAlign: "center" }}>
                <IoIosStar />
              </i>
              {Cartoon.rateCartoon}
            </span>
          </div>

          {/* end card */}
        </div>
      </div>
        )
    }
}
