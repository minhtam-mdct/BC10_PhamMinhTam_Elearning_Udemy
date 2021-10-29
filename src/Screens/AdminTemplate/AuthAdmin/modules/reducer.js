import { TOKEN_ADMIN, USER_ADMIN } from "../../../../utils/configAdmin";
import { ADMIN_LOGIN_ACTION } from "./constant";
let admin = {};
if (localStorage.getItem(USER_ADMIN)) {
  admin = JSON.parse(localStorage.getItem(USER_ADMIN));
}
const stateDefault = {
  adminLogin: admin,
};
export const AdminReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_ACTION: {
      const { infoAdmin } = action;
      localStorage.setItem(USER_ADMIN, JSON.stringify(infoAdmin));
      localStorage.setItem(TOKEN_ADMIN, infoAdmin.accessToken);
      return { ...state, adminLogin: infoAdmin };
    }
    default:
      return { ...state };
  }
};
