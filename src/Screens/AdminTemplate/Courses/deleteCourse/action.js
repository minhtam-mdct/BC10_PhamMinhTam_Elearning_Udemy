import { manageCourse } from "../../../../services/QuanLyKhoaHoc";
import { DELETE_COURSE_ACTION } from "./constant";
import { actFetchCourseData } from "../modules/action";

export const deleteCourseAction = (maKhoaHoc, keyWord, keyPad) => {
  return async (dispatch) => {
    try {
      const res = await manageCourse.deleteCourse(maKhoaHoc);
      dispatch({
        type: DELETE_COURSE_ACTION,
        infoDelete: res.data,
      });
      alert(res.data);
      dispatch(actFetchCourseData(keyWord, keyPad));
    } catch (res) {
      alert("Tài khoản đang có khóa học được ghi danh hoặc đã tạo khóa học");
    }
  };
};
