import * as ActionType from "./constants";
import { manageCourse } from "../../../../services/QuanLyKhoaHoc";
// import api from "./../../../../utils/apiUtils";

export const actFetchDetailCourse = (id) => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actDetailCourseRequest());

      //success
      const res = await manageCourse.getDetailCourse(id);
      dispatch(actDetailCourseSuccess(res.data));
    } catch (err) {
      //failed
      dispatch(actDetailCourseFailed(err));
    }
  };
};

const actDetailCourseRequest = () => {
  return {
    type: ActionType.DETAIL_COURSE_REQUEST,
  };
};

const actDetailCourseSuccess = (data) => {
  return {
    type: ActionType.DETAIL_COURSE_SUCCESS,
    payload: data,
  };
};

const actDetailCourseFailed = (data) => {
  return {
    type: ActionType.DETAIL_COURSE_FAILED,
    payload: data,
  };
};
