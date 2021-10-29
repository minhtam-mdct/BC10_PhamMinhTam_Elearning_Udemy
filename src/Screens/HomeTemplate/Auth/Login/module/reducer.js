import { TOKEN, USER_LOGIN } from "../../../../../utils/config";
import { LOGIN_ACTION } from "./constant";
let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: user,
};
export const QuanLyUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case LOGIN_ACTION: {
      const { infoLogin } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(infoLogin));
      localStorage.setItem(TOKEN, infoLogin.accessToken);
      return { ...state, userLogin: infoLogin };
    }
    default:
      return { ...state };
  }
};
