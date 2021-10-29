import * as ActionType from "./constant";
import { manageUser } from "../../../../../../services/QuanLyNguoiDung";
export const actFetchCourseNotApprovedYetWithUser = (taiKhoan) => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actCourseNotApprovedYetWithUserReq);
      const res = await manageUser.renderCoursesNotApprovedYetWithUser(
        taiKhoan
      );
      //success
      dispatch(actCourseNotApprovedYetWithUserSuccess(res.data));
    } catch (err) {
      dispatch(actCourseNotApprovedYetWithUserFailed(err));
    }
  };
};

const actCourseNotApprovedYetWithUserReq = () => {
  return {
    type: ActionType.COURSES_NOT_APPROVED_YET_WITH_USER_REQ,
  };
};

const actCourseNotApprovedYetWithUserSuccess = (data) => {
  return {
    type: ActionType.COURSES_NOT_APPROVED_YET_WITH_USER_SUCCESS,
    payload: data,
  };
};

const actCourseNotApprovedYetWithUserFailed = (data) => {
  return {
    type: ActionType.COURSES_NOT_APPROVED_YET_WITH_USER_FAIL,
    payload: data,
  };
};
