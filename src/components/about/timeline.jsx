import React from "react";

const timelineData = [
  {
    title: "Started My Journey",
    date: "Jan 2020",
    description:
      "Created my first content account and started sharing lifestyle tips.",
  },
  {
    title: "Hit 10K Followers",
    date: "May 2020",
    description:
      "Reached my first major milestone — 10,000 followers on Instagram!",
  },
  {
    title: "First Brand Collaboration",
    date: "Oct 2020",
    description:
      "Partnered with GlowSkin Co. for my first sponsored skincare post.",
  },
  {
    title: "Launched My Own Product",
    date: "June 2021",
    description: "Released my first merch drop — it sold out in 48 hours!",
  },
  {
    title: "100K+ Community Strong",
    date: "July 2022",
    description: "Celebrated reaching 100,000 amazing followers 💖.",
  },
  {
    title: "Featured in Vogue",
    date: "March 2023",
    description: "Got featured in Vogue’s ‘Top Influencers to Watch’ article.",
  },
  {
    title: "Started My Podcast",
    date: "August 2023",
    description:
      "Launched 'Real Talk with [YourName]' – sharing stories and interviews.",
  },
  {
    title: "Major Global Collab",
    date: "Jan 2024",
    description:
      "Partnered with Nike for their new campaign — a dream come true!",
  },
  {
    title: "What's Next?",
    date: "2025 & Beyond",
    description:
      "Expanding into coaching, speaking gigs, and launching my wellness brand ✨.",
  },
];

const Timeline = () => {
  return (
    <div className=" p-4">
      <h2 className="text-3xl font-bold text-left mb-3 flex justify-start text-[#bf6d45] items-center gap-2 font-ubuntu">
        Brand Evolution Timeline 📅
      </h2>
      <p className="border-l-2 p-3 mb-3.5  text-sm  font-Montserrat leading-[1.1]">
        Milestones That Shaped My Brand
      </p>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#bf6d45]"></div>

          <div className="flex flex-col gap-16">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center relative"
                >
                  {isLeft ? (
                    <>
                      {/* Left content */}
                      <div className="w-full md:w-1/2 md:pr-8">
                        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
                          <h3 className="text-xl font-semibold font-ubuntu">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500  font-Montserrat">
                            {item.date}
                          </p>
                          <p className="text-gray-700 mt-2  font-Montserrat">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {/* Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#bf6d45] rounded-full border-4 border-white z-10"></div>
                      {/* Empty space on right */}
                      <div className="hidden md:block md:w-1/2" />
                    </>
                  ) : (
                    <>
                      {/* Empty space on left */}
                      <div className="hidden md:block md:w-1/2" />
                      {/* Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#bf6d45] rounded-full border-4 border-white z-10"></div>
                      {/* Right content */}
                      <div className="w-full md:w-1/2 md:pl-8 md:order-last">
                        <div className="bg-white shadow-md p-6 rounded-xl border border-gray-200">
                          <h3 className="text-xl font-semibold font-ubuntu">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 font-Montserrat">
                            {item.date}
                          </p>
                          <p className="text-gray-700 mt-2 font-Montserrat">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
