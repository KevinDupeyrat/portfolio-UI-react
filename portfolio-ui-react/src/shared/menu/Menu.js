import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import "./Menu.css";


const ACCUEIL_ACTIVE = {
    accueil: true,
    about: false,
    service: false,
    project: false,
}

const ABOUT_ACTIVE = {
  accueil: false,
  about: true,
  service: false,
  project: false,
}

const SERVICE_ACTIVE = {
  accueil: false,
  about: false,
  service: true,
  project: false,
}

const PROJECT_ACTIVE = {
  accueil: false,
  about: false,
  service: false,
  project: true,
}



class Menu extends Component {
  state = {
    accueil: true,
  };

  // Life cicle
  componentDidMount() {
    document.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (scrollY < 200) {
        this.setState(ACCUEIL_ACTIVE);
      }
      if (scrollY > 300 && scrollY < 800) {
        this.setState(ABOUT_ACTIVE);
      }
      if (scrollY > 1000 && scrollY < 1500) {
        this.setState(SERVICE_ACTIVE);
      }
      if (scrollY > 1500) {
        this.setState(PROJECT_ACTIVE);
      }
    });
  }

  render() {
    return (
      <div>
        <Grid container spacing={1}>
          <Grid item xs={1}>
            <span className="menu">
              <a
                href="http://localhost:3000"
                className={this.state.accueil ? "active" : ""}
              >
                ACCUEIL
              </a>
            </span>
          </Grid>
          <Grid item xs={1}>
            <span className="menu">
              <a
                href="http://localhost:3000"
                className={this.state.about ? "active" : ""}
              >
                A PROPOS
              </a>
            </span>
          </Grid>
          <Grid item xs={1}>
            <span className="menu">
              <a
                href="http://localhost:3000"
                className={this.state.service ? "active" : ""}
              >
                SERVICES
              </a>
            </span>
          </Grid>
          <Grid item xs={1}>
            <span className="menu">
              <a
                href="http://localhost:3000"
                className={this.state.project ? "active" : ""}
              >
                PROJETS
              </a>
            </span>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Menu;
