import React from "react";
import "./Login.css";
import warehouse from "./images/warehouse.png";
import warehousebg from "./images/warehousebg.jpg"
const Login = () => {
  return (
    <div className="login-container">
      <div className="login-info">
        <h1 className="login-title">WalmartHouse</h1>
        <p className="login-tagline">making management easy</p>
      </div>
      <div className="login-box">
        <div className="login-header">
          <img src={warehouse} alt="Logo" className="logo" />
          <h2>Welcome back</h2>
          <p>Please enter your details to sign in.</p>
        </div>
        <form className="login-form">
          <input
            type="email"
            placeholder="Warehouse Manager Id"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="sign-in-button">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
