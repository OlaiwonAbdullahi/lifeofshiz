import React from "react";
import hero from "../../assets/vision_cover.png";

function VisionHero() {
  return (
    <section className="  mb-[10vh]  ">
      <img src={hero} alt="" className=" h-[40vh]  md:h-[70vh] w-full" />
    </section>
  );
}

export default VisionHero;
