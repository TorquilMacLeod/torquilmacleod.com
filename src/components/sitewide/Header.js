import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <h1>Torquil MacLeod</h1>
        </div>
        <div className="navbar">
          <NavLink isActive={testActive} activeClassName="activeLink" to="/">Blog</NavLink>
          <NavLink isActive={testActive} activeClassName="activeLink" to="/portfolio">Portfolio</NavLink>
          <NavLink isActive={testActive} activeClassName="activeLink" to="/contact">Contact</NavLink>
        </div>
      </div>
    )
  }
}

function testActive(match) {
  return (match && match.isExact) || false;
}

export default Header;
