function Photo() {
  return (
    <section className="photos flex flex-col md:flex-row w-full gap-3 p-5 bg-[#f1ebdd] items-stretch">
      {/* Left large image */}
      <a href="#" className="w-full md:w-1/2 h-[400px] md:h-auto">
        <img
          className="w-full h-full object-cover object-top rounded-md cursor-pointer"
          src="/images/collageimg1.jpg"
          alt="collageimg"
        />
      </a>

      {/* Right collage */}
      <div className="flex flex-col w-full md:w-1/2 gap-3 h-full">
        <a href="#" className="w-full h-full">
          <img
            className="w-full h-full object-cover object-center rounded-md cursor-pointer"
            src="/images/collageimg2.jpg"
            alt="collageimg"
          />
        </a>

        <div className="flex gap-3 h-1/2">
          <a href="#" className="w-1/2 h-full">
            <img
              className="w-full h-full object-cover object-top rounded-md cursor-pointer"
              src="/images/collageimg3.jpg"
              alt="collageimg"
            />
          </a>
          <a href="#" className="w-1/2 h-full">
            <img
              className="w-full h-full object-cover object-top rounded-md cursor-pointer"
              src="/images/collageimg4.jpg"
              alt="collageimg"
            />
          </a>
        </div>
        <a href="#" className="w-full h-full">
          <img
            className="w-full h-full object-cover object-center rounded-md cursor-pointer"
            src="/images/collageimg2.jpg"
            alt="collageimg"
          />
        </a>
      </div>
    </section>
  );
}

export default Photo;
