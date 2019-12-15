import React, { Component } from "react";

export default class searchItem extends Component {
  render() {
    console.log(this.props);
    let { item } = this.props;
    return (
      // <div>
        <a href="">
          <div className="row">
            <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
              <div className="card__cover">
                <img src={item.hinhAnh} width={150} alt="" />
              </div>
            </div>
            <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
              <div className="card__content" style={{ marginTop: "0" }}>
                <h2 className="cart__title">{item.tenPhim}</h2>

                <ul className="card__list" style={{ marginLeft: "0px" }}>
                  <li>HD</li>
                  <li>16+</li>
                </ul>

                <div>
                  <h5 className="cart__price">$40</h5>
                </div>
              </div>
            </div>
          </div>
        </a>
      // </div>
    );
  }
}
