import * as ActionType from "./constant";
// import axios from "axios";
import { manageCourse } from "../../../../services/QuanLyKhoaHoc";
// import api from "./../../../../utils/apiUtils";

export const actFetchAllCourse = () => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actAllCourseRequest());
      const res = await manageCourse.getAllCourse();
      //success
      dispatch(actAllCourseSuccess(res.data));
    } catch (err) {
      dispatch(actAllCourseFailed(err));
    }
  };
};

const actAllCourseRequest = () => {
  return {
    type: ActionType.ALL_COURSE_REQUEST,
  };
};

const actAllCourseSuccess = (data) => {
  return {
    type: ActionType.ALL_COURSE_SUCCESS,
    payload: data,
  };
};

const actAllCourseFailed = (data) => {
  return {
    type: ActionType.ALL_COURSE_FAILED,
    payload: data,
  };
};
