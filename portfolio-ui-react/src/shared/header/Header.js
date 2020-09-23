import { AppBar, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Menu from "./../menu/Menu";
import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    opacity: 1,
    backgroundColor: "black",
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(3),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    color: "white",
    float: "left",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.header}>
      <Typography variant="h6" className={classes.title}>
        PORTFOLIO
      </Typography>
      <div className="menu">
        <Menu />
      </div>
      <div className="right-icons">
        <button>
          <img src="assets/images/linkedin.svg" />
        </button>

        <button>
          <img src="assets/images/github.svg" />
        </button>
      </div>
    </AppBar>
  );
};

export default Header;
