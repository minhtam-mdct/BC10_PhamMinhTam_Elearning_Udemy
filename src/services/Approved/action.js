import { manageCourse } from "../QuanLyKhoaHoc";
import { APPROVED_ACTION } from "./constant";
import { actFetchCourseApprovedWithUser } from "../../Screens/AdminTemplate/Students/view_approve/modules/CoursesApproved/action";
import { actFetchCourseNotApprovedYetWithUser } from "../../Screens/AdminTemplate/Students/view_approve/modules/CoursesNotApprovedWithUser/action";
import { actFetchUserApprovedWithCourse } from "../../Screens/AdminTemplate/Courses/view_approve/modules/UsersApproved/action";
import { actFetchUserNotApprovedYetWithCourse } from "../../Screens/AdminTemplate/Courses/view_approve/modules/UsersNotApprovedWithCourse/action";
export const approvedAction = (info) => {
  return async (dispatch) => {
    try {
      let idCourse = { maKhoaHoc: info.maKhoaHoc };
      let idUser = { taiKhoan: info.taiKhoan };
      const res = await manageCourse.approveCourse(info);

      dispatch({
        type: APPROVED_ACTION,
        infoLogin: res.data,
      });
      alert(res.data);
      // dispatch(actFetchUserNotApprovedYetWithCourse(idCourse));
      // dispatch(actFetchUserApprovedWithCourse(idCourse));
      dispatch(actFetchCourseNotApprovedYetWithUser(idUser));
      dispatch(actFetchCourseApprovedWithUser(idUser));
      console.log(res);
    } catch (res) {
      alert(res);
    }
  };
};
export const approvedUserAction = (info) => {
  return async (dispatch) => {
    try {
      let idCourse = { maKhoaHoc: info.maKhoaHoc };

      const res = await manageCourse.approveCourse(info);

      dispatch({
        type: APPROVED_ACTION,
        infoLogin: res.data,
      });
      alert(res.data);
      dispatch(actFetchUserNotApprovedYetWithCourse(idCourse));
      dispatch(actFetchUserApprovedWithCourse(idCourse));

      console.log(res);
    } catch (res) {
      alert(res);
    }
  };
};
