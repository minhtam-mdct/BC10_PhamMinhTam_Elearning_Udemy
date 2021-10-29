import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import { Form, Field, ErrorMessage, Formik } from "formik";
import { useDispatch } from "react-redux";
import * as Validate from "../../../../services/validate/index.js";
import { addUserAction } from "./module/action.js";

export default function AddUser(props) {
  const dispatch = useDispatch();
  const { keyUser, current } = props;
  const alertClass = `font-semibold italic text-red-700`;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const validate = Validate.SignupSchema;

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
        className="btnAdd"
        onClick={() => {
          showModal();
        }}
      >
        Add Student
      </button>
      <Modal
        title="Add User"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        footer={null}
      >
        <Formik
          initialValues={{
            taiKhoan: new Date().getTime().toString(),
            matKhau: "",
            hoTen: "",
            soDT: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP09",
            email: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            dispatch(addUserAction(values, keyUser, current));

            handleOk();
          }}
        >
          {({ errors, touched }) => (
            <Form className="flex-1 mt-4 px-4 pr-16 relative max-h-72 overflow-y-scroll">
              <div className="w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <div className="px-2">
                  <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                    <i className="fa fa-user text-black"></i>
                  </div>
                </div>
                <Field
                  name="taiKhoan"
                  className="w-11/12 py-1 outline-none text-base"
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
                  <option className="text-lg" value="HV">
                    Học Viên
                  </option>
                  <option className="text-lg" value="GV">
                    Giáo Vụ
                  </option>
                </Field>
              </div>

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
                className="cart-btn w-full h-14 text-base font-bold z-10"
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
