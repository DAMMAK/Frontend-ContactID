import React from "react";
import "./Header.scss";
import logo from "../img/logo.png";

const NavBar = () => (
  <header>
    <nav>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div className="">
        <ul className="nav__link">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Pricing</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
          <li>
            <a href="/" className="active">
              Sign in
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <section className="info__container">
      <div className="info">
        <h2>Get contact information from just a name</h2>
        <p>search upto 500,000 records in a seconds</p>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Enter a name and hit enter to search e.g Joseph"
          />
          <i className="fas fa-search" />
        </div>
      </div>
    </section>
  </header>
);

export default NavBar;
