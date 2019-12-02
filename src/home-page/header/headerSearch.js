import React, { Component } from "react";


export default class HeaderSearch extends Component {
  render() {
    return (
      
        <form action="#" className="header__search">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header__search-content">
                  <input
                    type="text"
                    placeholder="Search for a movie, TV Series that you are looking for"
                  />
                  <button type="button">search</button>
                </div>
              </div>
            </div>
          </div>
        </form>
    );
  }
}
