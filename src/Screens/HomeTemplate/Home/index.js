import React, { Component } from "react";
import Banner from "../Banner";
import Course from "../Course";
import AllCourse from "../AllCourse";
import HotCategories from "../hotCategories";
import Feature from "../Feature";
import StartTeaching from "../Advertisement/StartTeaching";
import Trusted from "../Advertisement/Trusted";
import UdemyBusiness from "../Advertisement/UdemyBusiness";
import GetAboutUdemy from "../Advertisement/GetAboutUdemy";
import { connect } from "react-redux";
import { getCourseInCartAction } from "../../../services/moduleCourseNotApprovedYet/action";
class HomePage extends Component {
  componentDidMount() {
    this.props.getCourseInCart();
  }
  render() {
    return (
      <div>
        <Banner />
        <div className="mt-20"></div>
        <Course />
        <div className="mt-20"></div>
        <div className="flex container">
          <div className="flex ml-2 w-1/3 items-center">
            <div className="mr-2">
              <div className="w-11 h-11 bg-gray-400 rounded-full items-center">
                <span className="mt-3 ml-3 fa fa-play"></span>
              </div>
            </div>
            <div className="flex-1 items-center">
              <span className="text-base font-bold leading-3">
                Learn in-demand skills with over 155,000 video courses
              </span>
            </div>
          </div>
          <div className="flex ml-2 w-1/3 items-center">
            <div className="mr-2">
              <div className="w-11 h-11 bg-gray-400 rounded-full items-center">
                <span className="mt-3 ml-3 fa fa-star"></span>
              </div>
            </div>
            <div className="flex-1 items-center">
              <span className="text-base font-bold leading-3">
                Choose courses taught by real-world experts
              </span>
            </div>
          </div>
          <div className="flex ml-3 w-1/3 items-center">
            <div className="mr-2">
              <div className="w-11 h-11 bg-gray-400 rounded-full items-center">
                <span className="mt-3 ml-3 fa fa-infinity"></span>
              </div>
            </div>
            <div className="flex-1 items-center">
              <span className="text-base font-bold leading-3">
                Learn at your own pace, with lifetime access on mobile and
                desktop
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20"></div>
        <AllCourse />
        <div className="mt-20"></div>
        <HotCategories />
        <div className="mt-20"></div>
        <Feature />
        <div className="mt-20"></div>
        <StartTeaching />
        <div className="mt-20"></div>
        <Trusted />
        <div className="mt-20"></div>
        <UdemyBusiness />
        <div className="mt-20"></div>
        <GetAboutUdemy />
        <div className="mt-20"></div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCourseInCart: () => {
      dispatch(getCourseInCartAction());
    },
  };
};
export default connect(null, mapDispatchToProps)(HomePage);
