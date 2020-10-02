import React from "react";
import Carousel from "react-material-ui-carousel";
import mac from "../../assets/images/mac.jpg";
import laptop from "../../assets/images/laptop.jpg";
import computer from "../../assets/images/apple-computer.jpg";
import "./Home.css";
import CardCarousel from "./CardCarousel";

const Home = ({ autoPlay }) => {
  const items = [
    {
      index: 1,
      image: laptop,
      title: "laptop",
      text: "Développement d'application Web",
      nameclass: "img-laptop",
    },
    {
      index: 2,
      image: mac,
      title: "mac",
      text: "Conseils et conception de solutions",
      nameclass: "img-mac",
    },
    {
      index: 3,
      image: computer,
      title: "apple-computer",
      text: "Full Stack Java / Angular / React",
      nameclass: "img-computer",
    },
  ];

  return (
    <Carousel
      autoPlay={autoPlay}
      indicators={true}
      navButtonsAlwaysVisible={true}
      interval={4500}
    >
      {items.map((item) => {
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
