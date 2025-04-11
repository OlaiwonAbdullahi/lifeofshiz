import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
function Intro() {
  return (
    <section className="text-center bg-[#e3dcdc] /*text-[#0d0c0d]*/ text-[#6b4c2d] flex flex-col items-center p-[30px]">
      <h1 className="mb-[15px] text-3xl font-bold">Who is Shiz?</h1>
      <p className="text-xl leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        cupiditate illum consequuntur doloribus adipisci aliquam repellendus
        temporibus dolor molestiae itaque voluptatem aut explicabo neque
        consectetur sit harum dignissimos excepturi aspernatur in ad, expedita
        quod cumque assumenda! Adipisci ab ipsam, iure aspernatur sapiente
        voluptatum nobis? Corrupti enim quos sapiente ducimus, quis laboriosam
        adipisci laudantium omnis unde accusamus expedita tempore sed quo.
      </p>
      <a
        href="#"
        className="text-[#601115] text-xl mt-[10px] border-b-[2px] flex items-center"
      >
        More About Shizrae <MdOutlineKeyboardDoubleArrowRight />
      </a>
    </section>
  );
}

export default Intro;
