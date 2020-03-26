import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Saved from "./Pages/Saved";
import Footer from "./Components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Hero />
          <Route exact path="/" component={Home} />
          <Route exact path="/saved" component={Saved} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
