import * as ActionType from "./constant";
import { manageUser } from "../../../../../../services/QuanLyNguoiDung";
export const actFetchCourseApprovedWithUser = (taiKhoan) => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actCourseApprovedWithUserReq);
      const res = await manageUser.renderCoursesApprovedWithUser(taiKhoan);
      //success
      dispatch(actCourseApprovedWithUserSuccess(res.data));
    } catch (err) {
      dispatch(actCourseApprovedWithUserFailed(err));
    }
  };
};

const actCourseApprovedWithUserReq = () => {
  return {
    type: ActionType.COURSES_APPROVED_WITH_USER_REQ,
  };
};

const actCourseApprovedWithUserSuccess = (data) => {
  return {
    type: ActionType.COURSES_APPROVED_WITH_USER_SUCCESS,
    payload: data,
  };
};

const actCourseApprovedWithUserFailed = (data) => {
  return {
    type: ActionType.COURSES_APPROVED_WITH_USER_FAIL,
    payload: data,
  };
};
