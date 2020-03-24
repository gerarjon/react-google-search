import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./App.css";
import Container from "./Components/Container";
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

class App extends Component {
  render() {
    return (
        <Router>
          <Navbar />
          <Container>
            <Hero />
            <Route path="/" component={Home} />
          </Container>
        </Router>
    );
  }
}

export default App;
