import React from "react";
import Nav from "../components/navbar";
import Hero from "../components/hero";
import Intro from "../components/intro";
import SocialBar from "../components/footer";
import Photo from "../components/photo";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Intro />
      <Photo />
    </div>
  );
};

export default Home;
