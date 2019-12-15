import React, { Component } from "react";
import Item from "./item";

export default class Modal extends Component {
  componentDidMount(){
    console.log(this.props);
    
  }

  renderTable = () => {
    
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* details form */}
          <div className="col-12" style={{ marginTop: "150px" }}>
            <div className="profile__form">
              <div className="row">
                <div className="col-12">
                  <h4 className="profile__title">My Cart</h4>
                </div>
<Item />
                
                <div className="col-12">
                  <button
                    className="profile__btn"
                    type="button"
                    onClick={() => {
                      this.renderTable();
                    }}
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
