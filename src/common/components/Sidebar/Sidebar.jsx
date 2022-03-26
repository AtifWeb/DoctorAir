import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";

// css
import "./Sidebar.css";
const Sidebar = ({ sidebarState }) => {
  return (
    <aside className={`Sidebar ${sidebarState && "active"}`}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Doctors</Link>
        </li>

        <li>
          <Link to="/register" className="register sidebarregister">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="login sidebarlogin">
            Sign in
          </Link>
        </li>
      </nav>
    </aside>
  );
};
export default Sidebar;
