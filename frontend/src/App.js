import React from "react";
import { GlobalStyle } from "./globalStyle";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
      <About />
      <Footer />
    </>
  );
}

export default App;
