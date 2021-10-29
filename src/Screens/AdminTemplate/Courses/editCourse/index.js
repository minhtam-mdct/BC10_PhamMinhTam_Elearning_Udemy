import React, { Fragment, useState } from "react";
import { Modal, DatePicker } from "antd";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Validate from "../../../../services/validate/validateCourse.js";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { editCourseAction } from "./modules/action";

export default function EditCourse(props) {
  const dispatch = useDispatch();

  const { course, keyCourse, current } = props;
  const alertClass = `font-semibold italic text-red-700`;
  const validate = Validate.CourseSchema;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
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
        title="Edit Course"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        <Formik
          initialValues={{
            maKhoaHoc: course.maKhoaHoc,
            biDanh: course.biDanh,
            tenKhoaHoc: course.tenKhoaHoc,
            moTa: course.moTa,
            luotXem: course.luotXem,
            danhGia: 0,
            hinhAnh: null,
            maNhom: "GP09",
            ngayTao: course.ngayTao,
            maDanhMucKhoaHoc: course.danhMucKhoaHoc.maDanhMucKhoahoc,
            taiKhoanNguoiTao: course.nguoiTao.taiKhoan,
          }}
          validationSchema={validate}
          onSubmit={(values) => {
            let formData = new FormData();
            for (let key in values) {
              if (key !== "hinhAnh") {
                formData.append(key, values[key]);
              } else {
                if (values.hinhAnh !== null) {
                  formData.append("File", values.hinhAnh, values.hinhAnh.name);
                }
              }
            }
            console.log(values);
            dispatch(editCourseAction(values, keyCourse, current));
            handleOk();
          }}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form className="flex-1 mt-4 px-4 pr-16 relative max-h-72 overflow-y-scroll">
              <h1>Mã Khóa Học:</h1>
              <div className="bg-gray-300 w-auto h-14 mb-2 pr-2 flex items-center cursor-not-allowed btn-search">
                <Field
                  disabled
                  name="maKhoaHoc"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base cursor-not-allowed bg-gray-300"
                  type="text"
                  value={course.maKhoaHoc}
                />
              </div>
              <h1>Bí Danh:</h1>
              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <Field
                  name="biDanh"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="bí danh"
                />
              </div>
              <ErrorMessage name="biDanh">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Tên Khóa Học</h1>
              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <Field
                  name="tenKhoaHoc"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="Course Name"
                />
              </div>
              <ErrorMessage name="tenKhoaHoc">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Mô Tả:</h1>
              <div className="bg-white w-auto h-36 mb-2 pr-2 flex items-center btn-search">
                <Field
                  as="textarea"
                  rows="5"
                  name="moTa"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base overflow-y-auto"
                  type="text"
                  placeholder="mô tả"
                />
              </div>
              <div className="flex">
                <div className="w-1/2">
                  <h1>Lượt Xem:</h1>
                  <div className="bg-white w-auto h-14 mr-2 mb-2 pr-2 flex items-center btn-search">
                    <Field
                      name="luotXem"
                      className="w-11/12 px-3 text-gray-700 outline-none text-base"
                      type="text"
                      placeholder="lượt xem"
                    />
                    <ErrorMessage name="luotXem">
                      {(msg) => <div className={alertClass}>{msg}</div>}
                    </ErrorMessage>
                  </div>
                </div>
                <div className="w-1/2">
                  <h1>Ngày Tạo:</h1>
                  <DatePicker
                    onChange={(value) => {
                      let ngayTao = moment(value);
                      setFieldValue("ngayTao", ngayTao);
                    }}
                    style={{
                      width: "100%",
                      height: "3.5rem",
                      border: "1px solid #1c1d1f",
                    }}
                    defaultValue={moment(course.ngayTao, dateFormatList[0])}
                    format={dateFormatList}
                  />
                </div>
              </div>
              <h1>Đánh Giá:</h1>
              <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                <Field
                  name="danhGia"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base"
                  type="text"
                  placeholder="Đánh Giá"
                />
              </div>
              <ErrorMessage name="danhGia">
                {(msg) => <div className={alertClass}>{msg}</div>}
              </ErrorMessage>
              <h1>Hình ảnh khóa học</h1>
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
              <img
                style={{ margin: "7px auto" }}
                width={200}
                src={imgSrc === "" ? course.hinhAnh : imgSrc}
              />
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
              <h1>Tài Khoản Người Tạo</h1>
              <div className="bg-gray-300 w-auto h-14 mb-2 pr-2 flex items-center cursor-not-allowed btn-search">
                <Field
                  disabled
                  name="taiKhoanNguoiTao"
                  className="w-11/12 px-3 text-gray-700 outline-none text-base cursor-not-allowed bg-gray-300"
                  type="text"
                  value={course.nguoiTao.taiKhoan}
                />
              </div>

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
