import React, { Component } from "react";
import { connect } from "react-redux";
import Loader from "../../../Components/Loader";
import MiniFooter from "../Auth/components/miniFooter";
import { actFetchDetailCourse } from "./module/action";
import Page404 from "../../Page404";
import { addCartAction } from "../../../services/moduleAddToCart/action";
import { getCourseInCartAction } from "../../../services/moduleCourseNotApprovedYet/action";
class DetailCourse extends Component {
  addCourseToCart = () => {
    const maKhoaHoc = this.props.match.params.id;
    if (localStorage.getItem("USER_LOGIN")) {
      this.state = {
        taiKhoan: this.props.dataUser.taiKhoan,
        maKhoaHoc,
      };
      this.props.courseToCart(this.state);
      console.log(this.state);
    } else {
      alert("Please Login");
      window.open("/login");
    }
  };
  componentDidMount() {
    //Nhận lại id từ url
    const id = this.props.match.params.id;
    this.props.fetchDetailCourse(id);
    this.props.getCourseInCart();
  }
  render() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    console.log(data);
    if (data) {
      return (
        <div>
          <div className="flex bg-black p-4 items-center">
            <div className="text-white w-2/3 px-2">
              <h3 className="text-base text-purple-400 font-bold">
                Danh Mục Khóa Học:{" "}
                <span>{data && data.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
              </h3>
              <h1 className="text-white text-4xl font-bold">
                {data && data.tenKhoaHoc}
              </h1>
              <p className="text-lg m-0">{data && data.moTa}</p>
              <i className="my-4 animate-pulse text-base">
                This course has {data && data.luotXem} views and{" "}
                {data && data.soLuongHocVien} students.
              </i>
              <br />
              <span>Created by {data && data.nguoiTao.hoTen}</span>
              <br />
              <span>Last updated {data && data.ngayTao}</span>
            </div>
            <div className="flex-row w-1/3 bg-white border-solid border-2 border-white">
              <img
                src={data && data.hinhAnh}
                style={{ width: "100%" }}
                alt="demoCourse"
              />
              <div className="p-4">
                <p className="text-black font-bold text-3xl m-0 mb-3">$Free</p>
                <button
                  onClick={this.addCourseToCart}
                  className="cart-btn w-full h-14 font-extrabold"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <MiniFooter />
        </div>
      );
    } else {
      return <Page404 />;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    loading: state.detailCourseReducer.loading,
    data: state.detailCourseReducer.data,
    dataUser: state.QuanLyUserReducer.userLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDetailCourse: (id) => {
      dispatch(actFetchDetailCourse(id));
    },
    courseToCart: (values) => {
      dispatch(addCartAction(values));
    },
    getCourseInCart: () => {
      dispatch(getCourseInCartAction());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailCourse);
