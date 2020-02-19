import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./style.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main>
            <About />
          </Main>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
