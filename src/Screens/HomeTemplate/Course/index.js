import React, { Component } from "react";
import { Tabs } from "antd";
import { connect } from "react-redux";
import Frontend from "./CourseItems/Items/frontend";
import BackEnd from "./CourseItems/Items/backend";
import FullStack from "./CourseItems/Items/fullstack";
import Mobile from "./CourseItems/Items/mobile";
import Design from "./CourseItems/Items/design";
import Mindset from "./CourseItems/Items/mindset";
import { actFetchListCourse } from "./CourseItems/modules/actions";
import "../../HomeTemplate/_components/Style/tabsAntd.css";

const { TabPane } = Tabs;

class Course extends Component {
  componentDidMount(key) {
    key = "FrontEnd";
    const id = key;
    this.props.fetchData(id);
  }
  callback = (key) => {
    const id = key;
    this.props.fetchData(id);
  };
  render() {
    return (
      <div className="container">
        <h1 className=" font-serif text-4xl font-bold">
          A broad selection of courses
        </h1>
        <h6 className=" text-xl font-normal">
          Choose from 155,000 online video courses with new additions published
          every month
        </h6>
        <Tabs defaultActiveKey="FrontEnd" onChange={this.callback}>
          <TabPane tab="Front End" key="FrontEnd">
            <Frontend />
          </TabPane>
          <TabPane tab="Back End" key="BackEnd">
            <BackEnd />
          </TabPane>
          <TabPane tab="Full Stack" key="FullStack">
            <FullStack />
          </TabPane>
          <TabPane tab="Mobile" key="DiDong">
            <Mobile />
          </TabPane>
          <TabPane tab="Design" key="Design">
            <Design />
          </TabPane>
          <TabPane tab="Mindset" key="TuDuy">
            <Mindset />
          </TabPane>
        </Tabs>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (id) => {
      dispatch(actFetchListCourse(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(Course);
