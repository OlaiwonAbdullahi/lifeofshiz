import React from "react";
import hero from "../assets/home_cover.png";

function Hero() {
  return (
    <section className="   md:my-[10vh]  ">
      <p>living learning, and documenting in between" to “Your corporate cowgirl travel bestie- conquering boardrooms and bucket lists.</p>
      <img src={hero} alt="" className=" h-[50vh]  md:h-[88vh] w-full" />
    </section>
  );
}

export default Hero;
