import { baseService } from "./baseServices";

export class QuanLyKhoaHoc extends baseService {
  constructor() {
    super();
  }
  getAllCourse = () => {
    return this.get(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09`);
  };
  getCoursesWithTypeOfCourse = (id) => {
    return this.get(
      `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP09`
    );
  };
  getDetailCourse = (id) => {
    return this.get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`);
  };
  getCourseToCart = (addCourseInfo) => {
    return this.post(`api/QuanLyKhoaHoc/DangKyKhoaHoc`, addCourseInfo);
  };
  cancelCourse = (infoCancelCourse) => {
    return this.post(`api/QuanLyKhoaHoc/HuyGhiDanh`, infoCancelCourse);
  };
  approveCourse = (info) => {
    return this.postAdmin(`api/QuanLyKhoaHoc/GhiDanhKhoaHoc`, info);
  };
  getCoursesData = (keyWord, keyPad) => {
    return this.getAdmin(
      `api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?${keyWord}page=${keyPad}&pageSize=5&MaNhom=GP09`
    );
  };
  editCourse = (editCourse) => {
    return this.postAdmin(`api/QuanLyKhoaHoc/CapNhatKhoaHocUpload`, editCourse);
  };
  deleteCourse = (maKhoaHoc) => {
    return this.deleteAdmin(
      `api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`
    );
  };
  addCourse = (info) => {
    return this.postAdmin(`api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh`, info);
  };
}
export const manageCourse = new QuanLyKhoaHoc();
