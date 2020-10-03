import { AppBar, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Menu from "./../menu/Menu";
import "./Header.css";
import linkedin from "../../assets/images/linkedin.svg";
import github from "../../assets/images/github.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    color: "white",
    float: "left",
    opacity: 1,
  },
}));

const openLinkedin = () => {
  window.open("https://www.linkedin.com/in/kevin-dupeyrat/", "_blank");
};

const openGithub = () => {
  window.open("https://github.com/KevinDupeyrat/", "_blank");
};

const Header = ({ menuState, scrollTo, opacityClass }) => {
  const classes = useStyles();

  return (
      <AppBar position="static" className={opacityClass}>
        <Typography variant="h6" className={classes.title}>
          PORTFOLIO
        </Typography>
        <div className="menu">
          <Menu menuState={menuState} scrollTo={scrollTo} />
        </div>
        <div className="right-icons">
          <img src={linkedin} alt="linkedin" onClick={() => openLinkedin()} />
          <img src={github} alt="github" onClick={() => openGithub} />
        </div>
      </AppBar>
  );
};

export default Header;
