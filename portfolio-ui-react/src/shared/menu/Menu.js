import { Grid } from "@material-ui/core";
import React from "react";
import MenuLink from "./menu-link/MenuLink";
import "./Menu.css";

const Menu = ({ menuState, scrollTo }) => {
  return (
    <div>
      <Grid container spacing={1}>
        <MenuLink
          classNameActive={menuState.accueil ? "active" : ""}
          scrollTo={scrollTo}
          keyLink="home"
          label="ACCUEIL"
        />

        <MenuLink
          classNameActive={menuState.about ? "active" : ""}
          scrollTo={scrollTo}
          keyLink="about"
          label="A PROPOS"
        />

        <MenuLink
          classNameActive={menuState.service ? "active" : ""}
          scrollTo={scrollTo}
          keyLink="service"
          label="SERVICES"
        />

        <MenuLink
          classNameActive={menuState.project ? "active" : ""}
          scrollTo={scrollTo}
          keyLink="projects"
          label="PROJETS"
        />
      </Grid>
    </div>
  );
};

export default Menu;
