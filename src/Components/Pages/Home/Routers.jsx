import { Switch, Route, BrowserRouter } from "react-router-dom";

import Aboutme from "./Pages/Aboutme";
import Projects from "./Pages/Projects";

export default function Routers() {
  return (
    <BrowserRouter basename="portfolio">
      <Switch>
        <Route exact path="/projects">
          <Projects />
        </Route>

        <Route exact path="/">
          <Aboutme />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
