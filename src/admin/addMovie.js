import React, { Component } from "react";
import * as action from "../redux/action/indexAPI";
import { connect } from "react-redux";

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maPhim: "",
      tenPhim: "",
      biDanh: "",
      trailer: "",
      hinhAnh: "",
      moTa: "",
      maNhom:"GP06",
      ngayKhoiChieu: "",
      danhGia: ""
    };
  }
  handleOnChange = event => {
    let { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };
  handleOnSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addMovie(this.state);
  };
  render() {
    return (
      <div style={{  backgroundColor:"#fff", width:"100%" }}>
        <form className="container" onSubmit={this.handleOnSubmit}>
          <h3 className="display-4">Thêm Phim</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <h3>Mã Phim</h3>
                <input
                  className="form-control"
                  name="maPhim"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Tên Phim</h3>
                <input
                  className="form-control"
                  name="tenPhim"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Bí Danh</h3>
                <input
                  className="form-control"
                  name="biDanh"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Ngày Khởi Chiếu</h3>
                <input
                  className="form-control"
                  name="ngayChieu"
                  type="date"
                  
                  onChange={this.handleOnChange}
                />
              </div>
              
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <h3>Trailer</h3>
                <input
                  className="form-control"
                  name="trailer"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Hình ảnh</h3>
                <input
                  className="form-control"
                  name="hinhAnh"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Mô Tả</h3>
                <input
                  className="form-control"
                  name="moTa"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <h3>Đánh Giá</h3>
                <input
                  className="form-control"
                  name="danhGia"
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Thêm Phim
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addMovie: phim => {
      dispatch(action.actAddMovie(phim));
    }
  };
};
export default connect(null, mapDispatchToProps)(AddMovie);
