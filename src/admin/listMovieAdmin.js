import React, { Component } from "react";

export default class ListMovieAdmin extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="col-sm-2">
        <div className="card">
          <img className="card-img-top" src={item.hinhAnh} alt="" />
          <div className="card-body">
            <h4 className="card-title">{item.tenPhim}</h4>
            <p className="card-text">Mã Phim: {item.maPhim}</p>
            <p className="card-text">{item.biDanh}</p>
          </div>
        </div>
      </div>
    );
  }
}
