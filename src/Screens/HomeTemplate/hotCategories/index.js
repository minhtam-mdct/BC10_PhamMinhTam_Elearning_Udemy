import React, { Component } from "react";
import Design from "../../../Components/img/lohp-category-design-2x-v2.jpg";
import DevCate from "../../../Components/img/lohp-category-development-2x-v2.jpg";
import Marketing from "../../../Components/img/lohp-category-marketing-2x-v2.jpg";
import ITSoftware from "../../../Components/img/lohp-category-it-and-software-2x-v2.jpg";
import PersonDev from "../../../Components/img/lohp-category-personal-development-2x-v2.jpg";
import Business from "../../../Components/img/lohp-category-business-2x-v2.jpg";
import Photography from "../../../Components/img/lohp-category-photography-2x-v2.jpg";
import Music from "../../../Components/img/lohp-category-music-2x-v2.jpg";
export default class HotCategories extends Component {
  render() {
    return (
      <div className="container mt-16">
        <h1 className="text-2xl font-bold ml-2">Top categories</h1>
        <div className="flex flex-wrap">
          <a className="flex flex-col w-1/4 pr-6 pb-6">
            <img
              className="transform hover:scale-105 transition-all"
              style={{ width: 300 }}
              src={Design}
              alt="Design"
            />
            <h1 className="mt-3 mb-6 text-base font-bold">Design</h1>
          </a>
          <a className="flex flex-col w-1/4 pr-6 pb-6">
            <img
              className="transform hover:scale-105 transition-all"
              style={{ width: 300 }}
              src={DevCate}
              alt="Development"
            />
            <h1 className="mt-3 mb-6 text-base font-bold">Development</h1>
          </a>
          <a className="flex flex-col w-1/4 pr-6 pb-6">
            <img
              className="transform hover:scale-105 transition-all"
              style={{ width: 300 }}
              src={Marketing}
              alt="Marketing"
            />
            <h1 className="mt-3 mb-6 text-base font-bold">Marketing</h1>
          </a>
          <a className="flex flex-col w-1/4 pr-6 pb-6">
            <img
              className="transform hover:scale-105 transition-all"
              style={{ width: 300 }}
              src={ITSoftware}
              alt="IT & Software"
            />
            <h1 className="mt-3 mb-6 text-base font-bold">IT & Software</h1>
          </a>
          <a className="flex flex-col w-1/4 pr-6 pb-6">
            <img
              className="transform hover:scale-105 transition-all"
              style={{ width: 300 }}
              src={PersonDev}
              alt="PersonDev"
            />
            <h1 className="mt-3 mb-6 text-base font-bold">
              Personal Development
            </h1>
          </a>
          <a className="flex flex-col w-1/4 pr-6 pb-6">
            <img
              className="transform hover:scale-105 transition-all"
              style={{ width: 300 }}
              src={Business}
              alt="Business"
            />
            <h1 className="mt-3 mb-6 text-base font-bold">Business</h1>
          </a>
          <a className="flex flex-col w-1/4 pr-6 pb-6">
            <img
              className="transform hover:scale-105 transition-all"
              style={{ width: 300 }}
              src={Photography}
              alt="Photography"
            />
            <h1 className="mt-3 mb-6 text-base font-bold">Photography</h1>
          </a>
          <a className="flex flex-col w-1/4 pr-6 pb-6">
            <img
              className="transform hover:scale-105 transition-all"
              style={{ width: 300 }}
              src={Music}
              alt="Music"
            />
            <h1 className="mt-3 mb-6 text-base font-bold">Music</h1>
          </a>
        </div>
      </div>
    );
  }
}
