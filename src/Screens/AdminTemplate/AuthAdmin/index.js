import React from "react";

import { useFormik } from "formik";
import { loginAdminAction } from "./modules/action";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function AuthAdmin(props) {
  const dispatch = useDispatch();
  const { adminLogin } = useSelector((state) => state.AdminReducer);
  console.log("admin", adminLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = loginAdminAction(values);
      dispatch(action);
    },
  });
  if (localStorage.getItem("UserAdmin")) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="flex items-center h-screen justify-center text-center bg-gray-700">
      <form
        onSubmit={formik.handleSubmit}
        novalidate=""
        action=""
        className="flex flex-col max-w-xl p-12 rounded shadow-lg ng-untouched ng-pristine ng-valid bg-blue-900"
      >
        <label for="username" className="self-start text-xs font-semibold">
          Username
        </label>
        <input
          onChange={formik.handleChange}
          name="taiKhoan"
          id="username"
          type="text"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-coolGray-900"
        />
        <label for="password" className="self-start mt-3 text-xs font-semibold">
          Password
        </label>
        <input
          name="matKhau"
          onChange={formik.handleChange}
          id="password"
          type="password"
          className="flex items-center h-12 px-4 mt-2 rounded focus:outline-none focus:ring-2 dark:text-coolGray-900"
        />
        <button
          type="submit"
          className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-gray-500 hover:bg-gray-700 duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
}
