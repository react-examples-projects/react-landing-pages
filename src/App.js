import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const ProfilePageLazy = lazy(() => import("./Components/Main"));
const ContactLazy = lazy(() => import("./Components/Contact"));
function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/contact">
          <Suspense fallback={"Cargando componente [Contact.js]..."}>
            <ContactLazy />
          </Suspense>
        </Route>

        <Route exact path="/">
          <Suspense fallback={"Cargando componente [ProfilePage.js]..."}>
            <ProfilePageLazy />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}
export default App;
