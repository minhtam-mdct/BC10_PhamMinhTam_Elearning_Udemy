import React, { Component } from "react";
import "../../_components/Style/auth.css";
import MiniFooter from "../components/miniFooter";
import { NavLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Validate from "../../../../services/validate";
import { signupAction } from "./module/action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const alertClass = `font-semibold italic text-red-700`;
const validate = Validate.SignupSchema;
class SignUp extends Component {
  signUpOK() {
    if (this.props.data.status === 200) {
      return <Redirect to="/login" />;
    }
  }
  render() {
    if (localStorage.getItem("USER_LOGIN")) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <div className="flex">
          <div className="my-6 mx-auto auth">
            <h3 className="text-base font-bold p-6 pr-16 title">
              Sign Up and Start Learning!
            </h3>
            <Formik
              initialValues={{
                taiKhoan: "",
                matKhau: "",
                hoTen: "",
                soDT: "",
                maNhom: "GP09",
                email: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                this.props.signUp(values);
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form className="flex-1 mt-4 px-4 pr-16 relative">
                  <div className="bg-white w-auto h-14 mb-2 pr-2 flex items-center btn-search">
                    <div className="px-2">
                      <div className="text-white focus:outline-none w-8 flex items-center justify-center">
                        <i className="fa fa-user text-black"></i>
                      </div>
                    </div>
                    <Field
                      name="taiKhoan"
                      className="w-11/12 py-1 text-gray-700 outline-none text-base"
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
                        <i className="fa fa-address-card text-black"></i>
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
                  <label class="inline-flex main">
                    <input type="checkbox" class="checkbox" />
                    <span class="checkbox-label"></span>
                    <span className="pl-3 leading-tight text-base">
                      Yes! I want to get the most out of Udemy by receiving
                      emails with exclusive deals, personal recommendations and
                      learning tips!
                    </span>
                  </label>
                  <button
                    type="submit"
                    className="cart-btn w-full h-14 text-base font-bold"
                  >
                    Sign Up
                  </button>
                  <div className="flex my-3">
                    <span className="mx-auto text-xxs mt-3">
                      By signing up, you agree to our{" "}
                      <a className="findPW">Terms of Use</a> and{" "}
                      <a className="findPW">Privacy Policy</a>.
                    </span>
                  </div>
                  <div className="line"></div>
                  <div className="flex mt-3">
                    <span className="mx-auto text-base">
                      Already have an account?{" "}
                      <NavLink
                        activeClassName="active"
                        to="/login"
                        className="nav-link findPW hover:underline font-bold inline"
                      >
                        Log In
                      </NavLink>
                    </span>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <MiniFooter />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (values) => {
      dispatch(signupAction(values));
    },
  };
};

export default connect(null, mapDispatchToProps)(SignUp);
