import React from "react";
import Hero from "../components/hero";
import Intro from "../components/intro";
import Photo from "../components/photo";

const Home = () => {
  return (
    <div className=" bg-[#f1ebdd]">
      <Hero />
      <div className=" px-5">
        <Intro />
        <Photo />
      </div>
    </div>
  );
};

export default Home;
