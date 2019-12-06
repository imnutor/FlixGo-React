import React, { Component } from "react";
import {NavLink} from "react-router-dom";

export default class NavBarAdmin extends Component {
  logoutAdmin = () => {
    localStorage.removeItem("userAdmin");
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <NavLink className="navbar-brand" to="/admin/dashboard">
            AdminMovie
          </NavLink>

          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
                <NavLink className="nav-link" to="/admin/add-movie">
                  Add Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/update-movie">
                  Update Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/admin/delete-movie">
                  Delete Movie
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  <button className="btn btn-secondary btn-sm" onClick={this.logoutAdmin}>
                    Logout
                  </button>

                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
