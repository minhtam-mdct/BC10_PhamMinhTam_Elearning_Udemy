import React from "react";
import "./App.css";
import { Switch, Route, withRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { RoutesAdmin, RoutesHome } from "./routes";
import Loader from "./Components/Loader/index";
const AuthAdminComponent = lazy(() =>
  import("./Screens/AdminTemplate/AuthAdmin")
);
const Page404 = lazy(() => import("./Screens/Page404"));
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {RoutesHome()}
        {RoutesAdmin()}
        <Route path="/admin-login" component={AuthAdminComponent} />
        <Route path="" component={Page404} />
      </Switch>
    </Suspense>
  );
}

export default withRouter(App);
