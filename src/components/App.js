import React from "react";
import { Route, Switch, useLocation, Link, Redirect } from "react-router-dom";
import "../styles/App.css";
import About from "./about";
import Home from "./home";
import Other from "./other";
import LocationDisplay from "./locationDisplay";

const App = () => {
  return (
    <>
      <div id="main">
        <Link href="/">Home</Link>
        <br />
        <Link href="/about">About</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/" component={Home} />
          <Route component={Other} />
        </Switch>
        <LocationDisplay />
      </div>
    </>
  );
};

export default App;
