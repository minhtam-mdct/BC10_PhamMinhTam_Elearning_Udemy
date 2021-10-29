import React, { Component } from "react";
import SlickCourse from "../SlickCourse";

export default class BackEnd extends Component {
  render() {
    return (
      <div>
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-justify">
            Analyze and visualize data with Back End
          </h1>
          <p className="content-course w-4/5 h-20 text-justify text-base overflow-hidden">
            A backend developer could just be focused on a database and
            providing an API to it or on a server language like PHP and those
            mentioned so far and provide an API to it. Their work would need to
            be accessible to many other back end applications such as the
            database developer...
          </p>

          <button className="light-btn w-36 h-10 font-bold">
            Explore back End
          </button>
        </div>
        <div className="container">
          <SlickCourse />
        </div>
      </div>
    );
  }
}
