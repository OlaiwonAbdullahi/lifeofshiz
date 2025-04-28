import React from "react";
import Hero from "../components/hero";
import Intro from "../components/intro";
import Photo from "../components/photo";

const Home = () => {
  return (
    <div className=" bg-[#f1ebdd]">
      <Hero />
      <Intro />
      <Photo />
    </div>
  );
};

export default Home;
