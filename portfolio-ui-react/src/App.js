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
import { scrollYDescription } from "./service/Scroll";

class App extends Component {
  constructor(props) {
    super(props);
    this.refAccueil = React.createRef();
    this.refAbout = React.createRef();
    this.refService = React.createRef();
    this.refProject = React.createRef();
  }

  state = {
    homeAutoPlay: true,
  };

  // Life cicle for add Listener
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      refhome: this.refAccueil,
      refabout: this.refAbout,
      refservice: this.refService,
      refprojects: this.refProject,
      homeAutoPlay: true,
    });
  }

  // Life cicle for remove Listener
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { scrollY } = window;
    const scrollToDirection = scrollYDescription.find(
      (x) => scrollY > x.start && scrollY < x.end
    );

    this.setState(scrollToDirection?.direction || {});
    this.setState({ homeAutoPlay: scrollY < 300 ? true : false });
  };

  scrollTo = (key) => {
    this.state[`ref${key}`].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <div className="app-toolbar">
          <Header menuState={this.state} scrollTo={this.scrollTo} />
        </div>
        <div ref={this.refAccueil}>
          <Home autoPlay={this.state.homeAutoPlay} />
        </div>
        <div ref={this.refAbout}>
          <About />
        </div>
        <div className="parallax">
          « Wherever smart people work, doors are unlocked. »
          <div className="name-quote"> - Steve Wozniak - </div>
        </div>
        <div ref={this.refService}>
          <Service />
        </div>
        <div ref={this.refProject}>
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
          <div className={!this.state.homeAutoPlay ? "labelnohidden" : ""}>
            {!this.state.homeAutoPlay ? "Contact me" : ""}
          </div>
        </Fab>
      </MuiThemeProvider>
    );
  }
}

export default App;
