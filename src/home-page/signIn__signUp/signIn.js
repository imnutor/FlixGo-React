import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../../redux/action/indexAPI";
import { NavLink } from "react-router-dom";

class SignIn extends Component {
  state = {
    taiKhoan: "",
    matKhau: ""
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.userLoginFetch(this.state, this.props.history);
  };

  render() {
    return (
      <div className="sign">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sign__content">
                {/* authorization form */}
                <form onSubmit={this.handleOnSubmit} className="sign__form">
                  <NavLink to="/" className="sign__logo">
                    <img src="/image/logo-fix.png" alt="" />
                  </NavLink>
                  <div className="sign__group">
                    <input
                      name="taiKhoan"
                      type="text"
                      className="sign__input"
                      placeholder="Account Name"
                      value={this.state.taiKhoan}
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
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <button className="sign__btn" type="submit">
                    Sign in
                  </button>
                  <span className="sign__text">
                    Don't have an account?{" "}
                    <NavLink to="/SignUp">Sign up!</NavLink>
                  </span>
                  <span className="sign__text">
                    <a href="#">Forgot password?</a>
                  </span>
                </form>
                {/* end authorization form */}
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
    userLoginFetch: (user,history) => {
      dispatch(action.userPostLoginAPI(user, history));
    }
  };
};

export default connect(null, mapDispatchToProps)(SignIn);
