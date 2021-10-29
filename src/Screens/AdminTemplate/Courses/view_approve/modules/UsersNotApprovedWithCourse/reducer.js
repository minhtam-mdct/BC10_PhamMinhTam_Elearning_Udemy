import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const listUserNotApprovedYetWithCourseReducer = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ActionType.USERS_NOT_APPROVED_YET_WITH_COURSE_REQ:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.USERS_NOT_APPROVED_YET_WITH_COURSE_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.USERS_NOT_APPROVED_YET_WITH_COURSE_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listUserNotApprovedYetWithCourseReducer;
