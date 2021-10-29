import { EDIT_USER_ACTION } from "./constant";
let user = {};

const stateDefault = {
  userEdited: user,
};
export const EditUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case EDIT_USER_ACTION: {
      const { userEdited } = action;

      return { ...state, userEdited };
    }
    default:
      return { ...state };
  }
};
