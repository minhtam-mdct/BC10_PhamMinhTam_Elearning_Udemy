import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { actFetchCourseData } from "./modules/action";
import { deleteCourseAction } from "./deleteCourse/action";
import Loader from "../../../Components/Loader";
import ViewCourseApprove from "./view_approve/view_approve";
import EditCourse from "./editCourse";
import AddCourse from "./addCourse";
import { Pagination } from "antd";

export default function Course(props) {
  const dispatch = useDispatch();

  const [keyCourse, setKeyCourse] = useState("");
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const keyWord = "";
    dispatch(actFetchCourseData(keyWord, current));
  }, []);
  const loading = useSelector((state) => state.listCoursesDataReducer.loading);
  const data = useSelector((state) => state.listCoursesDataReducer.data);
  const totalItems = () => {
    if (data) {
      return data.totalCount;
    }
  };
  const findCourse = (e) => {
    if (e.target.value !== "") {
      let keyWord = `tenKhoaHoc=${e.target.value}&`;
      dispatch(actFetchCourseData(keyWord, current));
      setKeyCourse(keyWord);
    } else {
      const empty = "";
      dispatch(actFetchCourseData(empty, current));
      setKeyCourse(empty);
    }
  };
  const onChange = (page) => {
    dispatch(actFetchCourseData(keyCourse, page));
    setCurrent(page);
  };
  function renderListCourses() {
    if (loading) return <Loader />;
    if (data) {
      return data.items.map((course) => {
        return (
          <tr className="border-b-2 hover:bg-gray-300">
            <td>{course.tenKhoaHoc}</td>
            <td>{course.nguoiTao.hoTen}</td>
            <td>{course.danhMucKhoaHoc.tenDanhMucKhoaHoc}</td>
            <td className="flex justify-center">
              <ViewCourseApprove course={course} />
              <EditCourse
                course={course}
                keyCourse={keyCourse}
                current={current}
              />
              <button
                className="btnAction border-2 border-red-500 px-3 py-1 text-red-500 hover:text-black hover:bg-red-500 rounded"
                onClick={() => {
                  let maKhoaHoc = course.maKhoaHoc.toString();

                  if (
                    window.confirm(`Delete ${course.tenKhoaHoc}? Are you sure?`)
                  ) {
                    dispatch(deleteCourseAction(maKhoaHoc, keyCourse, current));
                  }
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
  }
  return (
    <div className="mx-4">
      <div className="mt-4 flex relative">
        <div className="w-1/2">
          <div className="shadow flex">
            <input
              onChange={findCourse}
              className="w-full rounded p-2"
              type="text"
              placeholder="What is the course name you want to find?"
            />
            <button className="bg-white w-auto flex justify-end items-center text-blue-500 p-2 hover:text-blue-400">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="right-0 absolute">
          <AddCourse keyCourse={keyCourse} current={current} />
        </div>
      </div>
      <div className="w-full items-center mt-3">
        <table className="w-full text-center relative">
          <thead>
            <tr>
              <th>Course Name</th>
              <th>Creator</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <div className="my-4"></div>
          <tbody>{renderListCourses()}</tbody>
        </table>
      </div>
      <div className="w-full flex items-center mt-3">
        <Pagination
          className="mx-auto my-4"
          current={current}
          pageSize={5}
          onChange={onChange}
          total={totalItems()}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
}
