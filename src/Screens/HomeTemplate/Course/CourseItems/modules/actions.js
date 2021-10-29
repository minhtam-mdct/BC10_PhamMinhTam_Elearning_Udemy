import * as ActionType from "./constants";
import { manageCourse } from "../../../../../services/QuanLyKhoaHoc";
// import api from "./../../../../utils/apiUtils";

export const actFetchListCourse = (id) => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actListCourseRequest());

      //success
      const res = await manageCourse.getCoursesWithTypeOfCourse(id);
      dispatch(actListCourseSuccess(res.data));
    } catch (err) {
      //failed
      dispatch(actListCourseFailed(err));
    }
  };
};

const actListCourseRequest = () => {
  return {
    type: ActionType.LIST_COURSE_REQUEST,
  };
};

const actListCourseSuccess = (data) => {
  return {
    type: ActionType.LIST_COURSE_SUCCESS,
    payload: data,
  };
};

const actListCourseFailed = (data) => {
  return {
    type: ActionType.LIST_COURSE_FAILED,
    payload: data,
  };
};
