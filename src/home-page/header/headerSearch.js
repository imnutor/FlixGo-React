import React, { Component } from "react";
import { connect } from "react-redux";

import SearchItem from "./searchItem.js";
import * as action from "../../redux/action/indexAPI";

class HeaderSearch extends Component {
  constructor(props) {
    super(props);
  }
  renderItemSearch = () => {
    let { itemMovie, keyword, itemTvSeries, itemCartoon } = this.props;
    console.log(keyword);

    itemMovie = itemMovie.filter(item => {
      return item.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    });

    return itemMovie.map((item, index) => {
      if (keyword.length === 0) {
        return null;
      } else {
        return <SearchItem key={index} item={item} />;
      }
      
    });
    
  };

  render() {
    return (
      <div className="header__search">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header__search-content">
                <input
                  type="text"
                  placeholder="Search for a movie, TV Series that you are looking for"
                  onChange={event => {
                    this.props.onFilter(event.target.value);
                  }}
                />
                <button type="button">search</button>
              </div>
            </div>
            <div className="col-12">
              <div className="search__item">{  this.renderItemSearch() }</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    itemMovie: state.movieReducer.listMovie,
    keyword: state.movieReducer.keyword,
    itemTvSeries: state.movieReducer.listTvSeries,
    itemCartoon: state.movieReducer.listCartoon
  };
};
const mapDisPatchToProps = dispatch => {
  return {
    onFilter: keyword => {
      dispatch(action.onFilter(keyword));
    }
  };
};
export default connect(mapStateToProps, mapDisPatchToProps)(HeaderSearch);
