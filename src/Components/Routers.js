import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingSignup } from "./LoadingsComponents";

const ProfilePageLazy = lazy(() => import("./Main"));
const SignupLazy = lazy(() => import("./Signup"));

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup">
          <Suspense fallback={<LoadingSignup />}>
            <SignupLazy />
          </Suspense>
        </Route>

        <Route exact path="/">
          <Suspense fallback={"Cargando componente ProfilePage.js..."}>
            <ProfilePageLazy />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}
