import React from "react";
import "./Header.css";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import burger_icon from "../../../assets/img/burger_icon.svg";
const Header = ({ setsidebarshow, sidebarshow }) => {
  return (
    <div className="header">
      <div className="content_header">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <nav className="header_nav_list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Doctors">Doctors</Link>
          </li>

          <li>
            <Link to="/register" className="register">
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" className="login">
              Sign in
            </Link>
          </li>
        </nav>

        <button
          className="burger_icon"
          onClick={(e) => setsidebarshow(!sidebarshow)}
        >
          <img src={burger_icon} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Header;
