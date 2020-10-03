import React from "react";
import Carousel from "react-material-ui-carousel";
import "./Home.css";
import CardCarousel from "./CardCarousel";
import { Carousel_Items } from "../../shared/const/Carousel-model.js";

const Home = ({ autoPlay }) => {
  return (
    <Carousel
      autoPlay={autoPlay}
      indicators={true}
      navButtonsAlwaysVisible={true}
      interval={4500}
    >
      {Carousel_Items.map((item) => {
        return (
          <CardCarousel
            image={item.image}
            key={item.index}
            title={item.title}
            text={item.text}
            nameclass={item.nameclass}
          />
        );
      })}
    </Carousel>
  );
};

export default Home;
