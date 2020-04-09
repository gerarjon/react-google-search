import React, { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./style.css";


class Navbar extends Component {
  componentDidMount() {
    let sidenav = document.querySelector("#sidenav-mobile");
    M.Sidenav.init(sidenav, {});
  }

  render() {
    return (
      <header>
        <div className="navbar-fixed">
          <nav className="white">
            <div className="nav-wrapper container">
              <Link 
                to="/"
                className="brand-logo">
                <i className="fab fa-react"></i> Google Books 
              </Link>
              <a 
                href="!#"
                data-target="sidenav-mobile" 
                className="sidenav-trigger"
              >
                <i className="material-icons">menu</i>
              </a>
              <ul className="right hide-on-med-and-down">
                <li>
                  <Link to="/">Search</Link>
                </li>
                <li>
                  <Link to="/saved">Saved</Link>
                </li>
              </ul>
              {/* Sidenav */}
              <ul className="sidenav" id="sidenav-mobile">
                <li>
                  <Link to="/">Search</Link>
                </li>
                <li>
                  <Link to="/saved">Saved</Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Navbar;