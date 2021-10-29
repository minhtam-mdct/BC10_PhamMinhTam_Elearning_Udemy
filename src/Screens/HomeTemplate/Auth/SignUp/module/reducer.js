import { SIGNUP_ACTION } from "./constant";
let user = {};

const stateDefault = {
  userSignUp: user,
};
export const SignUpReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SIGNUP_ACTION: {
      const { infoSignUp } = action;

      return { ...state, userSignUp: infoSignUp };
    }
    default:
      return { ...state };
  }
};
