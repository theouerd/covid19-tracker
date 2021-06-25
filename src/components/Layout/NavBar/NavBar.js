import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link className="navbar-brand" to="/">
        Covid-19 Tracker
      </Link>
    </nav>
  );
}

export default NavBar;
