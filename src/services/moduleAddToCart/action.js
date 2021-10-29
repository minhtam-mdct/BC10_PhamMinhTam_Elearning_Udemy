import { ADDCART_ACTION } from "./constants";
import { manageCourse } from "../QuanLyKhoaHoc";
import { getCourseInCartAction } from "../moduleCourseNotApprovedYet/action";

export const addCartAction = (addCourseInfo) => {
  return async (dispatch) => {
    try {
      const res = await manageCourse.getCourseToCart(addCourseInfo);
      dispatch({
        type: ADDCART_ACTION,
        addCourseInfo: res.data,
      });
      alert(res.data);
      dispatch(getCourseInCartAction());
      console.log(res);
    } catch (res) {
      alert(res);
    }
  };
};
