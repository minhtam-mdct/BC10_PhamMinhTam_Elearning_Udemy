import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Validate from "../../../../services/validate/index.js";
import { useDispatch } from "react-redux";
import { editUserAction } from "./modules/action.js";

export default function EditUser(props) {
  const dispatch = useDispatch();
  // const userEdited = useSelector((state) => state.EditUserReducer.userEdited);
  const { users, keyUser, current } = props;
  const alertClass = `font-semibold italic text-red-700`;
  const validate = Validate.SignupSchema;
  const [isModalVisible, setIsModalVisible] = useState(false);
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
        className="btnAction border-2 border-yellow-500 px-3 py-1 text-yellow-500 hover:text-black hover:bg-yellow-500 rounded"
        onClick={() => {
          showModal();
        }}
      >
        Edit
      </button>
      <Modal
        title="Edit User"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <Formik
          initialValues={{
            taiKhoan: users.taiKhoan,
            matKhau: users.matKhau,
            hoTen: users.hoTen,
            soDT: users.soDT,
            maLoaiNguoiDung: users.maLoaiNguoiDung,
            maNhom: "GP09",
            email: users.email,
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            dispatch(editUserAction(values, keyUser, current));
            handleOk();
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex-1 mt-4 px-4 pr-16 relative max-h-72 overflow-y-scroll">
              <div className="bg-gray-300 w-auto h-14 mb-2 pr-2 flex items-center cursor-not-allowed btn-search">
                <div className="px-2">
                  <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                    <i className="fa fa-user text-black"></i>
                  </div>
                </div>
                <Field
                  disabled
                  value={users.taiKhoan}
                  name="taiKhoan"
                  className="w-11/12 py-1 text-gray-700 outline-none text-base cursor-not-allowed bg-gray-300"
                  type="text"
                  placeholder="ID Account"
                />
              </div>
              <ErrorMessage name="taiKhoan">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>

              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <div className="px-2">
                  <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                    <i className="fa fa-id-card text-black"></i>
                  </div>
                </div>
                <Field
                  name="hoTen"
                  className="w-11/12 py-1 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <ErrorMessage name="hoTen">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <div className="px-2">
                  <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                    <i className="fa fa-phone text-black"></i>
                  </div>
                </div>
                <Field
                  name="soDT"
                  className="w-11/12 py-1 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <ErrorMessage name="soDT">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>

              <div className="block text-left w-full m-0 selectStyle">
                <Field as="select" name="maLoaiNguoiDung">
                  <option value="HV">Học Viên</option>
                  <option value="GV">Giáo Vụ</option>
                </Field>
              </div>

              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <div className="px-2">
                  <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                    <i className="fa fa-lock text-black"></i>
                  </div>
                </div>
                <Field
                  name="matKhau"
                  className="w-11/12 py-1 text-gray-700 outline-none text-base"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <ErrorMessage name="matKhau">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>

              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <div className="px-2">
                  <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                    <i className="fa fa-envelope text-black"></i>
                  </div>
                </div>
                <Field
                  name="email"
                  className="w-11/12 py-1 text-gray-700 outline-none text-base"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <ErrorMessage name="email">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>

              <button
                type="submit"
                className="cart-btn w-full h-14 text-base font-bold"
              >
                Save
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </Fragment>
  );
}
