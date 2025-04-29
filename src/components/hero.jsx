import React from "react";
import hero from "../assets/home_cover.png";

function Hero() {
  return (
    <section className="  md:my-[10vh] my-[9vh]  ">
      <img src={hero} alt="" className=" h-[50vh]  md:h-[88vh] w-full" />
    </section>
  );
}

export default Hero;
