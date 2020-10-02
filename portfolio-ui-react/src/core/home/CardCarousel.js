import { Card, CardMedia, makeStyles } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles(() => ({
    cardContent: {
      textAlign: "center",
      backgroundColor: "#252525",
      height: "40rem",
    },
  }));
  
const CardCarousel = ({ image, title, nameclass, text }) => {
    const classes = useStyles();
    return (
      <Card>
        <CardMedia image={image} title={title} className={classes.cardContent}>
          <div className={nameclass}>{text}</div>
        </CardMedia>
      </Card>
    );
  }

  export default CardCarousel;