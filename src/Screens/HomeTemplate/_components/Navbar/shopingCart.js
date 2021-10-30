import React, { Component, Fragment } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import "../../_components/Style/shopingCart.css";
import Loader from "../../../../Components/Loader";
import { cancelCartAction } from "../../../../services/moduleCancelCourse/action";
import { getCourseInCartAction } from "../../../../services/moduleCourseNotApprovedYet/action";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

class ShopingCart extends Component {
  handleContentCart = () => {
    if (localStorage.getItem("USER_LOGIN")) {
      const { loading, courseInCart } = this.props;
      if (loading) return <Loader />;
      if (courseInCart) {
        const khoaHoc = [];
        khoaHoc.push(courseInCart.chiTietKhoaHocGhiDanh);

        return khoaHoc.map((course) => {
          if (course.length !== 0) {
            return course.map((chiTiet) => {
              return (
                <div className="border-b-2 itemCart">
                  <NavLink
                    className="cartContent text-left"
                    to={`/detail/${chiTiet.maKhoaHoc}`}
                  >
                    {chiTiet.tenKhoaHoc}
                  </NavLink>
                  <button
                    className="cancelBtn"
                    onClick={() => {
                      const infoCancelCourse = {
                        maKhoaHoc: chiTiet.maKhoaHoc,
                        taiKhoan: this.props.dataUser.taiKhoan,
                      };
                      console.log(infoCancelCourse);
                      this.props.cancelCourse(infoCancelCourse);
                      alert("Hủy thành công");
                      this.props.getCourseInCart();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              );
            });
          } else {
            return (
              <Fragment>
                <div className="mb-3">
                  <span className="empty-cart text-base font-medium">
                    Your cart is empty.
                  </span>
                </div>

                <a className="goShopping text-center">
                  <span className="text-normal font-bold">Keep shopping</span>
                </a>
              </Fragment>
            );
          }
        });
      }
    } else {
      return (
        <Fragment className="text-center">
          <div className="mb-3">
            <span className="empty-cart text-base font-medium">
              Please Login to add your Courses
            </span>
          </div>

          <a href="/login" className="goShopping">
            <span className="text-normal font-bold">Login</span>
          </a>
        </Fragment>
      );
    }
  };

  render() {
    return (
      <div className="poper-hover">
        <button className="w-16 h-16 mt-1 flex items-center">
          <ShoppingCartOutlined className="text-2xl mx-auto" />
        </button>
        <div className="mt-2">
          <div className="content content-border bg-white">
            <div className="containCart">{this.handleContentCart()}</div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    cancelCourse: (infoCancelCourse) => {
      dispatch(cancelCartAction(infoCancelCourse));
    },
    getCourseInCart: () => {
      dispatch(getCourseInCartAction());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.courseInCartReducer.loading,
    courseInCart: state.courseInCartReducer.data,
    dataUser: state.QuanLyUserReducer.userLogin,
    cancel: state.cancelCourseReducer.cancelCourse,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopingCart);
