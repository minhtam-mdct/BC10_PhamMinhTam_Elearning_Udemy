import { CANCELCART_ACTION } from "./constants";
import { manageCourse } from "../QuanLyKhoaHoc";
import { actFetchCourseApprovedWithUser } from "../../Screens/AdminTemplate/Students/view_approve/modules/CoursesApproved/action";
import { actFetchCourseNotApprovedYetWithUser } from "../../Screens/AdminTemplate/Students/view_approve/modules/CoursesNotApprovedWithUser/action";
import { actFetchUserApprovedWithCourse } from "../../Screens/AdminTemplate/Courses/view_approve/modules/UsersApproved/action";
import { actFetchUserNotApprovedYetWithCourse } from "../../Screens/AdminTemplate/Courses/view_approve/modules/UsersNotApprovedWithCourse/action";
export const cancelCartAction = (infoCancelCourse) => {
  return async (dispatch) => {
    try {
      const res = await manageCourse.cancelCourse(infoCancelCourse);

      let idUser = { taiKhoan: infoCancelCourse.taiKhoan };
      dispatch({
        type: CANCELCART_ACTION,
        cancelCourseInfo: res.data,
      });

      alert(res.data);

      dispatch(actFetchCourseNotApprovedYetWithUser(idUser));
      dispatch(actFetchCourseApprovedWithUser(idUser));
      console.log(res);
    } catch (res) {
      alert(res);
    }
  };
};

export const cancelUserCartAction = (infoCancelCourse) => {
  return async (dispatch) => {
    try {
      const res = await manageCourse.cancelCourse(infoCancelCourse);
      let idCourse = { maKhoaHoc: infoCancelCourse.maKhoaHoc };

      dispatch({
        type: CANCELCART_ACTION,
        cancelCourseInfo: res.data,
      });

      alert(res.data);
      dispatch(actFetchUserNotApprovedYetWithCourse(idCourse));
      dispatch(actFetchUserApprovedWithCourse(idCourse));
    } catch (res) {
      alert(res);
    }
  };
};
