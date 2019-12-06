import React, { Component } from "react";
import * as action from "../redux/action/indexAPI";
import { connect } from "react-redux";
import ListMovieAdmin from "./listMovieAdmin";

class HomeAdmin extends Component {
  componentDidMount() {
    this.props.getListMovie();
  }
  renderMovieAdmin = () => {
    return this.props.listMovie.map((item, index) => {
      return <ListMovieAdmin key={index} item={item} />;
    });
  };
  render() {
    return (
      <div className="container" style={{ color: "#fff" }}>
        Home Admin Movie Component 
        <div className="row">{this.renderMovieAdmin()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listMovie: state.movieReducer.listMovie
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListMovie: () => {
      dispatch(action.actGetListMovieAPI());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeAdmin);
