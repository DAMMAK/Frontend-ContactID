import React from "react";
import "./Header.scss";
import logo from "../img/logo.png";

const keyPress = () => {
  console.log("It is currently Working");
  const afterButton = document.querySelector("#afterButton");
  afterButton.classList.remove("fa-search");
  afterButton.classList.add("fa-times");
};

const keyBlur = () => {
  const afterButton = document.querySelector("#afterButton");
  afterButton.classList.remove("fa-times");
  afterButton.classList.add("fa-search");
};
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
            onFocus={keyPress}
            onBlur={keyBlur}
          />
          <i className="fas fa-search" id="afterButton" />
        </div>
      </div>
    </section>
  </header>
);

export default NavBar;
