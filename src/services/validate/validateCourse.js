import * as Yup from "yup";
export const CourseSchema = Yup.object().shape({
  maKhoaHoc: Yup.string()
    .min(3, "* Tối thiểu 3 ký tự *")
    .required("* Chưa nhập Mã khóa học *"),
  biDanh: Yup.string()
    .min(3, "* Tối thiểu 3 ký tự *")
    .required("* Chưa nhập bí danh *"),
  tenKhoaHoc: Yup.string()
    .min(2, "* Tên quá ngắn *")
    .required("* Chưa nhập tên *")
    .matches(
      /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ ,.'-+]+$/u,
      "Chỉ nhập chữ cái"
    ),
  luotXem: Yup.string()
    .required("* Chưa nhập lượt xem *")
    .matches(/^[0-9]+$/, "* Chỉ nhập số *"),
  danhGia: Yup.number()
    .min(0, "* Chỉ từ 0 - 5 *")
    .max(5, "* Chỉ từ 0 - 5 *")
    .required("* Chưa nhập đánh giá *"),
});
