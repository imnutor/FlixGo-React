import React, { Component } from "react";
import { IoIosStar } from "react-icons/io";
import { connect } from "react-redux";

class Item extends Component {
  renderItemCart = () => {
    return this.props.cart.map((item, index) => {
      return (
        <div className="col-12 cart__item" key={index}>
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
                    {item.danhGia}
                  </span>
                </div>
                <div>
                  <h5 className="cart__price">{item.giaBan}$</h5>
                </div>
                <button
                  className="btn btn-danger remove__btn"
                  onClick={() => {
                    this.props.deleteCartItem();
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.cart);

    return (
      <div style={{ width: "100%" }}>
        {this.props.cart.length == 0 ? (
          <span style={{ paddingLeft: "15px", color: "white" }}>
            Your Cart Is Empty!
          </span>
        ) : (
          this.renderItemCart()
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.userReducer.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteCartItem: index => {
      const action = {
        type: "DELETE_ITEM",
        index
      };
      dispatch(action);
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Item);
