import React from "react";
import CareerHero from "../components/career/careerHero";
import SpeakingEngagements from "../components/career/speaking";
import ProjectsWorkedOn from "../components/career/projects";

const Career = () => {
  return (
    <div>
      <CareerHero />
      <SpeakingEngagements />
      <ProjectsWorkedOn />
    </div>
  );
};

export default Career;
