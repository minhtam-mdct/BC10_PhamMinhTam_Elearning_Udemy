import React, { Component } from "react";
import SlickCourse from "../SlickCourse";

export default class Design extends Component {
  render() {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-justify">
            Expand your creative skillset with Design
          </h1>
          <p className="content-course w-4/5 h-20 text-justify text-base overflow-hidden">
            Besides being the foundation upon which most art forms are built,
            design is also an excellent way to relieve stress and feed your
            inner creativity. Design teaches us how to be observant, develop an
            attention to detail, and express ourselves...
          </p>

          <button className="light-btn w-36 h-10 font-bold">
            Explore Design
          </button>
        </div>
        <div className="container">
          <SlickCourse />
        </div>
      </div>
    );
  }
}
