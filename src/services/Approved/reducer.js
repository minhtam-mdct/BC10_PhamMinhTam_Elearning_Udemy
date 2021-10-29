import { APPROVED_ACTION } from "./constant";
let course = {};

const stateDefault = {
  approveCourse: course,
};
export const approveCourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case APPROVED_ACTION: {
      const { approveCourse } = action;
      return { ...state, approveCourse };
    }
    default:
      return { ...state };
  }
};
