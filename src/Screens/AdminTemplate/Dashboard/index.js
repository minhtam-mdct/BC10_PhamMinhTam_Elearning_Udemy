import React from "react";
import "./styleBook.css";
import { useSelector } from "react-redux";

export default function Dashboard(props) {
  const infoAdmin = useSelector((state) => state.AdminReducer.adminLogin);
  return (
    <div className="bg-gray-700 flex h-screen items-center">
      <div className="container">
        <div className="component">
          <ul className="align items-center flex">
            <li className="mx-auto">
              <figure className="book">
                {/* Front */}
                <ul className="hardcover_front">
                  <li className="overflow-hidden">
                    <img
                      className="object-cover"
                      src="https://pbs.twimg.com/profile_images/1215648592125419522/Fo5FEWoN.jpg"
                      style={{ width: "100%", height: "100%" }}
                    />
                  </li>
                  <li />
                </ul>
                {/* Pages */}
                <ul className="page">
                  <li></li>
                  <li>
                    <a className="btn">
                      Welcome
                      <br />
                      {infoAdmin.hoTen}
                    </a>
                  </li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
                {/* Back */}
                <ul className="hardcover_back"></ul>
                <ul className="book_spine"></ul>
                <figcaption>
                  <h1 className="text-white text-xl">
                    You are the Administrator
                  </h1>
                  <span className="text-base qes">What can you do?</span>
                  <p className="text-lg explain">
                    Now you can administer all students and courses. Please
                    select the one you want on the Navbar
                  </p>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
      {/* /container */};
    </div>
  );
}
