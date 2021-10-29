import React, { Fragment, useState } from "react";
import { Modal } from "antd";
import { Field, ErrorMessage, Formik, Form } from "formik";
// import ErrorMessage from "../../../../services/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import * as Validate from "../../../../services/validate/validateCourse";
import { addCourseAction } from "../addCourse/module/action";

export default function AddCourse(props) {
  const dispatch = useDispatch();
  const creator = useSelector((state) => state.AdminReducer.adminLogin);
  const { keyUser, current } = props;
  const alertClass = `font-semibold italic text-red-700`;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    `https://cdn4.vectorstock.com/i/1000x1000/90/48/picture-icon-image-symbol-vector-20419048.jpg`
  );
  const validate = Validate.CourseSchema;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();
  const ngayTao = `${day}/${month + 1}/${year}`;

  return (
    <Fragment>
      <button
        className="btnAdd"
        onClick={() => {
          showModal();
        }}
      >
        Add Course
      </button>
      <Modal
        title="Add Course"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        afterClose={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        footer={null}
      >
        <Formik
          initialValues={{
            maKhoaHoc: new Date().getTime().toString(),
            biDanh: "",
            tenKhoaHoc: "",
            moTa: "",
            luotXem: 0,
            danhGia: 0,
            hinhAnh: null,
            maNhom: "GP09",
            ngayTao: ngayTao,
            maDanhMucKhoaHoc: "BackEnd",
            taiKhoanNguoiTao: creator.taiKhoan,
          }}
          validationSchema={validate}
          onSubmit={(values, actions) => {
            let formData = new FormData();
            for (let key in values) {
              if (key !== "hinhAnh") {
                formData.append(key, values[key]);
              } else {
                if (values.hinhAnh !== null) {
                  formData.append("File", values.hinhAnh, values.hinhAnh.name);
                } else {
                  alert("Please choose a picture");
                }
              }
            }
            dispatch(addCourseAction(formData, keyUser, current));

            handleOk();
            actions.resetForm();
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="flex-1 mt-4 px-4 pr-16 relative max-h-72 overflow-y-scroll">
              <h1>Mã Khóa Học:</h1>
              <div className="w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <Field
                  name="maKhoaHoc"
                  className="w-11/12 px-3 outline-none text-base"
                  type="text"
                  placeholder="Mã Khóa Học"
                />
              </div>
              <ErrorMessage name="maKhoaHoc">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Bí Danh:</h1>
              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <Field
                  name="biDanh"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="Bí Danh"
                />
              </div>
              <ErrorMessage name="biDanh">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Tên Khóa Học:</h1>
              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <Field
                  name="tenKhoaHoc"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="Tên Khóa Học"
                />
              </div>
              <ErrorMessage name="tenKhoaHoc">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Mô Tả</h1>
              <div className="bg-white w-auto h-36 mb-2 pr-2 flex items-center btn-search">
                <Field
                  as="textarea"
                  rows="5"
                  name="moTa"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="Mô Tả"
                />
              </div>
              <ErrorMessage name="moTa">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Lượt Xem:</h1>
              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <Field
                  name="luotXem"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="Lượt Xem"
                />
              </div>
              <ErrorMessage name="luotXem">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Đánh Giá:</h1>
              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <Field
                  name="danhGia"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base"
                  type="number"
                  min={0}
                  max={5}
                  placeholder="Đánh Giá"
                />
              </div>
              <ErrorMessage name="danhGia">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Hình ảnh khóa học:</h1>
              <input
                type="file"
                name="hinhAnh"
                onChange={async (e) => {
                  const file = e.target.files[0];
                  if (
                    file.type === "image/png" ||
                    file.type === "image/jpeg" ||
                    file.type === "image/jpg" ||
                    file.type === "image/gif"
                  ) {
                    await setFieldValue("hinhAnh", file);
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = (e) => {
                      setImgSrc(e.target.result);
                    };
                  }
                }}
              />
              <img width={200} src={imgSrc} />
              <h1>Danh Mục Khóa Học:</h1>
              <div className="block text-left w-full m-0 selectStyle">
                <Field as="select" name="maDanhMucKhoaHoc">
                  <option value="BackEnd">Lập trình Backend</option>
                  <option value="FrontEnd">Lập trình Front end</option>
                  <option value="FullStack">Lập trình Full Stack</option>
                  <option value="Design">Thiết kế Web</option>
                  <option value="DiDong">Lập trình di động</option>
                  <option value="TuDuy">Tư duy lập trình</option>
                </Field>
              </div>
              <h1>Tài khoản Người Tạo:</h1>
              <div className="bg-gray-300 w-auto h-14 mb-2 pr-2 flex items-center cursor-not-allowed btn-search">
                <Field
                  disabled
                  name="taiKhoanNguoiTao"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base cursor-not-allowed bg-gray-300"
                  type="text"
                  value={creator.taiKhoan}
                />
              </div>
              <h1>Ngày tạo: {ngayTao}</h1>
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
