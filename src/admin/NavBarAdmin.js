import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBarAdmin extends Component {
  render() {
    return (
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="#"
        >
          <div className="sidebar-brand-text mx-3">
            Movie Admin <sup>2</sup>
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider my-0" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <NavLink className="nav-link" to="/admin/dashboard">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">List</div>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/list-user">
            <span>User</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/list-movie">
            <span>Movie</span>
          </NavLink>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Heading */}
        <div className="sidebar-heading">Permission</div>
        
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/add-movie">
            <span>Add Movie</span>
          </NavLink>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/delete-movie">
            <span>Delete Movie</span>
          </NavLink>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin/update-movie">
            <span>Update Movie</span>
          </NavLink>
        </li>
        {/* Divider */}
        <hr className="sidebar-divider d-none d-md-block" />
      </ul>
    );
  }
}
