import * as ActionType from "./constants";
import { manageUser } from "../QuanLyNguoiDung";

export const getCourseInCartAction = () => {
  return async (dispatch) => {
    try {
      dispatch(actCourseInCartActionReq());
      const res = await manageUser.getCourseInCart();
      dispatch(CourseInCartActionSuccess(res.data));
    } catch (res) {
      dispatch(actCourseInCartActionFail(res));
    }
  };
};
const actCourseInCartActionReq = () => {
  return {
    type: ActionType.COURSEINCART_REQ,
  };
};
const CourseInCartActionSuccess = (data) => {
  return {
    type: ActionType.COURSEINCART_SUCCESS,
    payload: data,
  };
};
const actCourseInCartActionFail = (error) => {
  return {
    type: ActionType.COURSEINCART_FAIL,
    payload: error,
  };
};
