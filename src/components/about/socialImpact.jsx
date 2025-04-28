import React from "react";
import {
  TbHexagonNumber1,
  TbHexagonNumber2,
  TbHexagonNumber3,
  TbHexagonNumber4,
  TbHexagonNumber5,
} from "react-icons/tb";

const impactData = [
  {
    icon: (
      <TbHexagonNumber1 className="text-[#bf6d45] size-14 bg-[#bf6d45]/20 rounded-md p-1" />
    ),
    title: "Community Service Highlights",
    description:
      "From clean-up campaigns to neighborhood tutoring sessions, our members actively contribute to building better communities.",
  },
  {
    icon: (
      <TbHexagonNumber2 className="text-[#bf6d45] size-14 bg-[#bf6d45]/20 rounded-md p-1" />
    ),
    title: "UH Energy Board Involvement",
    description:
      "Participated in strategizing sustainable solutions and promoting clean energy awareness on campus and beyond.",
  },
  {
    icon: (
      <TbHexagonNumber3 className="text-[#bf6d45] size-14 bg-[#bf6d45]/20 rounded-md p-1" />
    ),
    title: "Fundraisers & Campaigns",
    description: (
      <>
        We’ve raised funds for local shelters, educational resources, and health
        awareness.
        <a href="#" className="text-blue-600 underline ml-1">
          View Campaigns
        </a>
      </>
    ),
  },
  {
    icon: (
      <TbHexagonNumber4 className="text-[#bf6d45] size-14 bg-[#bf6d45]/20 rounded-md p-1" />
    ),
    title: "Event Recaps & Photos",
    description:
      "Take a look at memorable moments from past outreach events, exhibitions, and workshops through captivating stories and images.",
  },
  {
    icon: (
      <TbHexagonNumber5 className="text-[#bf6d45] size-14 bg-[#bf6d45]/20 rounded-md p-1" />
    ),
    title: "Ongoing Projects",
    description:
      "We're currently working with local youth initiatives to build tech literacy and provide mentorship.",
  },
];

const SocialImpact = () => {
  return (
    <div className="py-10 px-4 md:px-10">
      <div className=" p-3">
        <h2 className="text-2xl md:text-3xl font-bold text-[#bf6d45] mb-6 font-ubuntu">
          Our Social Impact
        </h2>
        <p className="border-l-2 p-3 mb-3.5  text-sm  font-Montserrat leading-[1.1]">
          Empowering Through Action
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {impactData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 border border-[#f1ebdd] font-Montserrat flex flex-col gap-2 shadow-sm hover:shadow-md transition"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-[#bf6d45]">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialImpact;
