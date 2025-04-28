import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const funFacts = [
  {
    fact: "Bananas are berries, but strawberries aren't!",
    detail:
      "Botanically speaking, bananas meet all the criteria of a berry, while strawberries do not.",
  },
  {
    fact: "Octopuses have three hearts.",
    detail:
      "Two pump blood to the gills, and one pumps it to the rest of the body.",
  },
  {
    fact: "Honey never spoils.",
    detail:
      "Archaeologists have found 3000-year-old honey in Egyptian tombs that’s still edible!",
  },
  {
    fact: "A day on Venus is longer than a year on Venus.",
    detail:
      "It takes Venus longer to rotate on its axis than to orbit the sun.",
  },
];

const FunFacts = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFact = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      <div className=" p-4">
        <h2 className="text-3xl font-bold text-left mb-3 flex justify-start text-[#bf6d45] items-center gap-2 font-Rumble">
          Little Facts, Big Personality 🧐
        </h2>
        <p className="border-l-2 p-3 mb-3.5  text-sm  font-Rumble leading-[1.1]">
          Fun Facts About Me
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-10 bg-[#f1ebdd]">
        <div className="space-y-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="border border-[#bf6d45]/20 rounded-xl p-4 bg-white/30"
            >
              <button
                onClick={() => toggleFact(index)}
                className="w-full flex justify-between items-center font-semibold text-left text-lg"
              >
                <span>{fact.fact}</span>
                <span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-[#bf6d45]" />
                  ) : (
                    <FaChevronDown className="text-[#bf6d45]" />
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600 text-sm">{fact.detail}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FunFacts;
