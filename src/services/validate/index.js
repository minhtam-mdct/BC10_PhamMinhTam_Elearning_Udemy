import * as Yup from "yup";
export const SignupSchema = Yup.object().shape({
  taiKhoan: Yup.string()
    .min(3, "* Tài Khoản tối thiểu 3 ký tự *")
    .required("* Chưa nhập Tài Khoản *"),
  matKhau: Yup.string()
    .min(5, "* Mật khẩu quá ngắn *")
    .required("* Chưa nhập mật khẩu *")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/,
      "* Mật khẩu ít nhất phải có 1 chữ cái viết hoa, số và ký tự đặc biệt"
    ),
  hoTen: Yup.string()
    .min(2, "* Tên quá ngắn *")
    .required("* Chưa nhập tên *")
    .matches(
      /^[a-zA-ZàáãạảăắằẳẵặâấầẩẫậèéẹẻẽêềếểễệđìíĩỉịòóõọỏôốồổỗộơớờởỡợùúũụủưứừửữựỳỵỷỹýÀÁÃẠẢĂẮẰẲẴẶÂẤẦẨẪẬÈÉẸẺẼÊỀẾỂỄỆĐÌÍĨỈỊÒÓÕỌỎÔỐỒỔỖỘƠỚỜỞỠỢÙÚŨỤỦƯỨỪỬỮỰỲỴỶỸÝ ,.'-]+$/u,
      "Chỉ nhập chữ cái"
    ),
  soDT: Yup.string()
    .min(9, "* Số điện thoại quá ngắn*")
    .max(14, "* Số điện thoại quá dài *")
    .required("* Chưa nhập số điện thoại *")
    .matches(/^[0-9]+$/, "* Chỉ nhập số *"),
  email: Yup.string()
    .email("* Email chưa hợp lệ *")
    .required("* Chưa nhập Email *"),
});
