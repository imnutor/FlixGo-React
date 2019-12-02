import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as action from "../../redux/action/indexAPI";

class SignUp extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP06",
    maLoaiNguoiDung: "KhachHang",
    hoTen: ""
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.userPostFetch(this.state, this.props.history);
  };

  render() {
    return (
      <div className="sign">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* registration form */}
                <form className="sign__form" onSubmit={this.handleOnSubmit}>
                  <a href="#" className="sign__logo">
                    <img src="./image/logo.svg" alt="" />
                  </a>
                  <div className="sign__group">
                    <input
                      name="hoTen"
                      type="text"
                      className="sign__input"
                      placeholder="Name"
                      required
                      value={this.state.hoTen}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="sign__group">
                    <input
                      name="taiKhoan"
                      type="text"
                      className="sign__input"
                      placeholder="Account Name"
                      required
                      value={this.state.taiKhoan}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="sign__group">
                    <input
                      name="email"
                      type="text"
                      className="sign__input"
                      required
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="sign__group">
                    <input
                      name="soDt"
                      type="text"
                      className="sign__input"
                      placeholder="Phone Number"
                      required
                      value={this.state.soDt}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="sign__group">
                    <input
                      name="matKhau"
                      type="password"
                      className="sign__input"
                      placeholder="Password"
                      value={this.state.matKhau}
                      onChange={this.handleOnChange}
                    />
                  </div>
                  <div className="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      defaultChecked="checked"
                    />
                    <label htmlFor="remember">
                      I agree to the <a href="#">Privacy Policy</a>
                    </label>
                  </div>
                  <button className="sign__btn" type="submit">
                    Sign up
                  </button>
                  <span className="sign__text">
                    Already have an account?{" "}
                    <NavLink to="/login">Sign in!</NavLink>
                  </span>
                </form>
                {/* registration form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userPostFetch: (user,history) => {
      dispatch(action.userPostSignUpAPI(user,history));
    }
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
