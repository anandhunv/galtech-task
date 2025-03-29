import React from "react";
import image from "../assets/images/green_bacteria.png"

const ScienceBackedSection = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12">
      <div className="max-w-4xl flex flex-col md:flex-row items-center gap-8 bg-white p-8 ">
        <div className="flex-1 text-center md:text-left">
          <span className="inline-block bg-gray-100 text-[#1F3D0C] font-grotesque text-lg font-semibold px-3 py-1 rounded-full">
            Science Backed
          </span>
          <h2 className="text-2xl md:text-4xl font-bold font-grotesque text-gray-900 mt-4">
            100% Klebsormidium Flaccidum var ZL01.
          </h2>
          <p className="text-black mt-4 neue-haas-normal font-medium">
            The Klebsormidium flaccidum genome offers unique benefits due to its ability to thrive in
            extreme conditions like UV radiation, temperature extremes, and starvation.
          </p>
          <p className="text-black mt-4 neue-haas-normal font-medium">
            Its nutrient-rich biomass, containing proteins, carbohydrates, and lipids, provides unique
            bioactive compounds not typically found in other algae or plants, making it exceptionally
            nutritious and resilient.
          </p>
        </div>
        <div className="flex-1">
          <img
            src={image}
            alt="Klebsormidium Flaccidum"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default ScienceBackedSection;
