import { manageCourse } from "../../../../../services/QuanLyKhoaHoc";
import { ADD_COURSE_ACTION } from "./constant";
import { actFetchCourseData } from "../../modules/action";

export const addCourseAction = (infoCourse, keyWord, keyPad) => {
  return async (dispatch) => {
    try {
      const res = await manageCourse.addCourse(infoCourse);
      if (res.status === 200) {
        dispatch({
          type: ADD_COURSE_ACTION,
          infoSignup: res.data,
        });
        alert("Succes");
        dispatch(actFetchCourseData(keyWord, keyPad));
      }
    } catch (err) {
      alert(err);
    }
  };
};
