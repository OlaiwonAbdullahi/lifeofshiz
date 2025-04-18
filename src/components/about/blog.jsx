import React from "react";
import BlogCard from "../travelsGuild/blogCard";

const Blog = () => {
  return (
    <div>
      <div className=" p-4">
        <h2 className="text-3xl font-bold text-left mb-3 flex justify-start text-[#6b4c2d] items-center gap-2 font-ubuntu">
          Shizrae Blog: Trends, Tips, and Insights 📝
        </h2>
        <p className="border-l-2 p-3 mb-3.5  text-sm  font-Montserrat leading-[1.1]">
          Insights from the Shizrae's World
        </p>
        <div className="">
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default Blog;
