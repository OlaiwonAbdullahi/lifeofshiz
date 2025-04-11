import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
function Intro() {
  return (
    <section className="text-center bg-[#e3dcdc] /*text-[#0d0c0d]*/ text-[#6b4c2d] flex flex-col items-center p-[30px]">
      <h1 className="mb-[15px] text-3xl font-bold font-ubuntu">Who is Shiz?</h1>
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
  );
}

export default Intro;
