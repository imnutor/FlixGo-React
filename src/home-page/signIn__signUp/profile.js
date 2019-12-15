import React, { Component } from "react";
import {IoIosLogOut} from "react-icons/io"
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

class Profile extends Component {

  handleOnLogout = () => {
    localStorage.removeItem("userLogin");
  }

  render() {
    
    let {userInfo} = this.props;
    console.log(userInfo);
    
    return (
      <div className="content">
          <section
          className="section section--first" style={{background:"url(/image/section/section.jpg) no-repeat center/cover"}}
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__wrap">
                  {/* section title */}
                  <h2 className="profile__header">Profile</h2>
                  {/* end section title */}                
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* profile */}
        <div className="profile">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="profile__content">
                  <div className="profile__user">
                    <div className="profile__avatar">
                      <img src="/image/user.png" alt="" />
                    </div>
                    <div className="profile__meta">
                      <h3>{userInfo.taiKhoan}</h3>
                      <span>FlixGo ID: 23562</span>
                    </div>
                  </div>
                  {/* content tabs nav */}
                  <ul
                    className="nav nav-tabs content__tabs content__tabs--profile"
                    id="content__tabs"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        data-toggle="tab"
                        href="#tab-1"
                        role="tab"
                        aria-controls="tab-1"
                        aria-selected="true"
                      >
                        Profile
                      </a>
                    </li>
                  </ul>
                  {/* end content tabs nav */}
                  <NavLink className="profile__logout" type="button" onClick={this.handleOnLogout} to="/login" >
                    <i> <IoIosLogOut /></i> 
                    <span>Logout</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end profile */}
        <div className="container">
          {/* content tabs */}
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="tab-1"
              role="tabpanel"
              aria-labelledby="1-tab"
            >
              <div className="row">
                {/* details form */}
                <div className="col-12 col-lg-6">
                  <form action="#" className="profile__form">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="profile__title">Profile details</h4>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="username">
                            Username
                          </label>
                          <input
                            id="username"
                            type="text"
                            name="username"
                            className="profile__input"
                            placeholder={userInfo.taiKhoan}
                            />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="email">
                            Email
                          </label>
                          <input
                            id="email"
                            type="text"
                            name="email"
                            className="profile__input"
                            placeholder={userInfo.email}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="firstname">
                            Name
                          </label>
                          <input
                            id="firstname"
                            type="text"
                            name="firstname"
                            className="profile__input"
                            placeholder={userInfo.hoTen}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="lastname">
                            Phone Number
                          </label>
                          <input
                            id="lastname"
                            type="text"
                            name="lastname"
                            className="profile__input"
                            placeholder={userInfo.soDT}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="profile__btn" type="button">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end details form */}
                {/* password form */}
                <div className="col-12 col-lg-6">
                  <form action="#" className="profile__form">
                    <div className="row">
                      <div className="col-12">
                        <h4 className="profile__title">Change password</h4>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="oldpass">
                            Old Password
                          </label>
                          <input
                            id="oldpass"
                            type="password"
                            name="oldpass"
                            className="profile__input"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label className="profile__label" htmlFor="newpass">
                            New Password
                          </label>
                          <input
                            id="newpass"
                            type="password"
                            name="newpass"
                            className="profile__input"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                        <div className="profile__group">
                          <label
                            className="profile__label"
                            htmlFor="confirmpass"
                          >
                            Confirm New Password
                          </label>
                          <input
                            id="confirmpass"
                            type="password"
                            name="confirmpass"
                            className="profile__input"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="profile__btn" type="button">
                          Change
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* end password form */}
              </div>
            </div>
          </div>
          {/* end content tabs */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return{
    userInfo: state.userReducer.currentUser
  }
}
export default connect(mapStateToProps, null)(Profile);