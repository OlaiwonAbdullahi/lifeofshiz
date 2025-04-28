import React from "react";
import hero from "../../assets/about_cover.png";

function AboutHero() {
  return (
    <section className="  md:my-[10vh] my-[9vh]  ">
      <img src={hero} alt="" className=" h-[40vh]  md:h-[70vh] w-full" />
    </section>
  );
}

export default AboutHero;
