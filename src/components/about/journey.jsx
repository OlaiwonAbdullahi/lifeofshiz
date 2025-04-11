import React from "react";
import JourneyImg from "../../../public/images/shizraehero.jpg";
const Journey = () => {
  return (
    <div>
      <div className="  bg-[#e3dcdc] flex p-2.5 md:p-5 gap-5 flex-col md:flex-row justify-center items-center">
        <div className="flex flex-col gap-5 md:w-1/2 w-full">
          <h1 className="text-4xl font-semibold font-ubuntu  text-[#6b4c2d] ">
            My Journey
          </h1>
          <p className="border-l-2 p-3  text-sm  font-Montserrat leading-[1.1]">
            The Road That Shaped Me
          </p>
          <p className="text-base font-Montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            voluptatibus, cumque, nobis, nihil eveniet libero doloremque
            distinctio sequi voluptates sint ratione reprehenderit. Quisquam
            incidunt, quaerat iure cumque saepe necessitatibus alias. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Nobis minima nam
            obcaecati distinctio assumenda, debitis sequi aliquam atque nesciunt
            quod quis pariatur. Architecto repellendus, quia ad mollitia
            expedita harum quidem.
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
