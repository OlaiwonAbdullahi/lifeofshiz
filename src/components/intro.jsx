import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
function Intro() {
  return (
    <div className="bg-[#f1ebdd]">
      <div className="p-3.5">
        <h2 className="text-3xl font-bold text-left flex justify-start text-[#bf6d45] items-center gap-2 font-ubuntu">
          Who is Shizrae?
        </h2>
        <p className="border-l-2 p-3 text-sm font-Montserrat leading-[1.1]">
          Engineer |MBA|TRAVELS|CONTENT CREATOR
        </p>
      </div>

      <section className="text-center  /*text-[#0d0c0d]*/ text-[#bf6d45] flex flex-col items-center p-[30px]">
        <p className="text-base leading-relaxed font-Montserrat  w-10/12  text-center">
          A Harvard MBA with nearly a decade of technical leadership in the Oil
          & Gas industry, I bring a distinctive blend of strategic expertise and
          creative vision to every endeavor. As co-owner of Iqballaz Customs,
          Houston’s premier car customization shop, I have cultivated a brand
          rooted in quality, innovation, and cultural richness. In 2025, I
          expanded my journey into digital storytelling, curating elevated
          travel and lifestyle content that resonates with a global,
          aspirational audience. Through a lens of authenticity and wanderlust,
          my platforms inspire others to find the extraordinary within the
          everyday and embrace the art of living well.
        </p>
        <button className="mt-[20px] bg-[#bf6d45] flex items-center  text-[#f1ebdd] px-[20px] py-[10px] rounded-full font-Montserrat hover:bg-[#695f4d] transition-all duration-300">
          <a href="#" className="text-sm   flex items-center font-ubuntu">
            More About Shizrae <MdOutlineKeyboardDoubleArrowRight />
          </a>
        </button>
      </section>
    </div>
  );
}

export default Intro;
