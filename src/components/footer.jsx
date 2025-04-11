import {
  PiTiktokLogoLight,
  PiInstagramLogo,
  PiPinterestLogoBold,
  PiYoutubeLogo,
  PiTwitterLogo,
  PiFacebookLogo
} from "react-icons/pi";

function Footer() {
  return (
    <section className="p-[25px] bg-[#601115] text-[#e3dcdc] ">
    <div className="flex items-center text-center w-[94%] mx-auto footer:flex-row flex-col">
    <div className="flex flex-col items-start w-full footer:w-[20%] mr-[15px]">
        <h1 className="text-3xl border-b-[3px] border-b-[#6b4c2d]">Follow Shiz</h1>
       <div className="flex items-start w-full mt-[10px]">
       <ul className="mr-[80px]">
          <li className="cursor-pointer"><PiTiktokLogoLight className="w-[30px] h-[30px] my-[10px]" /></li>
          <li className="cursor-pointer"><PiInstagramLogo className="w-[30px] h-[30px] my-[10px]" /></li>
          <li className="cursor-pointer"><PiPinterestLogoBold className="w-[30px] h-[30px] my-[10px]" /></li>
        </ul>
        <ul>
          <li className="cursor-pointer"><PiYoutubeLogo className="w-[30px] h-[30px] my-[10px]" /></li>
          <li className="cursor-pointer"><PiTwitterLogo className="w-[30px] h-[30px] my-[10px]" /></li>
          <li className="cursor-pointer"><PiFacebookLogo className="w-[30px] h-[30px] my-[10px]"  /></li>
        </ul>
       </div>
     </div>
     <div className="flex items-start mt-[25px] footer:mt-0 w-full footer:w-[50%]">
     <ul className="w-1/2 flex flex-col items-start">
        <li className="my-[10px] cursor-pointer">HOME</li>
        <li className="my-[10px] cursor-pointer">ABOUT</li>
        <li className="my-[10px] cursor-pointer">CONTACT</li>
      </ul>
      <ul className="w-1/2 flex flex-col items-start">
        <li className="my-[10px] cursor-pointer">IQBALLAZ</li>
        <li className="my-[10px] cursor-pointer">LATEST</li>
        <li className="my-[10px] cursor-pointer md:whitespace-nowrap text-start">CURRENT CAUSE SUPPORTED</li>
      </ul>
     </div>
     <div className="footer:w-[30%] mt-[35px] footer:mt-0 w-full flex flex-col items-start text-start footer:items-end footer:text-end">
      <h1 className="text-3xl">LOGO</h1>
      <p className="my-[20px] leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quasi praesentium assumenda veniam, libero eaque velit tempora at reiciendis, animi hic!</p>
     </div>
    </div>
    </section>
  );
}

export default Footer;
