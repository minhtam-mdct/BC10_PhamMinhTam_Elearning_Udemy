import React, { Component } from "react";
import instructor from "../../../Components/img/ub-2x-v3.jpg";
export default class UdemyBusiness extends Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <div className="flex w-4/5">
          <div className="flex flex-col justify-center mr-20">
            <img
              style={{ width: "282px", height: "48px" }}
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg"
              alt="UdemyBusiness"
            />
            <p className="text-lg mt-1">
              Get unlimited access to 6,000+ of Udemy’s top courses for your
              team. Learn and improve skills across business, tech, design, and
              more.
            </p>
            <button className="dark-btn w-44 h-12 font-bold text-base">
              Get Udemy Business
            </button>
          </div>
          <img
            src={instructor}
            style={{ width: "400px", height: "400px" }}
            alt="instructor"
          />
        </div>
      </div>
    );
  }
}
