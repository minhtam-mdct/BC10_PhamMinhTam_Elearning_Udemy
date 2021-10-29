import React, { Fragment } from "react";
import Navbar from "./_components/Navbar";
import { Route } from "react-router-dom";
import Footer from "./_components/Footer";
import "../HomeTemplate/_components/Style/indexStyle.css";
import "../HomeTemplate/_components/Style/checkbox.css";

function LayoutHome(props) {
  return (
    <Fragment>
      <Navbar />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default function HomeTemplate(props) {
  const { exact, path, Component } = props;
  return (
    <LayoutHome>
      <Route exact={exact} path={path} component={Component} />
    </LayoutHome>
  );
}
