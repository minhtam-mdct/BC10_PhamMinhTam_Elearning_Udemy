import React, { lazy } from "react";
import HomeTemplate from "../Screens/HomeTemplate";
import AdminTemplate from "../Screens/AdminTemplate";

const routesHome = [
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../Screens/HomeTemplate/Home")),
  },
  {
    exact: false,
    path: "/login",
    component: lazy(() => import("../Screens/HomeTemplate/Auth/Login")),
  },
  {
    exact: false,
    path: "/signup",
    component: lazy(() => import("../Screens/HomeTemplate/Auth/SignUp")),
  },
  {
    exact: false,
    path: "/detail/:id",
    component: lazy(() => import("../Screens/HomeTemplate/DetailCourse")),
  },
];

const routesAdmin = [
  {
    exact: false,
    path: "/dashboard",
    component: lazy(() => import("../Screens/AdminTemplate/Dashboard")),
  },
  {
    exact: false,
    path: "/students",
    component: lazy(() => import("../Screens/AdminTemplate/Students")),
  },
  {
    exact: false,
    path: "/courses",
    component: lazy(() => import("../Screens/AdminTemplate/Courses")),
  },
];

export function RoutesHome() {
  return routesHome.map((route, index) => (
    <HomeTemplate
      key={index}
      exact={route.exact}
      path={route.path}
      Component={route.component}
    />
  ));
}

export function RoutesAdmin() {
  return routesAdmin.map((route, index) => (
    <AdminTemplate
      key={index}
      exact={route.exact}
      path={route.path}
      Component={route.component}
    />
  ));
}
