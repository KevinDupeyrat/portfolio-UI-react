import React from "react";
import "./About.css";
import { Card, Grid, makeStyles } from "@material-ui/core";
import Description from "./description/Description";
import Skills from "./skills/Skills";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#3d3d3d",
    height: "35rem",
    color: "white",
    padding: theme.spacing(10),
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  skills: {
    marginTop: "11rem",
  },
}));

const About = ({ display, skillList }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {/* <div className={display ? 'display' : 'displaynon'}> */}
      <div>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={6}>
            <Grid container justify="center" spacing={2}>
              <Description />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid
              container
              justify="center"
              spacing={2}
              className={classes.skills}
            >
              <Skills skills={skillList} />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Card>
  );
};

export default About;
