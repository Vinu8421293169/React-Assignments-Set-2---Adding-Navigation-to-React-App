import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import "../styles/App.css";
import LocationDisplay from "./LocationDisplay";

class About extends Component {
  render() {
    return <div>You are on the about page.</div>;
  }
}

class Home extends Component {
  render() {
    return <div>You are home.</div>;
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
        <Link href="/about">About</Link>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={Home} />
          <Route path="/" component={Other} />
        </Switch>
        <LocationDisplay />
      </div>
    </>
  );
};

export default App;
export { LocationDisplay };
