import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import NavbarAdmin from "./_component/NavbarAdmin/index.js";
import Footer from "../HomeTemplate/_components/Footer";
import "./_component/StyleAdmin/AddBtn.css";
import "./_component/StyleAdmin/modal.css";

function LayoutAdmin(props) {
  return (
    <Fragment>
      {<NavbarAdmin />}
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      //{...props} thay thế cho exact vs path
      {...props}
      render={(propsRoute) => {
        if (localStorage.getItem("UserAdmin")) {
          return (
            <LayoutAdmin>
              <Component {...propsRoute} />
            </LayoutAdmin>
          );
        }

        //Chuyen huong ve trang auth
        return <Redirect to="/admin-login" />;
      }}
    />
  );
}
