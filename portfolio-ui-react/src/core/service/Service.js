import React from "react";
import "./Service.css";
import {
  Card,
  Grid,
  CardContent,
  CardHeader,
  makeStyles,
} from "@material-ui/core";
import { ServiceModel } from "../../shared/const/Services-model.js";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#3d3d3d",
    height: "45rem",
    color: "white",
    padding: theme.spacing(8),
  },
  root: {
    maxWidth: 345,
    backgroundColor: "#4A4A4A",
    color: "white",
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  grid: {
    marginLeft: "8rem",
  },
}));

const Service = ({ display }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <div className={display ? "displayService" : ""}>
        <Grid container spacing={10} className={classes.grid}>
          {ServiceModel.map((service, index) => {
            return (
              <Grid  item key={index}>
                <FormRow service={service} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Card>
  );
};

function FormRow({ service }) {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <img src={service.image} alt="recipe" className={classes.avatar} />
          }
          title={service.title}
        />
        <CardContent>{service.content}</CardContent>
        <CardContent>
          {service.techno.length > 0 ? (
            <span className="span">Technologie utilisées</span>
          ) : (
            ""
          )}
          <div>
            {service.techno.map((tech) => {
              return tech + ". ";
            })}
          </div>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default Service;
