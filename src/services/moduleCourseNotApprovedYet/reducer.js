import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const courseInCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.COURSEINCART_REQ:
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };

    case ActionType.COURSEINCART_SUCCESS:
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };

    case ActionType.COURSEINCART_FAIL:
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };

    default:
      return { ...state };
  }
};

export default courseInCartReducer;
