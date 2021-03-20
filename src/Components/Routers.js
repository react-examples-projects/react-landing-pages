import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoadingSignup, LoadingMain } from "./LoadingsComponents";

const TestingLazy = lazy(() => import("./Pages/Testing/Main"));
const SignupLazy = lazy(() => import("./Pages/Signup/Signup"));
const LoginLazy = lazy(() => import("./Pages/Login/Login"));
const AboutLazy = lazy(() => import("./Pages/About/About"));
const ExploreLazy = lazy(() => import("./Pages/Explore/Explore"));
const ProductLazy = lazy(() => import("./Pages/Product/Product"));
const StartLazy = lazy(() => import("./Pages/Start/Start"));
const MemeLazy = lazy(() => import("./Pages/Meme/MemeContainer"));
const TodoLazy = lazy(() => import("./Pages/Todo/Todo"));
const ReactQueryLazy = lazy(() => import("./Pages/ReactQuery/ReactQuery"));
const Me = lazy(() => import("./Pages/Me/Me"));
const GPS = lazy(() => import("./Pages/Gps/Gps"));
const Tv = lazy(() => import("./Pages/tv/Tv"));

export default function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tv">
          <Suspense fallback={<h4>Loading tv maze...</h4>}>
            <Tv />
          </Suspense>
        </Route>

        <Route exact path="/gps">
          <Suspense fallback={<h4>Loading GPS...</h4>}>
            <GPS />
          </Suspense>
        </Route>

        <Route exact path="/me">
          <Suspense fallback={<h4>Loading Me...</h4>}>
            <Me />
          </Suspense>
        </Route>

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

        <Route exact path="/start">
          <Suspense fallback={<h4>Cargando ...</h4>}>
            <StartLazy />
          </Suspense>
        </Route>

        <Route exact path="/meme">
          <Suspense fallback={<h4>Cargando ...</h4>}>
            <MemeLazy />
          </Suspense>
        </Route>

        <Route exact path="/todo">
          <Suspense fallback={<h4>Cargando ...</h4>}>
            <TodoLazy />
          </Suspense>
        </Route>

        <Route exact path="/testing">
          <Suspense fallback={<LoadingMain />}>
            <TestingLazy />
          </Suspense>
        </Route>

        <Route exact path="/">
          <Suspense fallback={<h5>Cargando ReactQueryLazy...</h5>}>
            <ReactQueryLazy />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}
