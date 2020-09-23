import {
  MuiThemeProvider,
} from "@material-ui/core";
import React, { Component } from "react";
import "./App.css";
import Header from "./shared/header/Header";  
import THEME from "./theme";



class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <div>
          <Header />
        </div>
        <div>{/* HOME */}</div>
      </MuiThemeProvider>
    );
  }
}

export default App;
