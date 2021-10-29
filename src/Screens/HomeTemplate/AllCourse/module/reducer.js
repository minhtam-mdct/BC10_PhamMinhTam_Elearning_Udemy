import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const allCourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ALL_COURSE_REQUEST:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.ALL_COURSE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.ALL_COURSE_FAILED:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default allCourseReducer;
