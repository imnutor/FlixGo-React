import * as ActionType from "./../contanst/actionType";
import Axios from "axios";

export const actGetListMovieAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url:
        "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06"
    })
      .then(result => {
        dispatch(actGetListMovie(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actGetListMovie = listMovie => {
  return {
    type: ActionType.GET_LIST_MOVIE,
    listMovie
  };
};

export const actGetListTvSeriesAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://5d6a415a6b97ef00145b77cc.mockapi.io/api/tvSeries"
    })
      .then(result => {
        dispatch(actGetListTvSeries(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actGetListTvSeries = listTvSeries => {
  return {
    type: ActionType.GET_LIST_TVSERIES,
    listTvSeries
  };
};

export const actGetListCartoonAPI = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "http://5d6a415a6b97ef00145b77cc.mockapi.io/api/carToon"
    })
      .then(result => {
        dispatch(actGetListCartoon(result.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const actGetListCartoon = listCartoon => {
  return {
    type: ActionType.GET_LIST_CARTOON,
    listCartoon
  };
};

export const actDetailMovieAPI = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP06&tenPhim=${id}`
    })
      .then(result => {
        dispatch(actDetailMovie(result.data[0]));
        console.log(result);
      })
      .catch(err => {});
  };
};
export const actDetailMovie = movie => {
  return {
    type: ActionType.DETAIL_MOVIE,
    movie
  };
};

export const actDetailTvSeriesAPI = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://5d6a415a6b97ef00145b77cc.mockapi.io/api/tvSeries/${id}`
    })
      .then(result => {
        dispatch(actDetailTvSeries(result.data));
        console.log(result);
      })
      .catch(err => {});
  };
};
export const actDetailTvSeries = tvSeries => {
  return {
    type: ActionType.DETAIL_TVSERIES,
    tvSeries
  };
};

export const actDetailCartoonAPI = id => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `http://5d6a415a6b97ef00145b77cc.mockapi.io/api/carToon/${id}`
    })
      .then(result => {
        dispatch(actDetailCartoon(result.data));
      })
      .catch(err => {});
  };
};
export const actDetailCartoon = Cartoon => {
  return {
    type: ActionType.DETAIL_CARTOON,
    Cartoon
  };
};

export const userPostSignUpAPI = (user, history) => {
  return dispatch => {
    Axios({
        method:"POST",
        url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        data: user,
    })
        .then(result => {
            console.log(result.data);
            localStorage.setItem("userSignUp", JSON.stringify(result.data));
            dispatch(LoginUser(result.data));
            alert("Success");
            history.push("/login");
          })
        .catch(err => {
            console.log(err.response.data);
            alert(err.response.data);
        })
  };
};
export const userPostLoginAPI = (user, history) => {
  return dispatch => {
      Axios({
          method:"POST",
          url:"http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
          data:user
      })
      .then(result => {
          console.log(result.data);
          if(result.data.maLoaiNguoiDung === "KhachHang"){
          localStorage.setItem("userLogin", JSON.stringify(result.data));
          history.push('/');
          dispatch(LoginUser(result.data));
        } else{
          alert("something went wrong");
        }
      })
      .catch(err => {
          console.log(err.response.data); 
          alert(err.response.data);
      })
  }
}
export const LoginUser = currentUser => {
  return {
    type: ActionType.LOGIN_USER,
    currentUser
  };
};
export const actLoginAdmin = (user, history) => {
  return dispatch => {
    Axios({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user
    })
      .then(result => {
        console.log(result.data);
        if (result.data.maLoaiNguoiDung === "GV") {
          localStorage.setItem("userAdmin", JSON.stringify(result.data));
          //Đá sang trang Dashboard Admin
          history.push("/admin/dashboard");
        } else {
          alert("Bạn không có quyền truy cập");
        }
      })
      .catch(errors => {
        console.log(errors);
      });
  };
};