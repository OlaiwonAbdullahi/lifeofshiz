import React from "react";
import Journey from "../components/about/journey";
import AboutHero from "../components/about/aboutHero";
import FunFacts from "../components/about/funFacts";
import Gallery from "../components/about/gallery";
import Vision from "../components/about/vision";
import Timeline from "../components/about/timeline";
import SocialImpact from "../components/about/socialImpact";

const About = () => {
  return (
    <div className="bg-[#e3dcdc]">
      <AboutHero />
      <Journey />
      <FunFacts />
      <Vision />
      <Timeline />
      <SocialImpact />
      <Gallery />
    </div>
  );
};

export default About;
