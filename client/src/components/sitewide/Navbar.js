import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";

import './assets/navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <NavLink isActive={testActive} activeClassName="activeLink" to="/">Blog</NavLink>
        <NavLink isActive={testActive} activeClassName="activeLink" to="/portfolio">Portfolio</NavLink>
        <NavLink isActive={testActive} activeClassName="activeLink" to="/contact">Contact</NavLink>
      </div>
    )
  }
}

function testActive(match) {
  return (match && match.isExact) || false;
}

export default Navbar;
