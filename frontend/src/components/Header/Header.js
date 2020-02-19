import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/" className="logo">
          Philosoup
        </Link>
      </div>
      <div className="header-btn">
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/login">
          <button>Log in</button>
        </Link>
      </div>
    </header>
  );
}
