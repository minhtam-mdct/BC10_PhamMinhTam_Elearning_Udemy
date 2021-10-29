import React, { Component } from "react";
import SlickCourse from "../SlickCourse";

export default class FullStack extends Component {
  render() {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-justify">
            Build websites and applications with Full Stacks
          </h1>
          <p className="content-course w-4/5 h-20 text-justify text-base overflow-hidden">
            The world of web development is as wide as the internet itself. Much
            of our social and vocational lives play out on the internet, which
            prompts new industries aimed at creating, managing, and debugging
            the websites and applications that we increasingly rely on...
          </p>

          <button className="light-btn w-36 h-10 font-bold">
            Explore Full Stacks
          </button>
        </div>
        <div className="container">
          <SlickCourse />
        </div>
      </div>
    );
  }
}
