import { ADDCART_ACTION } from "./constants";
let course = {};

const stateDefault = {
  courseToCart: course,
};
export const addCourseToCartReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADDCART_ACTION: {
      const { addCourseInfo } = action;
      return { ...state, courseToCart: addCourseInfo };
    }
    default:
      return { ...state };
  }
};
