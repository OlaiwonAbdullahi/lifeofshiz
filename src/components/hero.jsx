import React from "react";

function Hero() {
  return (
    <section className="hero mt-14 md:mt-[65px] h-[calc(100vh-65px)] text-[#e3dcdc] relative flex items-center justify-center p-[30px]">
      <div className="absolute bg-[hsla(0,0%,0%,0.3)] inset-0" />
      <div className="w-[90%] text-start">
        <h1 className="md:text-7xl text-5xl font-bold font-ubuntu leading-[1.1]">
          Living, learning, and <br /> documenting in between.
        </h1>
        <p className="text-xl mt-[10px] font-Montserrat">
          From journals to journeys — this is where I pour it all.
        </p>
      </div>
    </section>
  );
}

export default Hero;
