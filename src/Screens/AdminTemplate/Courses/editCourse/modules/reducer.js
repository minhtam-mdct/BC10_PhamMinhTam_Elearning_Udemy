import { EDIT_COURSE_ACTION } from "./constant";
let course = {};

const stateDefault = {
  courseEdited: course,
};
export const EditCourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case EDIT_COURSE_ACTION: {
      const { courseEdited } = action;

      return { ...state, courseEdited };
    }
    default:
      return { ...state };
  }
};
