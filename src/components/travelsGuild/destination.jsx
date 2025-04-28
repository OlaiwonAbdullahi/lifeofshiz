import React from "react";

const Destination = () => {
  return (
    <div className="bg-[#f1ebdd] p-1.5">
      <div className="p-3.5">
        <h2 className="text-3xl font-bold text-left flex justify-start text-[#bf6d45] items-center gap-2 font-Rumble">
          Destination Diaries 📙
        </h2>
        <p className="border-l-2 p-3 text-sm font-Rumble leading-[1.1]">
          Exploring the World, One Story at a Time
        </p>
      </div>

      <section className="photos flex flex-col md:flex-row w-full gap-3 p-3 items-stretch">
        {/* Left Big Image */}
        <a
          href="#"
          className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto group relative overflow-hidden rounded-2xl"
        >
          <img
            className="w-full h-full object-cover object-top transition duration-300 group-hover:opacity-0 rounded-2xl"
            src="/images/collageimg1.jpg"
            alt="collageimg"
          />
          <div className="absolute top-0 left-0 h-full w-full bg-[#bf6d45]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl">
            <p className="text-lg font-bold">Explore Morocco</p>
          </div>
        </a>

        {/* Right Side Collage */}
        <div className="w-full md:w-1/2 flex flex-col gap-3">
          {/* Top Right */}
          <a
            href="#"
            className="w-full aspect-[2/1] group relative overflow-hidden rounded-2xl"
          >
            <img
              className="w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0 rounded-2xl"
              src="/images/collageimg2.jpg"
              alt="collageimg"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-[#bf6d45]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl">
              <p className="text-lg font-bold">Wander through Istanbul</p>
            </div>
          </a>

          {/* Bottom two side-by-side */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="w-full sm:w-1/2 aspect-[4/3] group relative overflow-hidden rounded-2xl"
            >
              <img
                className="w-full h-full object-cover object-top transition duration-300 group-hover:opacity-0 rounded-2xl"
                src="/images/collageimg3.jpg"
                alt="collageimg"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-[#bf6d45]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl">
                <p className="text-lg font-bold">Sands of Dubai</p>
              </div>
            </a>

            <a
              href="#"
              className="w-full sm:w-1/2 aspect-[4/3] group relative overflow-hidden rounded-2xl"
            >
              <img
                className="w-full h-full object-cover object-top transition duration-300 group-hover:opacity-0 rounded-2xl"
                src="/images/collageimg4.jpg"
                alt="collageimg"
              />
              <div className="absolute top-0 left-0 h-full w-full bg-[#bf6d45]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl">
                <p className="text-lg font-bold">Chasing Sunsets in Greece</p>
              </div>
            </a>
          </div>
          <a
            href="#"
            className="w-full aspect-[2/1] group relative overflow-hidden rounded-2xl"
          >
            <img
              className="w-full h-full object-cover object-center transition duration-300 group-hover:opacity-0 rounded-2xl"
              src="/images/collageimg2.jpg"
              alt="collageimg"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-[#bf6d45]/90 text-white flex items-center justify-center opacity-0 transition duration-300 group-hover:opacity-100 rounded-2xl">
              <p className="text-lg font-bold">Wander through Istanbul</p>
            </div>
          </a>
        </div>
      </section>
      <div className=" text-center flex flex-col items-center p-[30px] font-Rumble gap-3.5">
        <h2>Wants to join Shizrae on her Next Tour?</h2>
        <a href="https://calendly.com/lifeofshiz95/30min">
          <button className=" bg-[#bf6d45] p-2 rounded-full px-2.5 text-[#f1ebdd] font-Rumble hover:bg-[#63512f] transition-all duration-300">
            Book a Call
          </button>
        </a>{" "}
      </div>
    </div>
  );
};

export default Destination;
