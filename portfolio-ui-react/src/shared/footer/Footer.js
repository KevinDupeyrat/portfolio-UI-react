import { Card, CardContent, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  footer: {
    opacity: 1,
    backgroundColor: "#252525",
    color: "white",
  },
  cardContent: {
    textAlign: "center",
    fontSize: "0.8rem",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Card className={classes.footer}>
      <CardContent className={classes.cardContent}>
        <div>Copyright - 2020 Tout droit réservé.</div>
      </CardContent>
    </Card>
  );
};

export default Footer;
