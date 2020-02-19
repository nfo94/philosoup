import React from "react";
import "./style.css";

export default function SignupPage() {
  return (
    <div className="login">
      <h2>First timer? Create an account.</h2>
      <form className="login-form">
        <label>Email:</label>
        <input type="text" name="username" placeholder="e.g.: nietzsche666" />
        <label>Password:</label>
        <input type="password" name="password" />
        <button type="submit" className="btn-signup">
          Create
        </button>
      </form>
    </div>
  );
}
