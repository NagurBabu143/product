import React from "react";
import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="top-section">
        <div className="logo-container">
        
          <h1>Shaik NagurBabu</h1>
        </div>
        <div className="auth-links">
          <a href="#login">Login</a>
          <a href="#signup">Sign Up</a>
        </div>
      </div>
      <p className="tagline">Your pathway to success</p>
      <div className="nav-container">
        <nav className="nav">
          <ul>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#admissions">Admissions</a>
            </li>
            <li>
              <a href="#events">Events</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
        <button className="search-button">Search</button>
      </div>
    </header>
  );
};

export default Header;
