import { ADD_USER_ACTION } from "./constant";
let user = {};

const stateDefault = {
  userAdded: user,
};
export const AddUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADD_USER_ACTION: {
      const { userAdded } = action;

      return { ...state, userAdded };
    }
    default:
      return { ...state };
  }
};
