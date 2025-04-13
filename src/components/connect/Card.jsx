import React, {useState} from "react";
import SmallCard from "./SmallCard";
import SmallCardtwo from "./SmallCardtwo";
import AdviceBookings from "./adviceBookings";

function Card() {
  const [switchForm, setSwitchForm] = useState(false)
  return (
    <div className="relative w-[95%] md:w-[70%] bg-white mx-auto mt-[30px]  shadow-lg flex flex-col justify-between md:justify-center md:flex-row items-start h-[500px]">
      <div className="flex items-center p-[15px] w-full justify-between md:w-1/2 md:mt-[25px] md:ml-[25px] h-[18%]">
      <h1 className=" md:text-4xl font-bold text-[#695f4d] font-ubuntu">
        Connect with me
      </h1>
      <button
        className="md:hidden flex items-center gap-2.5 cursor-pointer bg-[#6b4c2d] text-[#e3dcdc] px-6 py-3 rounded-md font-Montserrat hover:bg-[#695f4d] transition-all duration-300"
       onClick={()=>{setSwitchForm(!switchForm)}}
        /*onClick={() => setOpenAdviceBooking(!openAdviceBooking)}*/
      >
        {switchForm?"Work with me":"Get Advice"}
      </button>
      </div>
      <img
        className="w-full md:w-1/2 h-[82%] md:h-full object-cover"
        src="/images/collageimg1.jpg"
        alt="cardimg"
      />
      <SmallCard switchForm={switchForm} setSwitchForm={setSwitchForm} />
      {!switchForm ? <SmallCardtwo /> : <AdviceBookings />}
    </div>
  );
}

export default Card;
