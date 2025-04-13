import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
function Intro() {
  return (
    <div className="bg-[#e3dcdc]">
      <div className="p-3.5">
        <h2 className="text-3xl font-bold text-left flex justify-start text-[#6b4c2d] items-center gap-2 font-ubuntu">
          Who is Shiz?
        </h2>
        <p className="border-l-2 p-3 text-sm font-Montserrat leading-[1.1]">
          Know me better through my journey and experiences
        </p>
      </div>

      <section className="text-center  /*text-[#0d0c0d]*/ text-[#6b4c2d] flex flex-col items-center p-[30px]">
        <p className="text-base leading-relaxed font-Montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          cupiditate illum consequuntur doloribus adipisci aliquam repellendus
          temporibus dolor molestiae itaque voluptatem aut explicabo neque
          consectetur sit harum dignissimos excepturi aspernatur in ad, expedita
          quod cumque assumenda! Adipisci ab ipsam, iure aspernatur sapiente
          voluptatum nobis? Corrupti enim quos sapiente ducimus, quis laboriosam
          adipisci laudantium omnis unde accusamus expedita tempore sed quo.
        </p>
        <button className="mt-[20px] bg-[#6b4c2d] flex items-center  text-[#e3dcdc] px-[20px] py-[10px] rounded-full font-Montserrat hover:bg-[#695f4d] transition-all duration-300">
          <a href="#" className="text-sm   flex items-center font-ubuntu">
            More About Shizrae <MdOutlineKeyboardDoubleArrowRight />
          </a>
        </button>
      </section>
    </div>
  );
}

export default Intro;
