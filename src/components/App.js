import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import LocationDisplay from "./LocationDisplay";

class About extends Component {
  render() {
    return <h1>You are on the about page</h1>;
  }
}

class Home extends Component {
  render() {
    return <h1>You are home</h1>;
  }
}

class Other extends Component {
  render() {
    return <div>No match</div>;
  }
}

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
export { LocationDisplay };
