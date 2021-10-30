import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import { connect, useDispatch, useSelector } from "react-redux";
import { actFetchCourseNotApprovedYetWithUser } from "./modules/CoursesNotApprovedWithUser/action";
import { actFetchCourseApprovedWithUser } from "./modules/CoursesApproved/action";
import { approvedAction } from "../../../../services/Approved/action";
import { cancelCartAction } from "../../../../services/moduleCancelCourse/action";
import Loader from "../../../../Components/Loader";
export default function ViewApprove(props) {
  const loading = useSelector(
    (state) => state.listCourseNotApprovedYetWithUser.loading
  );
  const dataCoursesNotApprovedYet = useSelector(
    (state) => state.listCourseNotApprovedYetWithUser.data
  );
  const dataCourseApproved = useSelector(
    (state) => state.listCourseApprovedWithUser.data
  );
  const dispatch = useDispatch();
  let id = { taiKhoan: props.users.taiKhoan };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const renderCoursesNotApprovedYetWithUser = () => {
    if (loading) return <Loader />;
    if (dataCoursesNotApprovedYet && dataCoursesNotApprovedYet.length !== 0) {
      return dataCoursesNotApprovedYet.map((courses) => {
        return (
          <li className="flex justify-between py-1">
            <div className="w-3/5">
              {courses.maKhoaHoc} - {courses.tenKhoaHoc}
            </div>
            <div className="w-2/5 flex justify-end">
              <button
                className="border-2 font-semibold max-h-6 border-green-700 hover:bg-green-100 rounded mx-1"
                onClick={() => {
                  let infoCourse = {
                    maKhoaHoc: courses.maKhoaHoc,
                    taiKhoan: props.users.taiKhoan,
                  };
                  dispatch(approvedAction(infoCourse, id));
                }}
              >
                Approve
              </button>
              <button
                className="border-2 font-semibold max-h-6 border-red-700 hover:bg-red-100 rounded mr-1"
                onClick={() => {
                  let infoCourse = {
                    maKhoaHoc: courses.maKhoaHoc,
                    taiKhoan: props.users.taiKhoan,
                  };
                  if (window.confirm("Are you sure???")) {
                    dispatch(cancelCartAction(infoCourse, id));
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
  const renderCoursesApprovedWithUser = () => {
    if (dataCourseApproved && dataCourseApproved.length !== 0) {
      return dataCourseApproved.map((coursesApproved) => {
        return (
          <li className="flex justify-between py-1">
            <div className="w-3/5">
              {coursesApproved.maKhoaHoc} - {coursesApproved.tenKhoaHoc}
            </div>
            <div className="w-2/5 flex justify-end">
              <button
                className="border-2 font-semibold max-h-6 border-red-700 hover:bg-red-100 rounded mr-1"
                onClick={() => {
                  let infoCourse = {
                    maKhoaHoc: coursesApproved.maKhoaHoc,
                    taiKhoan: props.users.taiKhoan,
                  };
                  if (window.confirm("Are you sure???")) {
                    dispatch(cancelCartAction(infoCourse, id));
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
          dispatch(actFetchCourseNotApprovedYetWithUser(id));
          dispatch(actFetchCourseApprovedWithUser(id));
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
          <h1 className="text-lg font-bold">Info User</h1>
          <p className="font-semibold">
            Tài Khoản:{" "}
            <span className="font-normal">{props.users.taiKhoan}</span>
          </p>
          <p className="font-semibold">
            Họ Tên: <span className="font-normal">{props.users.hoTen}</span>
          </p>
          <p className="font-semibold">
            Email: <span className="font-normal">{props.users.email}</span>
          </p>
          <p className="font-semibold">
            Số Điện Thoại:{" "}
            <span className="font-normal">{props.users.soDT}</span>
          </p>
          <p className="font-semibold">
            Mã Loại Người Dùng:{" "}
            <span className="font-normal">{props.users.maLoaiNguoiDung}</span>
          </p>
          <p className="font-semibold">
            Tên Loại Người Dùng:{" "}
            <span className="font-normal">{props.users.tenLoaiNguoiDung}</span>
          </p>
          <div className="border-2 border-black"></div>
          <h1 className="text-lg font-bold">Courses Not Approved Yet</h1>
          <ul>{renderCoursesNotApprovedYetWithUser()}</ul>
          <div className="border-2 border-black"></div>
          <h1 className="text-lg font-bold">Courses Approved</h1>
          <ul>{renderCoursesApprovedWithUser()}</ul>
        </div>
      </Modal>
    </Fragment>
  );
}
