
import React from "react";

const bucketList = [
  { title: "Smell a flower", imgLink: "/images/collageimg1.jpg" },
  { title: "Climb a mountain", imgLink: "/images/collageimg1.jpg" },
  { title: "Skydive", imgLink: "/images/collageimg1.jpg" },
];

function BucketList() {
  return (
    <section className="bg-[#e3dcdc] p-[30px] text-[#6b4c2d]">
      <h2 className="text-3xl font-bold text-left mb-3 flex justify-start text-[#6b4c2d] items-center gap-2 font-ubuntu">
        Shizrae's Bucket List 🌍
      </h2>
      <p className="border-l-2 p-3 mb-3.5  text-sm  font-Montserrat leading-[1.1]">
        CheckOut my BucketList
      </p>
      <div className="bucketListgrid">
        {bucketList.map((item, index) => (
          <div className="bg-white cursor-pointer rounded-[15px]" key={index}>
            <img
              className="rounded-tl-[15px] rounded-tr-[15px] w-full"
              src={item.imgLink}
              alt={item.title}
            />
            <h2 className="text-xl p-[20px]">{item.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BucketList;
