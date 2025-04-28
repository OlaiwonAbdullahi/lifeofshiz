// Photo.jsx
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
function NextArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-3 w-10 h-10 bg-[#bf6d45] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#a4542e] z-10"
      onClick={onClick}
    >
      <FaArrowRight className="text-white text-xl" />
    </div>
  );
}

// Custom Previous Arrow
function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-3 w-10 h-10 bg-[#bf6d45] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#a4542e] z-10"
      onClick={onClick}
    >
      <FaArrowLeft className="text-white text-xl" />
    </div>
  );
}

export default function Photo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="md:w-10/12 w-full  mx-auto p-5 bg-[#f1ebdd]">
      <Slider {...settings}>
        <div>
          <img
            src="/images/collageimg1.jpg"
            alt="Collage 1"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>

        <div>
          <img
            src="/images/collageimg2.jpg"
            alt="Collage 2"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>

        <div className="">
          <img
            src="/images/collageimg3.jpg"
            alt="Collage 3"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>
        <div className="">
          <img
            src="/images/collageimg4.jpg"
            alt="Collage 4"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>

        <div>
          <img
            src="/images/collageimg2.jpg"
            alt="Collage 5"
            className="w-full h-[500px] object-cover rounded-md"
          />
        </div>
      </Slider>
    </section>
  );
}
