import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <a className="logo"  href="#">
          <img className="logoimg" src="./authcheck.png" alt="" />
          <h3>AuthCheck</h3>
        </a>
        <div className="menu">
          <a className="a" href="#about"> About Us</a>
          <a className="a" href="#footer"> Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
