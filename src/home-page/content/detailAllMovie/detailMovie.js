import React, { Component } from "react";
import {
  IoIosStar,
  IoLogoApple,
  IoLogoAndroid,
  IoLogoWindows,
  IoMdTv,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoVk,
  IoIosCart
} from "react-icons/io";
import CommentComponent from "../commentMovie/commentComponent";
import * as action from "../../../redux/action/indexAPI";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as ActionType from "../../../redux/contanst/actionType";
import Modal from "../cart/modal";

class DetailMovie extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetailMovie(id);
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  handleAddToCart = item => {
    let { movie } = this.props;
    const objItem = {
      name: movie.tenPhim,
      image: movie.hinhAnh,
      price: 0
    };
  };

  // sumAmount = () => {
  //   return this.state.cart.reduce((sum, item)=> {
  //     return (sum += item.amount);
  //   }, 0)
  // }

  // handleUpDownAmout = (status, item) => {
  //   let index = this.state.cart.findIndex(obj => obj.name === item.name);
  //   let updateCart = this.state.cart;

  //   if(status) {
  //     updateCart[index].amount += 1;
  //   } else{
  //     if(updateCart[index].amount > 1) {
  //       updateCart[index].amount -= 1;
  //     }
  //   }
  //   this.setState({
  //     cart:updateCart
  //   })
  // }

  // handleDelete = item => {
  //   let {cart} = {...this.state};

  //   let index = this.state.cart.findIndex(obj => {
  //     return obj.name === item.name;
  //   })

  //   cart.splice(index, 1);

  //   this.setState({
  //     cart
  //   })
  // }

  render() {
    let { movie } = this.props;
    console.log(movie);

    return (
      <section>
        {/* details content */}
        <div
          className="section details"
          style={{
            background: "url(./image/covers/slide-3.png) no-repeat center/cover"
          }}
        >
          <div className="container">
            <div className="row">
              {/* title */}
              <div className="col-12">
                <h1 className="details__title">{movie.tenPhim}</h1>
              </div>
              {/* end title */}
              {/* content */}
              <div className="col-12 col-xl-6">
                <div className="card card--details">
                  <div className="row">
                    {/* card cover */}
                    <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-5">
                      <div className="card__cover">
                        <img src={movie.hinhAnh} alt="" />
                        <NavLink to="/login/cart">
                          <button
                            className="addToCart__btn"
                            onClick={() => {
                              this.handleAddToCart();
                            }}
                          >
                            Add to{" "}
                            <i
                              style={{
                                fontSize: "20px",
                                textAlign: "center",
                                padding: "0 0 3px 5px"
                              }}
                            >
                              <IoIosCart />
                            </i>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                    {/* end card cover */}
                    {/* card content */}
                    <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-7">
                      <div className="card__content" style={{ marginTop: "0" }}>
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
                            {movie.danhGia}
                          </span>
                          <ul className="card__list">
                            <li>HD</li>
                            <li>16+</li>
                          </ul>
                        </div>
                        <ul className="card__meta">
                          <li>
                            <span>Tag:</span> <a href="#">Action</a>
                            <a href="#">Triler</a>
                          </li>
                          <li>
                            <span>Release year:</span> 2017
                          </li>
                          <li>
                            <span>Running time:</span> 120 min
                          </li>
                          <li>
                            <span>Country:</span> <a href="#">USA</a>{" "}
                          </li>
                        </ul>
                        <div className="card__description card__description--details">
                          {movie.moTa}
                        </div>
                      </div>
                    </div>
                    {/* end card content */}
                  </div>
                </div>
              </div>
              {/* end content */}
              {/* player */}
              <div className="col-12 col-xl-6">
                <iframe
                  width="560"
                  height="315"
                  src={movie.trailer}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              {/* end player */}
              <div className="col-12">
                <div className="details__wrap">
                  {/* availables */}
                  <div className="details__devices">
                    <span className="details__devices-title">
                      Available on devices:
                    </span>
                    <ul className="details__devices-list">
                      <li>
                        <i style={{ color: "#ff5860" }}>
                          <IoLogoApple />
                        </i>
                        <span>IOS</span>
                      </li>
                      <li>
                        <i style={{ color: "#ff5860" }}>
                          <IoLogoAndroid />
                        </i>
                        <span>Android</span>
                      </li>
                      <li>
                        <i style={{ color: "#ff5860" }}>
                          <IoLogoWindows />
                        </i>
                        <span>Windows</span>
                      </li>
                      <li>
                        <i style={{ color: "#ff5860" }}>
                          <IoMdTv />
                        </i>
                        <span>Smart TV</span>
                      </li>
                    </ul>
                  </div>
                  {/* end availables */}
                  {/* share */}
                  <div className="details__share">
                    <span className="details__share-title">
                      Share with friends:
                    </span>
                    <ul className="details__share-list">
                      <li className="facebook">
                        <a href="#">
                          <i style={{ color: "#3b5999" }}>
                            <IoLogoFacebook />
                          </i>
                        </a>
                      </li>
                      <li className="instagram">
                        <a href="#">
                          <i style={{ color: "#ff5860" }}>
                            <IoLogoInstagram />
                          </i>
                        </a>
                      </li>
                      <li className="twitter">
                        <a href="#">
                          <i style={{ color: "#1da1f2" }}>
                            <IoLogoTwitter />
                          </i>
                        </a>
                      </li>
                      <li className="vk">
                        <a href="#">
                          <i style={{ color: "#45668e" }}>
                            <IoLogoVk />
                          </i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* end share */}
                </div>
              </div>
            </div>
          </div>
          {/* end details content */}
        </div>
        <CommentComponent />
      </section>
    );
  }
}
const mapStateToProps = state => {
  return {
    movie: state.movieReducer.movie,
    currentCart: state.userReducer.currentCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDetailMovie: id => {
      dispatch(action.actDetailMovieAPI(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailMovie);
