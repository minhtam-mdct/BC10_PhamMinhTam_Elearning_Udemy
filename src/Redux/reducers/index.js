import { combineReducers } from "redux";
import listCourseReducer from "../../Screens/HomeTemplate/Course/CourseItems/modules/reducer";
import allCourseReducer from "../../Screens/HomeTemplate/AllCourse/module/reducer";
import detailCourseReducer from "../../Screens/HomeTemplate/DetailCourse/module/reducer";
import { QuanLyUserReducer } from "../../Screens/HomeTemplate/Auth/Login/module/reducer";
import { SignUpReducer } from "../../Screens/HomeTemplate/Auth/SignUp/module/reducer";
import { addCourseToCartReducer } from "../../services/moduleAddToCart/reducer";
import courseInCartReducer from "../../services/moduleCourseNotApprovedYet/reducer";
import { cancelCourseReducer } from "../../services/moduleCancelCourse/reducer";
import { AdminReducer } from "../../Screens/AdminTemplate/AuthAdmin/modules/reducer";
import listUsersReducer from "../../Screens/AdminTemplate/Students/modules/reducer";
import listCourseNotApprovedYetWithUser from "../../Screens/AdminTemplate/Students/view_approve/modules/CoursesNotApprovedWithUser/reducer";
import listCourseApprovedWithUser from "../../Screens/AdminTemplate/Students/view_approve/modules/CoursesApproved/reducer";
import { approveCourseReducer } from "../../services/Approved/reducer";
import { EditUserReducer } from "../../Screens/AdminTemplate/Students/editUser/modules/reducer";
import { DeleteUserReducer } from "../../Screens/AdminTemplate/Students/deleteUser/reducer";
import { AddUserReducer } from "../../Screens/AdminTemplate/Students/addUser/module/reducer";
import listCoursesDataReducer from "../../Screens/AdminTemplate/Courses/modules/reducer";
import listUserNotApprovedYetWithCourseReducer from "../../Screens/AdminTemplate/Courses/view_approve/modules/UsersNotApprovedWithCourse/reducer";
import listUserApprovedWithCourse from "../../Screens/AdminTemplate/Courses/view_approve/modules/UsersApproved/reducer";
import { deleteCourseReducer } from "../../Screens/AdminTemplate/Courses/deleteCourse/reducer";
import { addCourseReducer } from "../../Screens/AdminTemplate/Courses/addCourse/module/reducer";
const rootReducer = combineReducers({
  listCourseReducer,
  allCourseReducer,
  detailCourseReducer,
  QuanLyUserReducer,
  SignUpReducer,
  addCourseToCartReducer,
  courseInCartReducer,
  cancelCourseReducer,
  AdminReducer,
  listUsersReducer,
  listCourseNotApprovedYetWithUser,
  listCourseApprovedWithUser,
  approveCourseReducer,
  EditUserReducer,
  DeleteUserReducer,
  AddUserReducer,
  listCoursesDataReducer,
  listUserNotApprovedYetWithCourseReducer,
  listUserApprovedWithCourse,
  deleteCourseReducer,
  addCourseReducer,
});

export default rootReducer;
