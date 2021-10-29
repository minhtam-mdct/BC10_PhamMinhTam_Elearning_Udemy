import { manageCourse } from "../../../../../services/QuanLyKhoaHoc";
import { EDIT_COURSE_ACTION } from "./constant";
import { actFetchCourseData } from "../../modules/action";

export const editCourseAction = (infoEditCourse, keyCourse, keyPad) => {
  return async (dispatch) => {
    try {
      const res = await manageCourse.editCourse(infoEditCourse);
      if (res.status === 200) {
        dispatch({
          type: EDIT_COURSE_ACTION,
          infoSignup: res.data,
        });
        alert("Success");
        dispatch(actFetchCourseData(keyCourse, keyPad));
      }
    } catch (err) {
      alert(err);
    }
  };
};
