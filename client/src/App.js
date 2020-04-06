import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Saved from "./Pages/Saved";
import Footer from "./Components/Footer";
import NoMatch from "./Pages/NoMatch";

class App extends Component {
  render() {
    return (
        <Router>
          <Navbar />
          <Hero />
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/saved" component={Saved} />
              <Route component={NoMatch} />
            </Switch>
          </main>
          <Footer />
        </Router>
    );
  }
}

export default App;
