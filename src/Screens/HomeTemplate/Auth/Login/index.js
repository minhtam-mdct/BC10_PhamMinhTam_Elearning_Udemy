import React from "react";
import "../../_components/Style/auth.css";
import MiniFooter from "../components/miniFooter";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { loginAction } from "./module/action";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function LogIn(props) {
  const dispatch = useDispatch();

  const { userLogin } = useSelector((state) => state.QuanLyUserReducer);
  console.log("userLogin", userLogin);

  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },
    onSubmit: (values) => {
      const action = loginAction(values);
      dispatch(action);
    },
  });
  if (localStorage.getItem("USER_LOGIN")) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="flex">
        <form onSubmit={formik.handleSubmit} className="my-6 mx-auto auth">
          <h3 className="text-base font-bold p-6 pr-16 title">
            Log In to Your Udemy Account!
          </h3>
          <div className="p-6 pr-16 pb-2 content-auth">
            <div>
              <a className="flex">
                <i className="fab fa-facebook"></i>
                Continue with Facebook
              </a>
            </div>
            <div>
              <a className="flex">
                <div className="w-12 flex">
                  <img
                    className="mx-auto"
                    src="https://img.icons8.com/color/24/000000/google-logo.png"
                    alt="logoGG"
                  />
                </div>
                Continue with Google
              </a>
            </div>
            <div>
              <a className="flex">
                <i className="fab fa-apple"></i>
                Continue with Apple
              </a>
            </div>
          </div>
          <div className="flex-1 px-6 pr-16 relative">
            <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
              <div className="px-2">
                <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                  <i className="fa fa-user text-black"></i>
                </div>
              </div>
              <input
                name="taiKhoan"
                onChange={formik.handleChange}
                className="w-11/12 py-1 text-gray-700 outline-none text-base"
                type="text"
                placeholder="ID Account"
              />
            </div>

            <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
              <div className="px-2">
                <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                  <i className="fa fa-lock text-black"></i>
                </div>
              </div>
              <input
                name="matKhau"
                onChange={formik.handleChange}
                className="w-11/12 py-1 text-gray-700 outline-none text-base"
                type="password"
                placeholder="Password"
              />
            </div>

            <button
              type="submit"
              className="cart-btn w-full h-14 text-base font-bold"
            >
              Log In
            </button>
            <div className="flex my-3">
              <span className="mx-auto text-base">
                or<a className="findPW"> Forgot Password</a>
              </span>
            </div>
            <div className="flex mt-7">
              <span className="mx-auto text-sm">
                Don't have an account?{" "}
                <NavLink
                  activeClassName="active"
                  to="/signup"
                  className="nav-link findPW hover:underline font-bold inline"
                >
                  Sign Up
                </NavLink>
              </span>
            </div>
            <div className="text-center mt-2">
              <a className="findPW text-sm font-bold">
                Log in with your organization
              </a>
            </div>
          </div>
        </form>
      </div>
      <MiniFooter />
    </div>
  );
}
