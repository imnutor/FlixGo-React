import React, { Component } from "react";
import * as action from "../redux/action/indexAPI";
import { connect } from "react-redux";
import ListUserAdmin from "./listUserAdmin";

class UserAdmin extends Component {
  componentDidMount() {
    this.props.getListUser();
  }
  renderUserAdmin = () => {
    return this.props.listUser.map((item, index) => {
      return <ListUserAdmin key={index} item={item} />;
    });
  };
  render() {
    return (
      <div style={{ backgroundColor: "white", width:"100%" }}>
        <div className="container">
          <br />
          <h2>List User</h2>
          <br />
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-sm-6">
                  <div className="dataTables_filter">
                    <label>
                      Search:
                      <input type="search" className="form-control input_sm" />
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <table className="table" style={{ width: "1172px" }}>
                    <thead>
                      <tr>
                        <th className="sorting">Name</th>
                        <th className="sorting">Username</th>
                        <th className="sorting">Email</th>
                        <th className="sorting">Phone</th>
                        <th className="sorting">Type</th>
                      </tr>
                    </thead>
                    <tbody>{this.renderUserAdmin()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    listUser: state.userReducer.listUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getListUser: () => {
      dispatch(action.actGetListUserAPI());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UserAdmin);
