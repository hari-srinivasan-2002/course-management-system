import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const handleChange = (e) => {

    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {

    e.preventDefault();

    // Simple Login
    if (
      user.username === "admin" &&
      user.password === "admin123"
    ) {

      alert("Login Success");

      navigate("/dashboard");

    } else {

      alert("Invalid Username or Password");
    }
  };

  return (

    <div className="login-container">

      <form
        className="login-form"
        onSubmit={handleLogin}
      >

        <h2>Login</h2>

        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>

      </form>

    </div>
  );
}

export default Login;