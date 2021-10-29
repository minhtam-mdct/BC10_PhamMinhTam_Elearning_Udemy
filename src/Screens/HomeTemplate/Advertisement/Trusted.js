import React, { Component } from "react";

export default class Trusted extends Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center m-4">
        <h3 className="font-serif text-2xl font-bold tracking-tight">
          Trusted by companies of all sizes
        </h3>
        <a className="flex justify-center w-auto">
          <div className="m-3">
            <img
              src="https://s.udemycdn.com/partner-logos/v4/apple-dark.svg"
              alt="apple"
            />
          </div>
          <div className="m-3">
            <img
              src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
              alt="box"
            />
          </div>
          <div className="m-3">
            <img
              src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
              alt="volk"
            />
          </div>
          <div className="m-3">
            <img
              src="https://s.udemycdn.com/partner-logos/v4/netflix-dark.svg"
              alt="netflix"
            />
          </div>
          <div className="m-3">
            <img
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
              alt="eventbrite"
            />
          </div>
        </a>
      </div>
    );
  }
}
