import * as ActionType from "./constant";
import { manageUser } from "../../../../../../services/QuanLyNguoiDung";
export const actFetchUserNotApprovedYetWithCourse = (maKhoaHoc) => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actUserNotApprovedYetWithCourseReq);
      const res = await manageUser.renderUsersNotApprovedYetWithCourse(
        maKhoaHoc
      );
      //success
      dispatch(actUserNotApprovedYetWithCourseSuccess(res.data));
    } catch (err) {
      dispatch(actUserNotApprovedYetWithCourseFailed(err));
    }
  };
};

const actUserNotApprovedYetWithCourseReq = () => {
  return {
    type: ActionType.USERS_NOT_APPROVED_YET_WITH_COURSE_REQ,
  };
};

const actUserNotApprovedYetWithCourseSuccess = (data) => {
  return {
    type: ActionType.USERS_NOT_APPROVED_YET_WITH_COURSE_SUCCESS,
    payload: data,
  };
};

const actUserNotApprovedYetWithCourseFailed = (data) => {
  return {
    type: ActionType.USERS_NOT_APPROVED_YET_WITH_COURSE_FAIL,
    payload: data,
  };
};
