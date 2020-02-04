import React, { Component } from "react";

export default class ListUserAdmin extends Component {
  render() {
    let { item } = this.props;
    return (
      <tr>
        <td>{item.hoTen}</td>
        <td>{item.taiKhoan}</td>
        <td>{item.email}</td>
        <td>{item.soDt}</td>
        <td>{item.maLoaiNguoiDung}</td>
      </tr>
    );
  }
}
