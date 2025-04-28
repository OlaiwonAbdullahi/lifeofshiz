function Gallery() {
  return (
    <div className="  bg-[#f1ebdd] p-1.5">
      <div className=" p-3.5">
        <h2 className="text-3xl font-bold text-left  flex justify-start text-[#bf6d45] items-center gap-2 font-Rumble">
          My Moments in Frames📸
        </h2>
        <p className="border-l-2 p-3  text-sm  font-Rumble leading-[1.1]">
          A glimpse into my world through my lens
        </p>
      </div>
      <section className="photos flex items-start h-[600px] p-[10px] bg-[#f1ebdd]">
        <a href="#" className="h-full w-1/2 mr-[10px]">
          <img
            className="h-full w-full object-cover object-top  cursor-pointer"
            src="/images/collageimg1.jpg"
            alt="collageimg"
          />
        </a>
        <div className="flex flex-col w-1/2 h-full">
          <a href="#" className="w-full h-1/2">
            <img
              className="w-full h-full object-cover object-center cursor-pointer"
              src="/images/collageimg2.jpg"
              alt="collageimg"
            />
          </a>
          <div className="flex items-start h-1/2 pt-[10px]">
            <a href="#" className="mr-[10px] w-1/2 h-full">
              <img
                className="w-full h-full object-cover object-top  cursor-pointer"
                src="/images/collageimg3.jpg"
                alt="collageimg"
              />
            </a>
            <a href="#" className="w-1/2 h-full">
              <img
                className="w-full h-full object-cover object-top cursor-pointer"
                src="/images/collageimg4.jpg"
                alt="collageimg"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
