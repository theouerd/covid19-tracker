import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/covid-19-corona.png';

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link className="navbar-brand" to="/">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Covid-19 Tracker
      </Link>
    </nav>
  );
}

export default NavBar;
