import React from "react";

import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const logout = () => {

    alert("Logout Success");

    navigate("/");
  };

  return (

    <div className="navbar">

      <h2>Course Management System</h2>

      <div className="nav-links">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/courses">
          Courses
        </Link>

        <Link to="/students">
          Students
        </Link>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}

export default Navbar;