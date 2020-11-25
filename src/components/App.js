import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "../styles/App.css";
import About from "./about";
import Home from "./home";
import Other from "./other";
import LocationDisplay from "./locationDisplay";

const App = () => {
  let location = useLocation();

  return (
    <>
      <a href="/">Home</a>
      <br />
      <a href="/about">About</a>
      <div id="main">
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={Other} />
        </Switch>
        <LocationDisplay data-testid={location.pathname} />
      </div>
    </>
  );
};

export default App;
