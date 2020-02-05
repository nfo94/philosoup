import React from "react";
import { GiSpoon } from "react-icons/gi";
import { MainStyle } from "./style";

export default function Main() {
  return (
    <MainStyle>
      <div>
        <GiSpoon size={24} color="#fff" />
        <h1>Studied a philosopher?</h1>
        <h1>Spill the tea about his/her work and ideas.</h1>
        <p>{`Read, think, learn and share your impressions with us`}</p>
      </div>
    </MainStyle>
  );
}
