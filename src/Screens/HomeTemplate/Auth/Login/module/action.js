import { manageUser } from "../../../../../services/QuanLyNguoiDung";
import { LOGIN_ACTION } from "./constant";

export const loginAction = (infoLogin) => {
  return async (dispatch) => {
    try {
      const res = await manageUser.login(infoLogin);
      if (res.status === 200) {
        dispatch({
          type: LOGIN_ACTION,
          infoLogin: res.data,
        });
      }

      console.log(res);
    } catch (res) {
      alert(res);
    }
  };
};
