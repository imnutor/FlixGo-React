import React, { Component } from "react";

export default class ImgOurPartners extends Component {
  render() {
      let {imgPartner} = this.props;
    return (
      <div className="col-6 col-sm-4 col-md-3 col-lg-2">
        <a href={imgPartner.linkPage} className="partner" target="_blank" >
          <img
            src={imgPartner.imgPartner}
            alt=""
            className="partner__img"
          />
        </a>
      </div>
    );
  }
}
