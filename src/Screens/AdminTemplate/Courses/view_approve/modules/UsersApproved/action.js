import * as ActionType from "./constant";
import { manageUser } from "../../../../../../services/QuanLyNguoiDung";
export const actFetchUserApprovedWithCourse = (maKhoaHoc) => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actUserApprovedWithCourseReq);
      const res = await manageUser.renderUsersApprovedWithCourse(maKhoaHoc);
      //success
      dispatch(actUserApprovedWithCourseSuccess(res.data));
    } catch (err) {
      dispatch(actUserApprovedWithCourseFailed(err));
    }
  };
};

const actUserApprovedWithCourseReq = () => {
  return {
    type: ActionType.USERS_APPROVED_WITH_COURSE_REQ,
  };
};

const actUserApprovedWithCourseSuccess = (data) => {
  return {
    type: ActionType.USERS_APPROVED_WITH_COURSE_SUCCESS,
    payload: data,
  };
};

const actUserApprovedWithCourseFailed = (data) => {
  return {
    type: ActionType.USERS_APPROVED_WITH_COURSE_FAIL,
    payload: data,
  };
};
