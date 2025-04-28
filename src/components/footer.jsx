import {
  PiTiktokLogoLight,
  PiInstagramLogo,
  PiPinterestLogoBold,
  PiYoutubeLogo,
  PiTwitterLogo,
  PiFacebookLogo,
} from "react-icons/pi";
import logo from "../assets/lifeofshiz.png";

function Footer() {
  return (
    <section className="p-[25px] bg-[#9c5b3a] text-[#f1ebdd]">
      <div className="flex flex-col-reverse md:flex-row items-center text-center w-[94%] mx-auto">
        <div className="flex flex-col items-start w-full md:w-[20%] mr-[15px]">
          <h1 className="font-ubuntu text-3xl border-b-[3px] border-b-[#bf6d45]">
            Follow Shizrae
          </h1>
          <div className="flex flex-row mt-[10px]">
            <ul className="mr-[80px] mb-[10px] md:mb-0">
              <li className="cursor-pointer">
                <PiTiktokLogoLight className="w-[30px] h-[30px]" />
              </li>
              <li className="cursor-pointer">
                <PiInstagramLogo className="w-[30px] h-[30px]" />
              </li>
              <li className="cursor-pointer">
                <PiPinterestLogoBold className="w-[30px] h-[30px]" />
              </li>
            </ul>
            <ul>
              <li className="cursor-pointer">
                <PiYoutubeLogo className="w-[30px] h-[30px]" />
              </li>
              <li className="cursor-pointer">
                <PiTwitterLogo className="w-[30px] h-[30px]" />
              </li>
              <li className="cursor-pointer">
                <PiFacebookLogo className="w-[30px] h-[30px]" />
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col items-start mt-[25px] md:mt-0 w-full md:w-[50%]">
          <h2 className=" font-ubuntu">Quick Links</h2>
          <div className="flex w-full md:w-1/2 font-Montserrat">
            <ul className="w-1/2 flex flex-col items-start">
              <li className="my-[10px] cursor-pointer">HOME</li>
              <li className="my-[10px] cursor-pointer">ABOUT</li>
              <li className="my-[10px] cursor-pointer">CONTACT</li>
            </ul>
            <ul className="w-1/2 flex flex-col items-start">
              <li className="my-[10px] cursor-pointer">IQBALLAZ</li>
              <li className="my-[10px] cursor-pointer">LATEST</li>
              <li className="my-[10px] cursor-pointer md:whitespace-nowrap text-start">
                CURRENT CAUSE SUPPORTED
              </li>
            </ul>
          </div>
        </div>

        {/* Logo and Description Section */}
        <div className="md:w-[30%] mt-[35px] md:mt-0 w-full flex flex-col items-start text-start md:items-end md:text-end">
          <img src={logo} className=" h-15 w-auto" />

          <p className="my-[20px] leading-relaxed font-Montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            quasi praesentium assumenda veniam, libero eaque velit tempora at
            reiciendis, animi hic!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
