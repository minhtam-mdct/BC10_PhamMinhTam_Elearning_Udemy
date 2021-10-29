import React, { Component } from "react";
import "./miniFooter.css";
export default class MiniFooter extends Component {
  render() {
    return (
      <div className="miniFooter inline-flex">
        <div className="content-mini w-1/2">
          <p className="text-xl font-bold m-0 tracking-tight leading-6">
            Top companies choose{" "}
            <a className="hover:underline">Udemy Business</a> to build in-demand
            career skills.
          </p>
        </div>
        <div className="flex w-1/2">
          <img
            alt="Apple"
            height="44"
            width="44"
            src="https://s.udemycdn.com/partner-logos/v4/apple-light.svg"
          />
          <img
            alt="Box"
            height="44"
            width="67"
            src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
          />
          <img
            alt="Volkswagen"
            height="44"
            width="44"
            src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
          />
          <img
            alt="Netflix"
            height="44"
            width="101"
            src="https://s.udemycdn.com/partner-logos/v4/netflix-light.svg"
          />
          <img
            alt="Eventbrite"
            height="44"
            width="115"
            src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
          />
        </div>
      </div>
    );
  }
}
