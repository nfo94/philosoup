import React from "react";
import { HeaderStyle } from "./style";

export default function Header() {
  return (
    <HeaderStyle>
      <div>
        <a href="https://en.wikipedia.org/wiki/Philosophy" className="logo">
          Philosoup
        </a>
      </div>
      <div>
        <button>Sign up</button>
        <button>Log in</button>
      </div>
    </HeaderStyle>
  );
}
