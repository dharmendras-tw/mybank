import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/button">Component</Link>
        </li>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/redux-account">Redux Account</Link>
        </li>
        <li>
          <Link to="/city-quiz">City Quiz</Link>
        </li>
        <li>
          <Link to="/city-quiz-states">City Quiz states</Link>
        </li>
        <li>
          <Link to="/tasks">TaskApp</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
