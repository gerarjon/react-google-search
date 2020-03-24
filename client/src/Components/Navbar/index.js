import React from "react";
import { Link } from "react-router-dom";
import "./style.css";


const Navbar = () => {
  return (
    <header>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper container">
            <Link 
              to="/"
              className="brand-logo">
              Google Books 
            </Link>
            <ul class="right hide-on-med-and-down">
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

export default Navbar;