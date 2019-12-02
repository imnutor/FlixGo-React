import React, { Component } from "react";
import { IoIosSearch, IoMdLogIn, IoIosCart } from "react-icons/io";
import HeaderSearch from "./headerSearch";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { NavLink, Link } from "react-router-dom";
import $ from "jquery";
import Modal from "../content/cart/modal";

export default class Headcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggle: false
    };
  }

  componentDidMount() {
    $(".cinemaMovie").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".movie").offset().top - 100
        },
        1000
      );
      $(".content__tabs > li > a:nth-child(1)").removeClass("active");
      $(".content__tabs > li > a:nth-child(1)").attr("aria-selected", false);
      $(".content__tabs > li:nth-child(2) > a").addClass("active");
      $(".content__tabs > li:nth-child(2) > a").attr("aria-selected", true);
      $(".tab__contents > div:nth-child(1)").removeClass("active show");
      $(".tab__contents > div:nth-child(2)").removeClass("active show");
      $(".tab__contents > div:nth-child(3)").removeClass("active show");
      $(".tab__contents > div:nth-child(2)").addClass("active show");
    });

    $(".tvSeries").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".movie").offset().top - 100
        },
        1000
      );
      $(".content__tabs > li > a:nth-child(1)").removeClass("active");
      $(".content__tabs > li > a:nth-child(1)").attr("aria-selected", false);
      $(".content__tabs > li:nth-child(3) > a").addClass("active");
      $(".content__tabs > li:nth-child(3) > a").attr("aria-selected", true);
      $(".tab__contents > div:nth-child(1)").removeClass("active show");
      $(".tab__contents > div:nth-child(2)").removeClass("active show");
      $(".tab__contents > div:nth-child(3)").removeClass("active show");
      $(".tab__contents > div:nth-child(3)").addClass("active show");
    });
    $(".cartoon").click(function() {
      $("html, body").animate(
        {
          scrollTop: $(".movie").offset().top - 100
        },
        1000
      );
      $(".content__tabs > li > a:nth-child(1)").removeClass("active");
      $(".content__tabs > li > a:nth-child(1)").attr("aria-selected", false);
      $(".content__tabs > li:nth-child(4) > a").addClass("active");
      $(".content__tabs > li:nth-child(4) > a").attr("aria-selected", true);
      $(".tab__contents > div:nth-child(1)").removeClass("active show");
      $(".tab__contents > div:nth-child(2)").removeClass("active show");
      $(".tab__contents > div:nth-child(3)").removeClass("active show");
      $(".tab__contents > div:nth-child(4)").addClass("active show");
    });
  }

  handleClickToggle = () => {
    this.setState({
      isToggle: !this.state.isToggle
    });
  };

  render() {
    return (
      <header className="sticky header">
        <div className="header__wrap">
          <div className="container">
            
            <div className="row">
              <div className="col-12">
                <div className="header__content">
                  <NavLink className="header__logo" to="/" exact>
                    <img src="./image/logo.svg" alt="" />
                  </NavLink>

                  <ul className="header__nav">
                    <li className="header__nav-item">
                      <NavLink className="header__nav-link" to="/" exact>
                        Home
                      </NavLink>
                    </li>
                    <li className="header__nav-item">
                      <NavLink
                        className="header__nav-link"
                        to="/"
                        activeClassName="active"
                        role="button"
                        data-toggle="dropdown"
                      >
                        Catalog
                      </NavLink>
                      <ul className="dropdown-menu header__dropdown-menu">
                        <li className="cinemaMovie">
                          <a href="#">Cinema Movie</a>
                        </li>
                        <li className="tvSeries">
                          <a href="#">TV Series</a>
                        </li>
                        <li className="cartoon">
                          <a href="#">Cartoon</a>
                        </li>
                      </ul>
                    </li>
                    <li className="header__nav-item">
                      <NavLink
                        className="header__nav-link"
                        to="/about-us"
                        activeClassName="active"
                      >
                        About
                      </NavLink>
                    </li>
                  </ul>
                  <div className="header__auth">
                    <button
                      className="header__search-btn"
                      type="button"
                      onClick={this.handleClickToggle}
                    >
                      <IoIosSearch />
                    </button>
                    <NavLink to="/login/cart">
                    <button
                      className="header__cart-btn"
                      
                      type="button"
                      style={{ marginLeft: "32px" }}
                    >
                      <IoIosCart />
                    </button>
                    </NavLink>
                    <NavLink
                      className="header__sign-in"
                      to={
                        localStorage.getItem("userLogin")
                          ? "/login/user"
                          : "/login"
                      }
                    >
                      <i>
                        <IoMdLogIn />
                      </i>
                      <span>
                        {localStorage.getItem("userLogin")
                          ? "Welcome"
                          : "Sign In"}
                      </span>
                    </NavLink>
                  </div>
                </div>
              </div>
              <ReactCSSTransitionGroup
                transitionName="fade"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}
              >
                {this.state.isToggle ? <HeaderSearch /> : null}
              </ReactCSSTransitionGroup>
              
            </div>
          </div>
        </div>
        
      </header>
    );
  }
}
