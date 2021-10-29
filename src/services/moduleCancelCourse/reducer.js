import { CANCELCART_ACTION } from "./constants";
let course = {};

const stateDefault = {
  cancelCourse: course,
};
export const cancelCourseReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case CANCELCART_ACTION: {
      const { infoCourseCancel } = action;
      return { ...state, cancelCourse: infoCourseCancel };
    }
    default:
      return { ...state };
  }
};
