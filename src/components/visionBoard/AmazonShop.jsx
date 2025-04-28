import React from "react";

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Short description of the product.",
    image: "https://placehold.co/600x400",
    link: "#", // Replace with your Amazon affiliate link
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is another favorite item I use!",
    image: "https://placehold.co/600x400",
    link: "#",
  },
  {
    id: 3,
    name: "Product 3",
    description: "A must-have item I recommend.",
    image: "https://placehold.co/600x400",
    link: "#",
  },
];

const AmazonShop = () => {
  return (
    <div className=" p-4">
      <h2 className="text-3xl font-bold text-left mb-3 flex justify-start text-[#bf6d45] items-center gap-2 font-Rumble">
        My Amazon Picks 🛍️
      </h2>
      <p className="border-l-2 p-3 mb-3.5  text-base font-Rumble leading-[1.1]">
        Shop my favorite products directly from Amazon!
      </p>
      <section className="bg-white pb-16 px-6 md:px-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-2xl shadow-md p-4 hover:shadow-xl transition"
            >
              <div className="mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded-xl w-full h-64"
                />
              </div>
              <h3 className="text-2xl font-Rumble font-semibold text-[#bf6d45]">
                {product.name}
              </h3>
              <p className="text-gray-500 font-Rumble mb-2">
                {product.description}
              </p>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-[#bf6d45]  font-Rumble text-white font-medium rounded-xl hover:bg-yellow-600 transition"
              >
                Shop on Amazon
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AmazonShop;
