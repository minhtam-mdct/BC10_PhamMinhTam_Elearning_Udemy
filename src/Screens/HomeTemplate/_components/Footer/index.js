import React, { Component } from "react";
import { Modal } from "antd";
import MenuLanguage from "../MenuLanguage";
export default class Footer extends Component {
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
  render() {
    const { visible } = this.state;
    return (
      <footer className="py-6">
        <div className="px-6 mx-auto">
          <div className="flex">
            <div className="w-1/4 order-4 relative">
              <button
                className="footer-btn absolute right-1 flex w-36 h-10 font-normal items-center px-3"
                type="primary"
                onClick={this.showModal}
              >
                <box-icon name="globe" color="#ffffff"></box-icon>
                <span className="ml-1">English</span>
              </button>
              <Modal
                visible={visible}
                title="Choose a language"
                onCancel={this.handleCancel}
                footer={null}
              >
                <MenuLanguage />
              </Modal>
            </div>
            <div className="w-1/4">
              <ul>
                <li>
                  <a>Udemy Business</a>
                </li>
                <li>
                  <a>Teach on Udemy</a>
                </li>
                <li>
                  <a>Get the app</a>
                </li>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
              </ul>
            </div>
            <div className="w-1/4">
              <ul>
                <li>
                  <a>Careers</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Help and Support</a>
                </li>
                <li>
                  <a>Affiliate</a>
                </li>
              </ul>
            </div>
            <div className="w-1/4">
              <ul>
                <li>
                  <a>Terms</a>
                </li>
                <li>
                  <a>Privacy policy</a>
                </li>
                <li>
                  <a>Sitemap</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center pt-6 lg:justify-between">
            <a className="justify-center">
              <img
                style={{ width: "91px", height: "34px" }}
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                alt="logoFooter"
              />
            </a>
            <div className="">
              <span className="text-white text-xs">© 2021 Udemy, Inc.</span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
