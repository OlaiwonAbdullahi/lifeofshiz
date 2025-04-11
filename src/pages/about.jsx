import React from "react";
import Journey from "../components/journey";
import AboutHero from "../components/aboutHero";
import FunFacts from "../components/funFacts";
import Gallery from "../components/gallery";

const About = () => {
  return (
    <div>
      <AboutHero />
      <Journey />
      <FunFacts />
      <Gallery />
    </div>
  );
};

export default About;
