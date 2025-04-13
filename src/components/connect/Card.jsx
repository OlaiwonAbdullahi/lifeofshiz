import React, {useState} from "react";
import SmallCard from "./SmallCard";
import SmallCardtwo from "./SmallCardtwo";
import AdviceBookings from "./adviceBookings";

function Card() {
  const [switchForm, setSwitchForm] = useState(false)
  return (
    <div className="relative w-[95%] md:w-[70%] bg-white mx-auto mt-[30px]  shadow-lg flex items-start h-[500px]">
      <h1 className="w-1/2 mt-[25px] ml-[25px] md:text-4xl font-bold text-[#695f4d] font-ubuntu">
        Connect with me
      </h1>
      <img
        className="w-1/2 h-full object-cover"
        src="/images/collageimg1.jpg"
        alt="cardimg"
      />
      <SmallCard switchForm={switchForm} setSwitchForm={setSwitchForm} />
      {!switchForm ? <SmallCardtwo /> : <AdviceBookings />}
    </div>
  );
}

export default Card;
