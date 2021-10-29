import React, { Component } from "react";
import SlickCourse from "../SlickCourse";

export default class Frontend extends Component {
  render() {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-justify">
            Expand your career opportunities with Front End
          </h1>
          <p className="content-course w-4/5 h-20 text-justify text-base overflow-hidden">
            Whether you work in machine learning or finance, or are pursuing a
            career in web development or data science, FrontEnd is one of the
            most important skills you can learn. FrontEnd's simple syntax is
            especially suited for desktop, web, and business...
          </p>

          <button className="light-btn w-36 h-10 font-bold">
            Explore Front End
          </button>
        </div>
        <div className="container">
          <SlickCourse />
        </div>
      </div>
    );
  }
}
