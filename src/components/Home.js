import React, { Component } from "react";
import Carousel from "./Home_Carousel";
import Cards from "./Home_Cards";
import MoreInfo from "./Home_MoreInfo";

class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <Cards />
        <MoreInfo />
      </>
    );
  }
}

export default Home;
