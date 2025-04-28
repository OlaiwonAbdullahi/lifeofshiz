import React from "react";
import {
  PiFacebookLogo,
  PiInstagramLogo,
  PiPinterestLogoBold,
  PiTiktokLogoLight,
  PiTwitterLogo,
  PiYoutubeLogo,
} from "react-icons/pi";
const socialLinks = [
  { icon: <PiTiktokLogoLight className="w-6 h-6" />, label: "Tiktok" },
  { icon: <PiInstagramLogo className="w-6 h-6" />, label: "Instagram" },
  { icon: <PiPinterestLogoBold className="w-6 h-6" />, label: "Pinterest" },
  { icon: <PiYoutubeLogo className="w-6 h-6" />, label: "YouTube" },
  { icon: <PiTwitterLogo className="w-6 h-6" />, label: "Twitter" },
  { icon: <PiFacebookLogo className="w-6 h-6" />, label: "Facebook" },
];

function SmallCard() {
  return (
    <div className="hidden absolute left-[5%] bottom-5 w-[90%] sm:w-[70%] md:w-[40%] h-[70%] p-6 md:flex flex-col items-center justify-start">
      <div className="w-full">
        <div className="flex flex-wrap justify-between w-full gap-y-3">
          {socialLinks.map((item, index) => (
            <div
              key={index}
              className="w-1/2 flex items-center gap-2 cursor-pointer"
            >
              {item.icon}
              <span className="font-Montserrat text-sm text-[#333]">
                Shizrae
              </span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="mt-6 flex items-center gap-2.5 cursor-pointer bg-[#bf6d45] text-[#f1ebdd] px-6 py-3 rounded-md font-Montserrat hover:bg-[#695f4d] transition-all duration-300"
        onClick={() => {
          window.open(
            "https://calendly.com/lifeofshiz95/academic-consult",
            "_blank"
          );
        }}
      >
        Get Advice
      </button>
    </div>
  );
}

export default SmallCard;
