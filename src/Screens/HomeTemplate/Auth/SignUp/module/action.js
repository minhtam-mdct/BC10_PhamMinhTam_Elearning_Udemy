import { manageUser } from "../../../../../services/QuanLyNguoiDung";
import { SIGNUP_ACTION } from "./constant";

export const signupAction = (infoSignup) => {
  return async (dispatch) => {
    try {
      const res = await manageUser.signup(infoSignup);
      if (res.status === 200) {
        dispatch({
          type: SIGNUP_ACTION,
          infoSignup: res.data,
        });
        alert("SignUp Success, please go to Login");
      }
      console.log(res);
    } catch (res) {
      console.log(res);
      alert(res);
    }
  };
};
