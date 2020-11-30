import React from "react";
import { Route, Switch } from "react-router-dom";
import "../styles/App.css";
import About from "./about";
import Home from "./home";
import Other from "./other";
import LocationDisplay from "./LocationDisplay";

const App = () => {
  return (
    <>
      <div id="main">
        <a href="/">Home</a>
        <br />
        <a href="/about">About</a>
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
