import React, { Component } from "react";
import * as action from "../redux/action/indexAPI";
import { connect } from "react-redux";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      taiKhoan: "",
      matKhau: ""
    };
  }

  handleOnChane = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.loginAdmin(this.state, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-4 mx-auto mt-5">
            <div className="form-admin">
              <form onSubmit={this.handleOnSubmit} style={{ width: "100%" }}>
                <span className="form-admin__title">
                  <b>Welcome</b>
                </span>
                <span className="form-admin__img">
                  <div
                    style={{ width: "50px", height: "60px", margin: "auto" }}
                  >
                    <img src="/image/img-ad.PNG" className="img-fluid" />
                  </div>
                </span>
                <div className="form-group wrap-input">
                  <input
                    type="text"
                    className="wrap-input__form"
                    name="taiKhoan"
                    placeholder="Account"
                    onChange={this.handleOnChane}
                  />
                </div>

                <div className="form-group wrap-input">
                  <input
                    type="password"
                    className="wrap-input__form "
                    name="matKhau"
                    placeholder="Password"
                    onChange={this.handleOnChane}
                  />
                </div>
                <div className="wrap-button">
                  <div className="button-form">
                    <div className="button-form__bg"></div>
                    <button type="submit" className="button-btn">
                      <b>Login</b>
                    </button>
                  </div>
                </div>
                <div className="form-text__c">
                  <span className="txt1">
                    New Manage?
                    {" "}
                  </span>
                  <a href="#" className="txt2">
                     Contact here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    loginAdmin: (user, history) => {
      dispatch(action.actLoginAdmin(user, history));
    }
  };
};

export default connect(null, mapDispatchToProps)(Admin);
