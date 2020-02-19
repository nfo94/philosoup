import React from "react";
import About from "../About/About";
import { GiSpoon } from "react-icons/gi";
import "./style.css";

export default function Main() {
  return (
    <main>
      <div className="banner">
        <div>
          <GiSpoon size={24} color="#fff" />
          <h1>Studied a philosopher?</h1>
          <h1>Spill the tea about his/her work and ideas.</h1>
          <p>{`Read, think, learn and share your impressions with us`}</p>
        </div>
      </div>
      <About />
    </main>
  );
}
