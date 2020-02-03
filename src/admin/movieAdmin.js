import React, { Component } from "react";
import * as action from "../redux/action/indexAPI";
import { connect } from "react-redux";
import ListMovieAdmin from "./listMovieAdmin";
class MovieAdmin extends Component {
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
      <div className="container" style={{color:"white"}}>
          <br />
          <h2>List Movie</h2>
          <br/>
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
export default connect(mapStateToProps, mapDispatchToProps)(MovieAdmin);
