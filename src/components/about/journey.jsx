import React from "react";
import JourneyImg from "../../../public/images/shizraehero.jpg";
const Journey = () => {
  return (
    <div>
      <div className="  bg-[#f1ebdd] flex p-2.5 md:p-5 gap-5 flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col gap-5 md:w-1/2 w-full">
          <h1 className="text-4xl font-semibold font-Rumble  text-[#bf6d45] ">
            My Journey🚀
          </h1>
          <p className="border-l-2 p-3  text-sm  font-Rumble leading-[1.1]">
            The Road That Shaped Me
          </p>
          <p className="text-base font-Rumble">
            A Harvard MBA with nearly a decade of technical leadership in the
            Oil & Gas industry, I bring a distinctive blend of strategic
            expertise and creative vision to every endeavor. As co-owner of
            Iqballaz Customs, Houston’s premier car customization shop, I have
            cultivated a brand rooted in quality, innovation, and cultural
            richness. In 2025, I expanded my journey into digital storytelling,
            curating elevated travel and lifestyle content that resonates with a
            global, aspirational audience. Through a lens of authenticity and
            wanderlust, my platforms inspire others to find the extraordinary
            within the everyday and embrace the art of living well.
          </p>
        </div>
        <div className="flex md:w-1/2 w-2/3 ">
          <img src={JourneyImg} alt="" className=" rounded-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Journey;
