import React, { useState } from "react";
import { FaLaughBeam, FaChevronDown, FaChevronUp } from "react-icons/fa";

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
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2">
        <FaLaughBeam className="text-yellow-500" /> Fun Facts
      </h2>
      <div className="space-y-4">
        {funFacts.map((fact, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-xl p-4 bg-white"
          >
            <button
              onClick={() => toggleFact(index)}
              className="w-full flex justify-between items-center font-semibold text-left text-lg"
            >
              <span>{fact.fact}</span>
              <span>
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-600" />
                ) : (
                  <FaChevronDown className="text-gray-600" />
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
  );
};

export default FunFacts;
