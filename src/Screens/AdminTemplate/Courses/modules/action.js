import * as ActionType from "./constants";
import { manageCourse } from "../../../../services/QuanLyKhoaHoc";
export const actFetchCourseData = (keyCourse, keyPag) => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actAllCoursesRequest);
      const res = await manageCourse.getCoursesData(keyCourse, keyPag);
      //success

      dispatch(actAllCoursesSuccess(res.data));
    } catch (err) {
      dispatch(actAllCoursesFailed(err));
    }
  };
};

const actAllCoursesRequest = () => {
  return {
    type: ActionType.LIST_COURSES_REQ,
  };
};

const actAllCoursesSuccess = (data) => {
  return {
    type: ActionType.LIST_COURSES_SUCCESS,
    payload: data,
  };
};

const actAllCoursesFailed = (data) => {
  return {
    type: ActionType.LIST_COURSES_FAILED,
    payload: data,
  };
};
