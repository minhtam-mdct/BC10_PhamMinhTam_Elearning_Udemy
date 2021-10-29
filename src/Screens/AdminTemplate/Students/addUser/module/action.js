import { manageUser } from "../../../../../services/QuanLyNguoiDung";
import { ADD_USER_ACTION } from "./constant";
import { actFetchUsersWithSearch } from "../../modules/action";

export const addUserAction = (infoUser, keyWord, keyPad) => {
  return async (dispatch) => {
    try {
      const res = await manageUser.addUser(infoUser);
      if (res.status === 200) {
        dispatch({
          type: ADD_USER_ACTION,
          infoSignup: res.data,
        });
        alert("Succes");
        dispatch(actFetchUsersWithSearch(keyWord, keyPad));
      }
    } catch (err) {
      alert(err);
    }
  };
};
