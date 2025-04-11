import React from "react";
import Journey from "../components/about/journey";
import AboutHero from "../components/about/aboutHero";
import FunFacts from "../components/about/funFacts";
import Gallery from "../components/about/gallery";
import Vision from "../components/about/vision";

const About = () => {
  return (
    <div className="bg-[#e3dcdc]">
      <AboutHero />
      <Journey />
      <FunFacts />
      <Vision />
      <Gallery />
    </div>
  );
};

export default About;
