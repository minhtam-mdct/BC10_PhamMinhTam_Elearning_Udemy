import { DELETE_COURSE_ACTION } from "./constant";
let course = {};

const stateDefault = {
  courseDeleted: course,
};
export const deleteCourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DELETE_COURSE_ACTION: {
      const { courseDeleted } = action;

      return { ...state, courseDeleted };
    }
    default:
      return { ...state };
  }
};
