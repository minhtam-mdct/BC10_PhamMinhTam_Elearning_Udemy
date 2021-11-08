import React, { Component } from "react";

export default class Feature extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-2xl font-bold">Featured topics by category</h1>
        <div className="sm:ml-auto sm:flex-wrap md:flex">
          <div className="sm:w-full sm:text-center md:w-1/2 md:text-left lg:w-1/4 featured">
            <h1 className="text-xl font-bold mt-3">Development</h1>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Python</a>
              </div>
              <div className="mt-2">
                <span>31,691,635 students</span>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Web Development</a>
              </div>
              <div className="mt-2">
                <span>10,053,805 students</span>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Machine Learning</a>
              </div>
              <div className="mt-2">
                <span>6,270,616 students</span>
              </div>
            </div>
          </div>
          <div className="sm:w-full sm:text-center md:w-1/2 md:text-left lg:w-1/4 featured">
            <h1 className="text-xl font-bold mt-3">Business</h1>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Financial Analysis</a>
              </div>
              <div className="mt-2">
                <span>1,082,344 students</span>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">SQL</a>
              </div>
              <div className="mt-2">
                <span>4,849,674 students</span>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">PMP</a>
              </div>
              <div className="mt-2">
                <span>1,456,243 students</span>
              </div>
            </div>
          </div>
          <div className="sm:w-full sm:text-center md:w-1/2 md:text-left lg:w-1/4 featured">
            <h1 className="text-xl font-bold mt-3">IT and Software</h1>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">AWS Certification</a>
              </div>
              <div className="mt-2">
                <span>4,715,457 students</span>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Ethical Hacking</a>
              </div>
              <div className="mt-2">
                <span>9,799,469 students</span>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Cyber Security</a>
              </div>
              <div className="mt-2">
                <span>3,480,738 students</span>
              </div>
            </div>
          </div>
          <div className="sm:w-full sm:text-center md:w-1/2 md:text-left lg:w-1/4 featured">
            <h1 className="text-xl font-bold mt-3">Design</h1>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Photoshop</a>
              </div>
              <div className="mt-2">
                <span>10,107,073 students</span>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Graphic Design</a>
              </div>
              <div className="mt-2">
                <span>3,067,256 students</span>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <a className="font-bold text-base">Drawing</a>
              </div>
              <div className="mt-2">
                <span>2,282,332 students</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:justify-center md:block">
          <button className=" light-btn w-auto h-10 font-bold px-3 mt-6">
            Explore more topics
          </button>
        </div>
      </div>
    );
  }
}
