import React, { Component } from 'react'
import { IoIosStar } from "react-icons/io";

export default class item extends Component {
    render() {
        return (
            <div className="col-12 cart__item">
                  <div className="row">
                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                      <div className="card__cover">
                        <img
                          src="/image/covers/cover.jpg"
                          width={150}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                      <div className="card__content" style={{ marginTop: "0" }}>
                        <h2 className="cart__title">Title</h2>

                        <ul
                          className="card__list"
                          style={{ marginLeft: "0px" }}
                        >
                          <li>HD</li>
                          <li>16+</li>
                        </ul>
                        <div className="card__wrap">
                          <span className="card__rate">
                            <i
                              style={{
                                color: "rgb(255,88,96)",
                                textAlign: "center"
                              }}
                            >
                              <IoIosStar />
                            </i>
                            7
                          </span>
                        </div>
                        <div>
                          <h5 className="cart__price">$40</h5>
                        </div>
                        <button className="btn btn-danger remove__btn">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
        )
    }
}
