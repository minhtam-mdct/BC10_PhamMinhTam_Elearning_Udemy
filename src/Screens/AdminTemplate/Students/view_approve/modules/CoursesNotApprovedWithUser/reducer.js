import * as ActionType from "./constant";

let initialState = {
  loading: false,
  data: null,
  error: null,
};

const listCourseNotApprovedYetWithUser = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COURSES_NOT_APPROVED_YET_WITH_USER_REQ:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.COURSES_NOT_APPROVED_YET_WITH_USER_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.COURSES_NOT_APPROVED_YET_WITH_USER_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default listCourseNotApprovedYetWithUser;
