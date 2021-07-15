import { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from "./config/routers";
import LoaderPage from "./LoaderPage";

export default function Routers() {
  return (
    <Router>
      <Switch>
        {routers.map(({ path, Component }) => (
          <Route exact path={path} key={path}>
            <Suspense fallback={<LoaderPage />}>
              <Component />
            </Suspense>
          </Route>
        ))}
      </Switch>
    </Router>
  );
}
