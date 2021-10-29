import { manageUser } from "../../../../services/QuanLyNguoiDung";
import { DELETE_USER_ACTION } from "./constant";
import { actFetchUsersWithSearch } from "../modules/action";

export const deleteUserAction = (taiKhoan, keyWord, keyPad) => {
  return async (dispatch) => {
    try {
      const res = await manageUser.deleteUser(taiKhoan);
      dispatch({
        type: DELETE_USER_ACTION,
        infoDelete: res.data,
      });
      alert("Delete Success");
      dispatch(actFetchUsersWithSearch(keyWord, keyPad));
    } catch (res) {
      alert("Tài khoản đang có khóa học được ghi danh hoặc đã tạo khóa học");
    }
  };
};
