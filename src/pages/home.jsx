import React from "react";
import Nav from "../components/navbar";
import Hero from "../components/hero";
import Intro from "../components/intro";
import SocialBar from "../components/socialbar";
import Photo from "../components/photo";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Intro />
      <SocialBar />
      <Photo />
    </div>
  );
};

export default Home;
