import React from "react";
import hero from "../../assets/career_cover.png";
const CareerHero = () => {
  return (
    <div>
      <section className=" ">
        <img src={hero} alt="" className=" h-[40vh]  md:h-[70vh] w-full" />
      </section>
    </div>
  );
};

export default CareerHero;
