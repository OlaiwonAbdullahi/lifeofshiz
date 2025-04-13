import React from "react";

const Destination = () => {
  return (
    <div>
      <div className="bg-[#e3dcdc] p-1.5">
        <div className="p-3.5">
          <h2 className="text-3xl font-bold text-left flex justify-start text-[#6b4c2d] items-center gap-2 font-ubuntu">
            Destination Diaries 📙
          </h2>
          <p className="border-l-2 p-3 text-sm font-Montserrat leading-[1.1]">
            Exploring the World, One Story at a Time
          </p>
        </div>

        <section className="photos flex items-start h-[600px] p-[10px] bg-[#e3dcdc]">
          {/* First Big Image */}
          <a
            href="#"
            className="h-full w-1/2 mr-[10px] group relative overflow-hidden"
          >
            <img
              className="h-full w-full object-cover object-top cursor-pointer transition duration-300 group-hover:opacity-0 rounded-2xl"
              src="/images/collageimg1.jpg"
              alt="collageimg"
            />
            <div className="  rounded-2xl absolute top-0 left-0 h-full w-full bg-[#6b4c2d]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
              <p className="text-lg font-bold">Explore Morocco</p>
            </div>
          </a>

          {/* Right Side Grid */}
          <div className="flex flex-col w-1/2 h-full">
            {/* Top Right Image */}
            <a href="#" className="w-full h-1/2 group relative overflow-hidden">
              <img
                className="  rounded-2xl w-full h-full object-cover object-center cursor-pointer transition duration-300 group-hover:opacity-0"
                src="/images/collageimg2.jpg"
                alt="collageimg"
              />
              <div className="  rounded-2xl absolute top-0 left-0 h-full w-full bg-[#6b4c2d]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                <p className="text-lg font-bold">Wander through Istanbul</p>
              </div>
            </a>

            {/* Bottom Two Images */}
            <div className="flex items-start h-1/2 pt-[10px]">
              <a
                href="#"
                className="mr-[10px] w-1/2 h-full group relative overflow-hidden"
              >
                <img
                  className="w-full h-full object-cover object-top cursor-pointer transition duration-300 group-hover:opacity-0"
                  src="/images/collageimg3.jpg"
                  alt="collageimg"
                />
                <div className="  rounded-2xl absolute top-0 left-0 h-full w-full bg-[#6b4c2d]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-lg font-bold">Sands of Dubai</p>
                </div>
              </a>

              <a
                href="#"
                className="w-1/2 h-full group relative overflow-hidden"
              >
                <img
                  className="  rounded-2xl w-full h-full object-cover object-top cursor-pointer transition duration-300 group-hover:opacity-0"
                  src="/images/collageimg4.jpg"
                  alt="collageimg"
                />
                <div className="  rounded-2xl absolute top-0 left-0 h-full w-full bg-[#6b4c2d]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100">
                  <p className="text-lg font-bold">Chasing Sunsets in Greece</p>
                </div>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Destination;
