import React, { Component } from "react";
import instructor from "../../../Components/img/transform-2x-v3.jpg";
export default class GetAboutUdemy extends Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <div className="flex w-4/5">
          <img
            className="mr-20"
            src={instructor}
            style={{ width: "400px", height: "400px" }}
            alt="instructor"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-serif font-bold text-4xl tracking-tight">
              Transform your life through education
            </h3>
            <p className=" text-lg">
              Learners around the world are launching new careers, advancing in
              their fields, and enriching their lives.
            </p>
            <button className="dark-btn w-32 h-12 font-bold text-base">
              Find out how
            </button>
          </div>
        </div>
      </div>
    );
  }
}
