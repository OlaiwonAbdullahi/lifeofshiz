import React from "react";
import {
  PiAmazonLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiPinterestLogoBold,
  PiTiktokLogoLight,
  PiYoutubeLogo,
} from "react-icons/pi";
const socialLinks = [
  {
    icon: <PiTiktokLogoLight className="w-6 h-6" />,
    label: "Tiktok",
    link: "https://www.tiktok.com/@shizraeiqbal",
  },
  {
    icon: <PiInstagramLogo className="w-6 h-6" />,
    label: "Instagram",
    link: "https://www.instagram.com/shizraeiqbal",
  },
  {
    icon: <PiPinterestLogoBold className="w-6 h-6" />,
    label: "Pinterest",
    link: "https://tr.ee/fn_Qg16C3G",
  },
  {
    icon: <PiYoutubeLogo className="w-6 h-6" />,
    label: "YouTube",
    link: "http://youtube.com/@lifeofshiz",
  },
  {
    icon: <PiAmazonLogo className="w-6 h-6" />,
    label: "Twitter",
    link: "https://r.amzlink.to/?btn_url=https%3A%2F%2Fwww.amazon.com%2Fshop%2Fshizraeiqbal&btn_ref=org-433bb393e1b8b503",
  },
  {
    icon: <PiLinkedinLogo className="w-6 h-6" />,
    label: "Facebook",
    link: "https://www.linkedin.com/in/shizraeiqbal/",
  },
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
              <span className="font-Rumble text-basetext-[#333]">Shizrae</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="mt-6 flex items-center gap-2.5 cursor-pointer bg-[#bf6d45] text-[#f1ebdd] px-6 py-3 rounded-md font-Rumble hover:bg-[#695f4d] transition-all duration-300"
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
