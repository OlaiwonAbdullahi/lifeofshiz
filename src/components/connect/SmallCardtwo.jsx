import React from "react";
import { BsSend } from "react-icons/bs";

function SmallCardtwo() {
  return (
    <div className="rounded-xl absolute right-[5%] bottom-[20px] flex flex-col items-center shadow-xl p-6 w-[90%] /*sm:w-[70%]*/ md:w-[40%] h-[75%] bg-white/10 backdrop-blur-md border border-white/30">
      <h1 className="text-2xl font-medium font-Rumble text-[#bf6d45] self-start mb-4">
        Work with me
      </h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full min-h-[90%] overflow-y-auto flex flex-col gap-4 pb-2.5"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#bf6d45] text-sm"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#bf6d45] text-sm"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full p-3 rounded-md border border-gray-300 bg-white/70 focus:outline-none focus:ring-2 focus:ring-[#bf6d45] text-sm"
        />
        <button className=" flex items-center gap-2.5 cursor-pointer bg-[#bf6d45] text-[#f1ebdd] px-6 py-3 rounded-md text-center justify-center font-Rumble hover:bg-[#695f4d] transition-all duration-300">
          Send <BsSend />
        </button>
      </form>
    </div>
  );
}

export default SmallCardtwo;
