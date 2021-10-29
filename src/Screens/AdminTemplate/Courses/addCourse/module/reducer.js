import { ADD_COURSE_ACTION } from "./constant";
let course = {};

const stateDefault = {
  courseAdded: course,
};
export const addCourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADD_COURSE_ACTION: {
      const { courseAdded } = action;

      return { ...state, courseAdded };
    }
    default:
      return { ...state };
  }
};
