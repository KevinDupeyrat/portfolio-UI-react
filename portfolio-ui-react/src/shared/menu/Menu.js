import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  render() {
    return (
      <div className="right-icons">
        <span className="menu">
          <a href="#">PROJETS</a>
        </span>
        <span className="menu">
          <a href="#">SERVICES</a>
        </span>
        <span className="menu">
          <a href="#">A PROPOS</a>
        </span>
        <span className="menu">
          <a href="#">ACCUEIL</a>
        </span>
      </div>
    );
  }
}

export default Menu;
