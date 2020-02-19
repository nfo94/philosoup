import React from "react";
import "./style.css";

export default function LoginPage() {
  return (
    <div className="login">
      <h2>Already have an account? Log in.</h2>
      <form className="login-form">
        <label>Email:</label>
        <input
          type="text"
          name="username"
          placeholder="e.g.: nietzsche666@gmail.com"
        />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit" className="btn-login">
          Log in
        </button>
      </form>
    </div>
  );
}
