import React, { Component } from "react";
import SlickCourse from "../SlickCourse";

export default class Mobile extends Component {
  render() {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-justify">
            Grow your software development skills with Mobile Development
          </h1>
          <p className="content-course w-4/5 h-20 text-justify text-base overflow-hidden">
            Mobile developers are a type of software developer. They specialise
            in mobile technology such as building apps for Google's Android,
            Apple's iOS and Microsoft's Windows Phone platforms. ... Mobile
            developers learn the programming languages and software
            development...
          </p>

          <button className="light-btn w-36 h-10 font-bold">
            Explore Mobile
          </button>
        </div>
        <div className="container">
          <SlickCourse />
        </div>
      </div>
    );
  }
}
