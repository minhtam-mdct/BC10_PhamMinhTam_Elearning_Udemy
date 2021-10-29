import { DELETE_USER_ACTION } from "./constant";
let user = {};

const stateDefault = {
  userDeleted: user,
};
export const DeleteUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DELETE_USER_ACTION: {
      const { userDeleted } = action;

      return { ...state, userDeleted };
    }
    default:
      return { ...state };
  }
};
