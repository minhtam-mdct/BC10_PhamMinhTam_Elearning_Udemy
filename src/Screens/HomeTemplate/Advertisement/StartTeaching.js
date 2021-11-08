import React, { Component } from "react";
import instructor from "../../../Components/img/instructor-2x-v3.jpg";
export default class StartTeaching extends Component {
  render() {
    return (
      <div className="flex items-center justify-center">
        <div className="flex sm:flex-col lg:flex-row w-4/5">
          <img
            className="mr-20"
            src={instructor}
            style={{ width: "400px", height: "400px" }}
            alt="instructor"
          />
          <div className="flex flex-col justify-center">
            <h3 className="font-serif font-bold text-4xl tracking-tight">
              Become an instructor
            </h3>
            <p className=" text-lg">
              Instructors from around the world teach millions of students on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="dark-btn w-44 h-12 font-bold text-base">
              Start teaching today
            </button>
          </div>
        </div>
      </div>
    );
  }
}
