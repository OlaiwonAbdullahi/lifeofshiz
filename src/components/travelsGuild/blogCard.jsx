const BlogCard = () => {
  return (
    <div className="w-full max-w-md mx-auto mb-6">
      <div className="border border-[#bf6d45]/50 rounded-xl shadow-xl bg-white overflow-hidden">
        <div className="relative">
          <img
            src="https://placehold.co/600x400"
            alt="Blog Thumbnail"
            className="w-full h-[250px] object-cover rounded-t-xl"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-[#bf6d45] mb-3 font-Rumble">
            Blog Title
          </h2>
          <p className="text-basetext-gray-600 font-Rumble mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, hic?
          </p>
          <div className="flex justify-between items-center text-basetext-[#bf6d45] font-Rumble">
            <p>
              <img
                src="https://placehold.co/600x600"
                alt=""
                className=" h-8 w-8 rounded-full inline-block mr-2"
              />
              Author Name
            </p>
            <p>Date</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
