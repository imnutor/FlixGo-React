import React, { Component } from "react";
import ContentItem from "./contentItemRelease";
import ItemMovie from "./ItemMovie";
import { connect } from "react-redux";
import * as action from "../../../redux/action/indexAPI";
import ItemTvSeries from "./itemTvSeries";
import ItemCartoon from "./itemCartoon";

class ContentBody extends Component {
  componentDidMount() {
    this.props.getListTvSeries();
    this.props.getListCartoon();
  }
  renderItemMovie = () => {
    return this.props.itemMovie.slice(0, 12).map((item, index) => {
      return <ItemMovie key={index} movie={item} />;
    });
  };
  renderItemTvSeries = () => {
    return this.props.itemTvSeries.slice(0, 12).map((item, index) => {
      return <ItemTvSeries key={index} tvSeries={item} />;
    });
  };
  renderItemCartoon = () => {
    return this.props.itemCartoon.slice(0, 12).map((item, index) => {
      return <ItemCartoon key={index} Cartoon={item} />;
    });
  };

  render() {
    return (
      <section className="container">
        <div className="tab-content tab__contents">
          <div
            className="tab-pane fade show active"
            id="tab-1"
            role="tabpanel"
            aria-labelledby="1-tab"
          >
            <ContentItem />
          </div>
          <div
            className="tab-pane fade"
            id="tab-2"
            role="tabpanel"
            aria-labelledby="2-tab"
          >
            <div className="row">{this.renderItemMovie()}</div>
          </div>
          <div
            className="tab-pane fade"
            id="tab-3"
            role="tabpanel"
            aria-labelledby="3-tab"
          >
            <div className="row">{this.renderItemTvSeries()}</div>
          </div>
          <div
            className="tab-pane fade"
            id="tab-4"
            role="tabpanel"
            aria-labelledby="4-tab"
          >
            <div className="row">{this.renderItemCartoon()}</div>
          </div>
        </div>
      </section>
    );
  }
}
let mapStateToProps = state => {
  return {
    itemMovie: state.movieReducer.listMovie,
    itemTvSeries: state.movieReducer.listTvSeries,
    itemCartoon: state.movieReducer.listCartoon
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getListTvSeries: () => {
      dispatch(action.actGetListTvSeriesAPI());
    },
    getListCartoon: () => {
      dispatch(action.actGetListCartoonAPI());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ContentBody);
