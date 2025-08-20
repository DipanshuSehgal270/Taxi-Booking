import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">TaxiService</h1>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#contact" className="book-link">Book Now</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
