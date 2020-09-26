import React from "react";
import "./About.css";
import { Card, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
    card: {
      backgroundColor: "#3d3d3d",
      height: "28rem",
    },
  }));

const About = () => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>

        </Card>
    );
}

export default About;