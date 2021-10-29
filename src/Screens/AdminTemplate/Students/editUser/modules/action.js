import { manageUser } from "../../../../../services/QuanLyNguoiDung";
import { EDIT_USER_ACTION } from "./constant";
import { actFetchUsersWithSearch } from "../../modules/action";

export const editUserAction = (infoEditUser, keyUser, keyPad) => {
  return async (dispatch) => {
    try {
      const res = await manageUser.editUser(infoEditUser);
      if (res.status === 200) {
        dispatch({
          type: EDIT_USER_ACTION,
          infoSignup: res.data,
        });
        alert("Succes");
        dispatch(actFetchUsersWithSearch(keyUser, keyPad));
      }
    } catch (res) {
      alert(res);
    }
  };
};
