import React from "react";
import "./Experience.css";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#3d3d3d",
    height: "28rem",
  },
}));

const Experience = () => {
  const classes = useStyles();

  return <Card className={classes.card}></Card>;
};

export default Experience;
