import { MuiThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import About from "./core/about/About";
import Experience from "./core/experience/Experience";
import Home from "./core/home/Home";
import Service from "./core/service/Service";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";
import THEME from "./theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <div className="app-toolbar">
          <Header />
        </div>
        <div>
          <Home />
        </div>
        <div>
          <About />
        </div>
        <div class="parallax">
          « Wherever smart people work, doors are unlocked. »
          <div class="name-quote"> - Steve Wozniak - </div>
        </div>
        <div>
          <Service />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
