import React, { Component } from "react";
import SlickCourse from "../SlickCourse";

export default class Mindset extends Component {
  render() {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-justify">
            How a Coding Mindset can help your language learners
          </h1>
          <p className="content-course w-4/5 h-20 text-justify text-base overflow-hidden">
            What do we mean when we talk about the coding mindset – and why it
            is relevant to language teaching? The coding mindset sounds like a
            confusing concept, but in fact, it’s quite straightforward. A
            computer programmer uses codes to solve a problem using a
            computer...
          </p>

          <button className="light-btn w-36 h-10 font-bold">
            Explore Mindset
          </button>
        </div>
        <div className="container">
          <SlickCourse />
        </div>
      </div>
    );
  }
}
