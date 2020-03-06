import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home"

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
