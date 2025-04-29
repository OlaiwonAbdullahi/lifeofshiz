import React from "react";
import coverImage from "../assets/home_cover.png";

function Hero() {
  return (

    <section
      className="md:my-[10vh] my-[9vh] bg-cover bg-center bg-no-repeat flex flex-col justify-end items-start text-white text-center h-[50vh] md:h-[88vh]"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <p className="text-base md:text-xl font-semibold mb-12 px-7.5">
        Your corporate cowgirl travel bestie – conquering boardrooms and bucket
        lists.
      </p>

    </section>
  );
}

export default Hero;
