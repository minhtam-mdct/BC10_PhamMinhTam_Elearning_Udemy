import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { actFetchUserApprovedWithCourse } from "./modules/UsersApproved/action";
import { actFetchUserNotApprovedYetWithCourse } from "./modules/UsersNotApprovedWithCourse/action";
import { approvedUserAction } from "../../../../services/Approved/action";
import { cancelUserCartAction } from "../../../../services/moduleCancelCourse/action";

export default function View_CourseApprove(props) {
  const dispatch = useDispatch();
  const dataUsersNotApprovedYet = useSelector(
    (state) => state.listUserNotApprovedYetWithCourseReducer.data
  );
  const dataUsersApproved = useSelector(
    (state) => state.listUserApprovedWithCourse.data
  );
  const { course } = props;
  let maKhoaHoc = { maKhoaHoc: course.maKhoaHoc };
  const [isModalVisible, setIsModalVisible] = useState(false);
  const renderUsersNotApprovedYetWithCourse = () => {
    if (dataUsersNotApprovedYet && dataUsersNotApprovedYet.length !== 0) {
      return dataUsersNotApprovedYet.map((users) => {
        const taiKhoan = users.taiKhoan;
        return (
          <li className="flex justify-between py-1">
            <div className="w-3/5">
              {taiKhoan} - {users.hoTen}
            </div>
            <div className="w-2/5 flex justify-end">
              <button
                className="border-2 font-semibold max-h-6 border-green-700 hover:bg-green-100 rounded mx-1"
                onClick={() => {
                  let infoCourse = {
                    maKhoaHoc: course.maKhoaHoc,
                    taiKhoan: users.taiKhoan,
                  };
                  dispatch(approvedUserAction(infoCourse));
                }}
              >
                Approve
              </button>
              <button
                className="border-2 font-semibold max-h-6 border-red-700 hover:bg-red-100 rounded mr-1"
                onClick={() => {
                  let infoCourse = {
                    maKhoaHoc: course.maKhoaHoc,
                    taiKhoan: users.taiKhoan,
                  };
                  if (window.confirm("Are you sure???")) {
                    dispatch(cancelUserCartAction(infoCourse));
                  }
                }}
              >
                Delete
              </button>
            </div>
          </li>
        );
      });
    } else {
      return <p>Empty</p>;
    }
  };
  const renderUsersApprovedWithCourse = () => {
    if (dataUsersApproved && dataUsersApproved.length !== 0) {
      return dataUsersApproved.map((usersApproved) => {
        return (
          <li className="flex justify-between py-1">
            <div className="w-3/5">
              {usersApproved.taiKhoan} - {usersApproved.hoTen}
            </div>
            <div className="w-2/5 flex justify-end">
              <button
                className="border-2 font-semibold max-h-6 border-red-700 hover:bg-red-100 rounded mr-1"
                onClick={() => {
                  let infoCourse = {
                    maKhoaHoc: course.maKhoaHoc,
                    taiKhoan: usersApproved.taiKhoan,
                  };

                  if (window.confirm("Are you sure???")) {
                    dispatch(cancelUserCartAction(infoCourse));
                  }
                }}
              >
                Delete
              </button>
            </div>
          </li>
        );
      });
    } else {
      return <p>Empty</p>;
    }
  };
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Fragment>
      <button
        className="btnAction border-2 border-blue-500 px-3 py-1 text-blue-500 hover:text-white hover:bg-blue-500 rounded"
        type="primary"
        onClick={() => {
          showModal();
          dispatch(actFetchUserNotApprovedYetWithCourse(maKhoaHoc));
          dispatch(actFetchUserApprovedWithCourse(maKhoaHoc));
        }}
      >
        Detail/Approve
      </button>
      <Modal
        title="Detail/Approve"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{ hidden: true }}
      >
        <div className=" max-h-72 overflow-y-scroll">
          <div className="flex justify-between">
            <div>
              <h1 className="text-lg font-bold">Info User</h1>
              <p className="font-semibold">
                Mã Khóa Học:{" "}
                <span className="font-normal">{course.maKhoaHoc}</span>
              </p>
              <p className="font-semibold">
                Bí Danh: <span className="font-normal">{course.biDanh}</span>
              </p>
              <p className="font-semibold">
                Tên Khóa Học:{" "}
                <span className="font-normal">{course.tenKhoaHoc}</span>
              </p>
              <p className="font-semibold">
                Mô Tả: <span className="font-normal">{course.moTa}</span>
              </p>
              <p className="font-semibold">
                Lượt Xem: <span className="font-normal">{course.luotXem}</span>
              </p>
              <p className="font-semibold">
                Ngày Tạo: <span className="font-normal">{course.ngayTao}</span>
              </p>
              <p className="font-semibold">
                Người Tạo:{" "}
                <span className="font-normal">{course.nguoiTao.hoTen}</span>
              </p>
              <p className="font-semibold">
                Danh Mục:{" "}
                <span className="font-normal">
                  {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                </span>
              </p>
            </div>
            <div className="justify-items-center">
              <img
                className="sticky m-2 top-0"
                style={{ width: 200, minWidth: 200 }}
                src={course.hinhAnh}
              />
            </div>
          </div>
          <div className="border-2 border-black"></div>
          <h1 className="text-lg font-bold">Users Not Approved Yet</h1>
          <ul>{renderUsersNotApprovedYetWithCourse()}</ul>
          <div className="border-2 border-black"></div>
          <h1 className="text-lg font-bold">Users Approved</h1>
          <ul>{renderUsersApprovedWithCourse()}</ul>
        </div>
      </Modal>
    </Fragment>
  );
}
