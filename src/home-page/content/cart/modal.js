import React, { Component } from "react";
import Item from "./item";
import { connect } from "react-redux";

class Modal extends Component {
  render() {
    let {userInfo } = this.props
    return (
      <div className="container">
        <div className="row">
          {/* details form */}
          <div className="col-12" style={{ marginTop: "150px" }}>
            <div className="profile__form">
              <div className="row">
                <div className="col-12">
                  <h4 className="profile__title">{userInfo.hoTen}'s Cart</h4>
                </div>
                <Item />
                {this.props.cart.length === 0 ? null : (
                  <div className="col-12">
                    <button className="profile__btn" type="button">
                      Checkout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.userReducer.cart,
    userInfo: state.userReducer.currentUser
  };
};
export default connect(mapStateToProps, null)(Modal);
