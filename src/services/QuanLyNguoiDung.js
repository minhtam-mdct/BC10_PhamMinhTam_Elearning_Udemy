import { baseService } from "./baseServices";

export class QuanLyNguoiDung extends baseService {
  constructor() {
    super();
  }
  login = (infoLogin) => {
    return this.post(`/api/QuanLyNguoiDung/DangNhap`, infoLogin);
  };
  signup = (infoSignup) => {
    return this.post(`api/QuanLyNguoiDung/DangKy`, infoSignup);
  };
  getCourseInCart = () => {
    return this.post(`api/QuanLyNguoiDung/ThongTinNguoiDung`);
  };
  loginAdmin = (infoAdmin) => {
    return this.postAdmin(`/api/QuanLyNguoiDung/DangNhap`, infoAdmin);
  };
  renderListUsersWithSearch = (keyUser, keyPag) => {
    return this.get(
      `api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP09${keyUser}&page=${keyPag}&pageSize=5`
    );
  };
  renderCoursesNotApprovedYetWithUser = (taiKhoan) => {
    return this.postAdmin(
      `api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
      taiKhoan
    );
  };
  renderCoursesApprovedWithUser = (taiKhoan) => {
    return this.postAdmin(
      `api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
      taiKhoan
    );
  };
  renderUsersNotApprovedYetWithCourse = (maKhoaHoc) => {
    return this.postAdmin(
      `api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet`,
      maKhoaHoc
    );
  };
  renderUsersApprovedWithCourse = (maKhoaHoc) => {
    return this.postAdmin(
      `api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
      maKhoaHoc
    );
  };
  editUser = (infoEditUser) => {
    return this.putAdmin(
      `api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
      infoEditUser
    );
  };
  deleteUser = (taiKhoan) => {
    return this.deleteAdmin(
      `api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  };
  addUser = (infoUser) => {
    return this.postAdmin(`api/QuanLyNguoiDung/ThemNguoiDung`, infoUser);
  };
}

export const manageUser = new QuanLyNguoiDung();
