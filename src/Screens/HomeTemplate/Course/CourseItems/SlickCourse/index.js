import React, { Component } from "react";
import Slider from "react-slick";
import styleSlick from "../../../_components/Style/slickStyle.css";
import "../../../_components/Style/popHover.css";
import Loader from "../../../../../Components/Loader";
import { connect } from "react-redux";
import { Popover } from "antd";
import { Link } from "react-router-dom";
import { addCartAction } from "../../../../../services/moduleAddToCart/action";
import { getCourseInCartAction } from "../../../../../services/moduleCourseNotApprovedYet/action";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}
//Content Hover

class SlickCourse extends Component {
  renderListCourse() {
    const { loading, data } = this.props;
    if (loading) return <Loader />;
    if (data) {
      return data.map((course) => {
        console.log(course);
        return (
          <Popover
            className="px-2"
            content={
              <div className="w-64">
                <h1 className=" font-bold text-lg">{course.tenKhoaHoc}</h1>
                <i className="text-green-700 text-xs">
                  Updated {course.ngayTao}
                </i>
                <p>{course.moTa}</p>
                <button
                  onClick={() => {
                    if (localStorage.getItem("USER_LOGIN")) {
                      this.state = {
                        maKhoaHoc: course.maKhoaHoc,
                        taiKhoan: this.props.dataUser.taiKhoan,
                      };
                      console.log(this.state);
                      this.props.courseToCart(this.state);
                    } else {
                      alert("Please Login");
                      window.open("/login");
                    }
                  }}
                  className="cart-btn w-full h-10 font-extrabold"
                >
                  Add to cart
                </button>
              </div>
            }
          >
            <Link
              to={`/detail/${course.maKhoaHoc}`}
              className="px-2"
              key={course.maKhoaHoc}
              course={course}
            >
              <img
                className="w-60 h-36 bg-course mb-1"
                src={course.hinhAnh}
                alt={course.hinhAnh}
              />
              <h6>{course.tenKhoaHoc}</h6>
              <span className="text-gray-700">
                Creator: {course.nguoiTao.hoTen}
              </span>
              <br />
              <span className="text-gray-700">{course.luotXem} views</span>
            </Link>
          </Popover>
        );
      });
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: false,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>{this.renderListCourse()}</Slider>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    courseToCart: (values) => {
      dispatch(addCartAction(values));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.listCourseReducer.loading,
    data: state.listCourseReducer.data,
    dataUser: state.QuanLyUserReducer.userLogin,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SlickCourse);
