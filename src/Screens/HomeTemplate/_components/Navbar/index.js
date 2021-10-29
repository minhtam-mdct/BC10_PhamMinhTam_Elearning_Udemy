import React, { Component } from "react";
import { Modal } from "antd";
import { NavLink } from "react-router-dom";
import Dropdwn from "./dropdwn";
import MenuLanguage from "../MenuLanguage";
import "../Style/navBar.css";
import "../Style/searchStyle.css";
import { connect } from "react-redux";

import ShopingCart from "./shopingCart";

class Navbar extends Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  isLogin = () => {
    if (localStorage.getItem("USER_LOGIN")) {
      return (
        <div className="poper-hover px-2">
          <button className=" font-bold h-16 w-auto">
            Hello: {this.props.data.hoTen}
          </button>
          <div className="mt-2">
            <div className="content">
              <button
                onClick={() => {
                  localStorage.removeItem("USER_LOGIN");
                  window.location.reload();
                }}
                className="dark-btn px-4 w-full h-12 font-extrabold"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <button className="light-btn w-20 h-10 font-bold ml-2">
            <NavLink activeClassName="active" className="nav-link" to="/login">
              Log in
            </NavLink>
          </button>
          <button className="dark-btn w-20 h-10 font-bold ml-2">
            <NavLink activeClassName="active" className="nav-link" to="/signup">
              Sign up
            </NavLink>
          </button>
        </div>
      );
    }
  };
  render() {
    console.log(1);
    const { visible } = this.state;
    return (
      <div className="navBar">
        <nav className="flex items-center h-16 px-7">
          <NavLink to="/" className="items-center">
            <img
              className="w-24 h-9 my-3"
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            />
          </NavLink>
          <Dropdwn />

          <div className="flex-1 p-2 relative">
            <div className="bg-white h-11 pr-2 flex items-center rounded-full btn-search">
              <div className="px-2">
                <button className="text-white focus:outline-none w-8 flex items-center justify-center">
                  <box-icon name="search-alt-2"></box-icon>
                </button>
              </div>
              <input
                className="w-11/12 py-1 text-gray-700 outline-none text-base"
                id="search"
                type="text"
                placeholder="What do want to learn?"
              />
            </div>
          </div>

          <div className="poper-hover px-2">
            <button className=" h-16 w-auto">Udemy Bussiness</button>
            <div className="mt-2">
              <div className="content content-border bg-white">
                <h1 className=" text-xl font-bold leading-tight mb-3">
                  Get your team access to over 6,000 top Udemy courses, anytime,
                  anywhere.
                </h1>
                <button className="dark-btn w-11/12 h-12 font-extrabold">
                  Try Udemy Bussiness
                </button>
              </div>
            </div>
          </div>
          <div className="poper-hover px-2">
            <button className=" h-16 w-auto">Teach on Udemy</button>
            <div className="mt-2">
              <div className="content content-border bg-white">
                <h1 className=" text-xl font-bold leading-tight mb-3">
                  Turn what you know into an opportunity and reach millions
                  around the world.
                </h1>
                <button className="dark-btn w-11/12 h-12 font-extrabold">
                  Learn more
                </button>
              </div>
            </div>
          </div>
          <ShopingCart />
          {/* show info */}
          {this.isLogin()}
          <button
            className="light-btn w-10 h-10 font-extrabold ml-2 items-center pt-1"
            type="primary"
            onClick={this.showModal}
          >
            <box-icon name="globe"></box-icon>
          </button>
          <Modal
            visible={visible}
            title="Choose a language"
            onCancel={this.handleCancel}
            footer={null}
          >
            <MenuLanguage />
          </Modal>
        </nav>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.QuanLyUserReducer.userLogin,
  };
};
export default connect(mapStateToProps, null)(Navbar);
