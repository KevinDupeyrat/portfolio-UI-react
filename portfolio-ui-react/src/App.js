import { Fab, MuiThemeProvider } from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import About from "./core/about/About";
import Experience from "./core/experience/Experience";
import Home from "./core/home/Home";
import Service from "./core/service/Service";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";
import THEME from "./theme";
import EmailIcon from "@material-ui/icons/Email";

class App extends Component {
  state = {
    homeAutoPlay: true,
  };

  // Life cicle
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY < 300) {
        this.setState({ homeAutoPlay: true });
      } else {
        this.setState({ homeAutoPlay: false });
      }
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <div className="app-toolbar">
          <Header />
        </div>
        <div>
          <Home autoPlay={this.state.homeAutoPlay} />
        </div>
        <div>
          <About />
        </div>
        <div className="parallax">
          « Wherever smart people work, doors are unlocked. »
          <div className="name-quote"> - Steve Wozniak - </div>
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
        <Fab
          variant={!this.state.homeAutoPlay ? "extended" : "round"}
          color="primary"
          aria-label="email"
          className="fab"
          size="large"
        >
          <EmailIcon
            className={
              !this.state.homeAutoPlay ? "mailIcon mailIconMarg" : "mailIcon"
            }
          />
          <div className={
              !this.state.homeAutoPlay ? "labelnohidden" : ""
            } >{!this.state.homeAutoPlay ? "Contact me" : ""}</div>
        </Fab>
      </MuiThemeProvider>
    );
  }
}

export default App;
