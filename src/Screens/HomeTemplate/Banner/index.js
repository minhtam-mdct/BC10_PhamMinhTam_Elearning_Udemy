import React, { Component } from "react";
import bannerPic from "../../../Components/img/banner-pic.jpg";
export default class Banner extends Component {
  render() {
    return (
      <div className="mb-16">
        <div className="relative">
          <img
            className="w-screen h-auto relative"
            src={bannerPic}
            alt="Banner-Udemy"
          />
          <div className="absolute p-8 top-6 shadow left-10 bg-white w-4/12">
            <h1 className="font-serif text-3xl font-bold">
              Learning that gets you
            </h1>
            <p className="text-lg leading-6">
              Skills for your present (and your future). Get started with us.
            </p>
            <div className="relative">
              <div className="bg-white h-11 items-center btn-search">
                <input
                  className=" w-10/12 my-2 ml-2 text-gray-700 outline-none text-base inline-block"
                  id="search"
                  type="text"
                  placeholder="Search for anything"
                />
                <div className="px-2 inline-block absolute right-2 my-2">
                  <button className="text-white focus:outline-none w-8 items-center right-2">
                    <box-icon name="search-alt-2"></box-icon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
