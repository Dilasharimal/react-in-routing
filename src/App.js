import React from "react";
import "./App.css";

import Welcome from "./Components/welcome/Welcome";
import Clock from "./Components/clock/Clock";
import Contact from "./Components/contact/Contact";
import Navigation from "./Components/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import pageNotFound from "./Components/404/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Dilasha" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Welcome} />
        <Route path="/welcome" component={Welcome} />

        <Route>
          {"404! "}
          <pageNotFound />
          {" page Not Found"}
        </Route>
      </Switch>
    </div>
  );
}
export default App;
