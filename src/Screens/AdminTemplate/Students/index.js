import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { actFetchUsersWithSearch } from "./modules/action";
import Loader from "../../../Components/Loader";
import ViewApprove from "./view_approve/view_approve";
import EditUser from "./editUser";
import { deleteUserAction } from "./deleteUser/action";
import AddUser from "./addUser";
import { Pagination } from "antd";

export default function Students(props) {
  const dispatch = useDispatch();
  const [keyUser, setKeyUser] = useState("");
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const keyWord = "";
    dispatch(actFetchUsersWithSearch(keyWord, current));
  }, []);
  const loading = useSelector((state) => state.listUsersReducer.loading);
  const data = useSelector((state) => state.listUsersReducer.data);

  const totalItems = () => {
    if (data) {
      return data.totalCount;
    }
  };
  const findUser = (e) => {
    if (e.target.value !== "") {
      let keyWord = `&tukhoa=${e.target.value}`;
      dispatch(actFetchUsersWithSearch(keyWord, current));
      setKeyUser(keyWord);
    } else {
      const empty = "";
      props.fectDataUsers(empty, current);
      setKeyUser(empty);
    }
  };
  const onChange = (page) => {
    dispatch(actFetchUsersWithSearch(keyUser, page));
    setCurrent(page);
  };
  function renderListUser() {
    if (loading) return <Loader />;
    if (data) {
      return data.items.map((users) => {
        return (
          <tr className="border-b-2 hover:bg-gray-300">
            <td>{users.hoTen}</td>
            <td>{users.email}</td>
            <td>{users.tenLoaiNguoiDung}</td>
            <td className="flex justify-center">
              <ViewApprove users={users} />
              <EditUser users={users} keyUser={keyUser} current={current} />
              <button
                className="btnAction border-2 border-red-500 px-3 py-1 text-red-500 hover:text-black hover:bg-red-500 rounded"
                onClick={() => {
                  let taiKhoan = users.taiKhoan;
                  if (window.confirm(`Delete ${users.hoTen}? Are you sure?`)) {
                    dispatch(deleteUserAction(taiKhoan, keyUser, current));
                  }
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
  }
  return (
    <div className="mx-4">
      <div className="mt-4 flex relative">
        <div className="w-1/2">
          <div className="shadow flex">
            <input
              onChange={findUser}
              className="w-full rounded p-2"
              type="text"
              placeholder="What is the username you want to find?"
            />
            <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="right-0 absolute">
          <AddUser keyUser={keyUser} current={current} />
        </div>
      </div>
      <div className="w-full items-center mt-3">
        <table className="w-full text-center relative">
          <thead>
            <tr>
              <th>Fullname</th>
              <th>Email</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <div className="my-4"></div>
          <tbody>{renderListUser()}</tbody>
        </table>
      </div>
      <div className="w-full flex items-center mt-3">
        <Pagination
          className="mx-auto my-4"
          current={current}
          pageSize={5}
          onChange={onChange}
          total={totalItems()}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
