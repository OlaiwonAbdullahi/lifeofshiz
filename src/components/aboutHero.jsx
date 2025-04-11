import React from "react";

function AboutHero() {
  return (
    <section className="hero h-[calc(100vh-80px)] text-[#e3dcdc] relative flex items-center justify-center p-[30px]">
      <div className="absolute bg-[hsla(0,0%,0%,0.3)] inset-0" />
      <div className="w-[90%] text-start">
        <h1 className="text-7xl font-ubuntu ">About Me</h1>
        <p className="border-l-2 p-3.5 mt-2 borderl-[#e3dcdc] text-xl font-bold font-ubuntu leading-[1.1]">
          My daily source of inspiration & authenticity
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
