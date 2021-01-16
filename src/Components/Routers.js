import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingSignup, LoadingMain } from "./LoadingsComponents";

const ProfilePageLazy = lazy(() => import("./Main"));
const SignupLazy = lazy(() => import("./Signup"));
const LoginLazy = lazy(() => import("./Login"));
const AboutLazy = lazy(() => import("./About/About"));
const ExploreLazy = lazy(() => import("./Explore/Explore"));
const ProductLazy = lazy(() => import("./Product"));

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <Suspense fallback={<h4>Loading about...</h4>}>
            <AboutLazy />
          </Suspense>
        </Route>

        <Route exact path="/signup">
          <Suspense fallback={<LoadingSignup />}>
            <SignupLazy />
          </Suspense>
        </Route>

        <Route exact path="/login">
          <Suspense fallback={<LoadingSignup />}>
            <LoginLazy />
          </Suspense>
        </Route>

        <Route exact path="/">
          <Suspense fallback={<LoadingMain />}>
            <ProfilePageLazy />
          </Suspense>
        </Route>

        <Route exact path="/product">
          <Suspense fallback={<h4>Cargando ...</h4>}>
            <ProductLazy />
          </Suspense>
        </Route>

        <Route exact path="/explore">
          <Suspense fallback={<h4>Cargando ...</h4>}>
            <ExploreLazy />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}
