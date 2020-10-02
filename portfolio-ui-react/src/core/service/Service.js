import React from "react";
import "./Service.css";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  card: {
    backgroundColor: "#252525",
    height: "28rem",
  },
}));

const Service = () => {
  const classes = useStyles();

  return <Card className={classes.card}></Card>;
};

export default Service;
