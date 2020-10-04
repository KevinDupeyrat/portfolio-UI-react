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
import { scrollYDescription } from "./shared/const/Scroll-model.js";
import { ExperienceModel } from "./shared/const/Experience-model";

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
    opacityClass: "default-opcaity",
  };

  // Life cicle for add Listener
  // Global state init
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({
      refhome: this.refAccueil,
      refabout: this.refAbout,
      refservice: this.refService,
      refprojects: this.refProject,
      homeAutoPlay: true,
    });
    this.setState(scrollYDescription[0]?.direction || {});
  }

  // Life cicle for remove Listener
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Function to handle scroll event for :
  // Active or not menu section
  // Active or not Auto Play Carousel
  // Active or not header opacity
  handleScroll = () => {
    const { scrollY } = window;
    const scrollToDirection = scrollYDescription.find(
      (x) => scrollY > x.start && scrollY < x.end
    );

    this.setState(scrollToDirection?.direction || {});
    this.setState({
      homeAutoPlay: scrollY < 300 ? true : false,
      opacityClass: scrollY < 300 ? "default-opcaity" : "scroll-opacity",
    });
  };

  // Function for scroll to section when click event emit
  // in menu
  scrollTo = (key) => {
    this.state[`ref${key}`].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Active animation section when we go to
  activeAnime = (ref) => {
    return ref && ref.current
      ? window.scrollY >= ref.current.getBoundingClientRect().top
      : false;
  };

  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <div className="app-toolbar">
          <Header
            opacityClass={this.state.opacityClass}
            menuState={this.state}
            scrollTo={this.scrollTo}
          />
        </div>
        <div ref={this.refAccueil}>
          <Home autoPlay={this.state.homeAutoPlay} />
        </div>
        <div ref={this.refAbout}>
          <About display={this.activeAnime(this.refAbout)} />
        </div>
        <div className="parallax">
          « Wherever smart people work, doors are unlocked. »
          <div className="name-quote"> - Steve Wozniak - </div>
        </div>
        <div ref={this.refService}>
          <Service display={this.activeAnime(this.refService)} />
        </div>
        <div ref={this.refProject}>
          <Experience
            display={this.activeAnime(this.refProject)}
            experiencesList={ExperienceModel}
          />
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
