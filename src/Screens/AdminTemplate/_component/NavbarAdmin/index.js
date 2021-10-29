import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logoAdmin from "../../../../Components/img/logo-admin.png";

class NavbarAdmin extends Component {
  render() {
    return (
      <nav className="navbar bg-gray-100 border-b-2 py-0">
        <NavLink to="/dashboard" className="text-3xl text-purple-700">
          <img src={logoAdmin} className="w-40" />
        </NavLink>
        <NavLink to="/students">Students</NavLink>
        <NavLink to="/courses">Courses</NavLink>
        <div className="poper-hover">
          <button className="flex font-bold h-16 w-auto text-center items-center">
            <span>Hello Admin: {this.props.infoAdmin.hoTen}</span>
          </button>
          <div className="">
            <div className="content w-full">
              <button
                onClick={() => {
                  localStorage.removeItem("UserAdmin");
                  window.location.reload();
                }}
                className="dark-btn w-full h-12 font-extrabold"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    infoAdmin: state.AdminReducer.adminLogin,
  };
};
export default connect(mapStateToProps, null)(NavbarAdmin);
