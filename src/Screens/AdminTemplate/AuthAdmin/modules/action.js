import { manageUser } from "../../../../services/QuanLyNguoiDung";
import { ADMIN_LOGIN_ACTION } from "./constant";

export const loginAdminAction = (infoAdmin) => {
  return async (dispatch) => {
    try {
      const res = await manageUser.loginAdmin(infoAdmin);
      if (res.status === 200) {
        if (res.data.maLoaiNguoiDung === "GV") {
          dispatch({
            type: ADMIN_LOGIN_ACTION,
            infoAdmin: res.data,
          });
        } else {
          alert("You aren't an Admin");
        }
      }
    } catch (res) {
      alert(res);
    }
  };
};
