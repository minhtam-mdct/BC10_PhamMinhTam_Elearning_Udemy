import * as ActionType from "./constants";
import { manageUser } from "../../../../services/QuanLyNguoiDung";
export const actFetchUsersWithSearch = (keyUser, keyPag) => {
  //Gọi axios trong action
  return async (dispatch) => {
    try {
      //request
      dispatch(actAllUsersRequest);
      const res = await manageUser.renderListUsersWithSearch(keyUser, keyPag);
      //success

      dispatch(actAllUsersSuccess(res.data));
    } catch (err) {
      dispatch(actAllUsersFailed(err));
    }
  };
};

const actAllUsersRequest = () => {
  return {
    type: ActionType.LIST_USERS_REQ,
  };
};

const actAllUsersSuccess = (data) => {
  return {
    type: ActionType.LIST_USERS_SUCCESS,
    payload: data,
  };
};

const actAllUsersFailed = (data) => {
  return {
    type: ActionType.LIST_USERS_FAILED,
    payload: data,
  };
};
