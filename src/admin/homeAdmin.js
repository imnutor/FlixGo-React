import React, { Component } from "react";

export default class HomeAdmin extends Component {
  render() {
    return (
      <div>
        <div
          id="content-wrapper"
          className="d-flex flex-column"
          style={{ backgroundColor: "white" }}
        >
          {/* Main Content */}
          <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <ul className="navbar-nav ml-auto">
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="userDropdown"
                    role="button"
                  >
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                      Valerie Luna
                    </span>
                    <img
                      className="img-profile rounded-circle"
                      src="/image/user.png"
                    />
                  </a>
                </li>
              </ul>
            </nav>
            {/* End of Topbar */}
            {/* Begin Page Content */}
            <div className="container-fluid">
              {/* Page Heading */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a href="#" className="btn btn-secondary ">
                  Log Out
                </a>
              </div>
              {/* Content Row */}
              <div className="row">
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-primary shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Earnings (Monthly)
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            $40,000
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-calendar fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-success shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                            Earnings (Annual)
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            $215,000
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Earnings (Monthly) Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-info shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                            Tasks
                          </div>
                          <div className="row no-gutters align-items-center">
                            <div className="col-auto">
                              <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                50%
                              </div>
                            </div>
                            <div className="col">
                              <div className="progress progress-sm mr-2">
                                <div
                                  className="progress-bar bg-info"
                                  role="progressbar"
                                  style={{ width: "50%" }}
                                  aria-valuenow={50}
                                  aria-valuemin={0}
                                  aria-valuemax={100}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Pending Requests Card Example */}
                <div className="col-xl-3 col-md-6 mb-4">
                  <div className="card border-left-warning shadow h-100 py-2">
                    <div className="card-body">
                      <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                          <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                            Pending Requests
                          </div>
                          <div className="h5 mb-0 font-weight-bold text-gray-800">
                            18
                          </div>
                        </div>
                        <div className="col-auto">
                          <i className="fas fa-comments fa-2x text-gray-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* Content Column */}
                <div className="col-lg-6 mb-4">
                  {/* Project Card Example */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Projects
                      </h6>
                    </div>
                    <div className="card-body">
                      <h4 className="small font-weight-bold">
                        Server Migration{" "}
                        <span className="float-right">20%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-danger"
                          role="progressbar"
                          style={{ width: "20%" }}
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="small font-weight-bold">
                        Sales Tracking <span className="float-right">40%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "40%" }}
                          aria-valuenow={40}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="small font-weight-bold">
                        Customer Database{" "}
                        <span className="float-right">60%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "60%" }}
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="small font-weight-bold">
                        Payout Details <span className="float-right">80%</span>
                      </h4>
                      <div className="progress mb-4">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          style={{ width: "80%" }}
                          aria-valuenow={80}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <h4 className="small font-weight-bold">
                        Account Setup{" "}
                        <span className="float-right">Complete!</span>
                      </h4>
                      <div className="progress">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "100%" }}
                          aria-valuenow={100}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Development Approach
                      </h6>
                    </div>
                    <div className="card-body">
                      <p>
                        SB Admin 2 makes extensive use of Bootstrap 4 utility
                        classes in order to reduce CSS bloat and poor page
                        performance. Custom CSS classes are used to create
                        custom components and custom utility classes.
                      </p>
                      <p className="mb-0">
                        Before working with this theme, you should become
                        familiar with the Bootstrap framework, especially the
                        utility classes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  {/* Illustrations */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Illustrations
                      </h6>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <img
                          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                          style={{ width: "25rem" }}
                          src="/image/undraw_posting_photo.svg"
                          alt
                        />
                      </div>
                      <p>
                        Add some quality, svg illustrations to your project
                        courtesy of , a constantly updated collection of
                        beautiful svg images that you can use completely free
                        and without attribution!
                      </p>
                    </div>
                  </div>
                  {/* Approach */}
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Development Approach
                      </h6>
                    </div>
                    <div className="card-body">
                      <p>
                        SB Admin 2 makes extensive use of Bootstrap 4 utility
                        classes in order to reduce CSS bloat and poor page
                        performance. Custom CSS classes are used to create
                        custom components and custom utility classes.
                      </p>
                      <p className="mb-0">
                        Before working with this theme, you should become
                        familiar with the Bootstrap framework, especially the
                        utility classes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </div>
          {/* End of Main Content */}
          {/* Footer */}
          <footer className="sticky-footer bg-white">
            <div className="container my-auto">
              <div className="copyright text-center my-auto">
                <span>Copyright © Your Website 2019</span>
              </div>
            </div>
          </footer>
          {/* End of Footer */}
        </div>
      </div>
    );
  }
}
