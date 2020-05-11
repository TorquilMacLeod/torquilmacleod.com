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
          <h2>Software Engineer</h2>
        </div>
        <div className="navbar">
          <NavLink activeClassName="activeLink" to="/blog">Blog</NavLink>
          <NavLink activeClassName="activeLink" to="/portfolio">Portfolio</NavLink>
          <NavLink activeClassName="activeLink" to="/contact">Contact</NavLink>
        </div>
      </div>
    )
  }
}

export default Header;
