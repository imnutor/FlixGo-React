import React, { Component } from "react";

export default class Modal extends Component {
  // renderTable = () => {
  //   const { cart } = this.props;
  //   console.log(this.props.cart);

  //   return cart.map((item, index) => {
  //     return (
  //       <tr key={index}>
  //         <td>{item.name}</td>
  //         <td>
  //           <img src={item.image} width={30} alt="" />
  //         </td>
  //         <td>
  //           <button
  //             onClick={() => {
  //               this.props.upDownAmount(false, item);
  //             }}
  //           >
  //             -
  //           </button>
  //           {item.amount}
  //           <button
  //             onClick={() => {
  //               this.props.upDownAmount(true, item);
  //             }}
  //           >
  //             +
  //           </button>
  //         </td>
  //         <td>{item.price}</td>
  //         <td>{item.price * item.amount}</td>
  //         <td>
  //           <button
  //             className="btn btn-danger"
  //             onClick={() => {
  //               this.props.deleteItem(item);
  //             }}
  //           >
  //             Delete
  //           </button>
  //         </td>
  //       </tr>
  //     );
  //   });
  // };

  render() {
    return (
      <div className="container">
        <div className="row">
          {/* details form */}
          <div className="col-12" style={{marginTop:"150px"}}>
            <div className="profile__form">
              <div className="row">
                <div className="col-12">
                  <h4 className="profile__title">My Cart</h4>
                </div>

                <div className="col-12">
                  <button className="profile__btn" type="button">
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
