import React from 'react';
import logo from '../../assets/images/covid-19-corona.png';

function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <a className="navbar-brand" href="#">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        Covid-19 Tracker
      </a>
    </nav>
  );
}

export default NavBar;
