import React from "react";
import image from "../assets/images/green_bacteria.png";

const ScienceBackedSection = () => {
  return (
    <section className="flex flex-col items-center md:items-center justify-center bg-[rgba(253,251,243,1)] md:px-6 px-2 py-6 md:py-12 2xl:max-w-7xl 2xl:mx-auto">
      <div className="max-w-4xl flex flex-col md:flex-row items-start md:items-center gap-8  px-3 py-2 md:p-8">
       {/* text section */}
        <div className="flex-1 text-left ">
          <span className="inline-block bg-gray-200 text-[#1F3D0C] font-grotesque text-[22px] font-semibold px-3.5 py-0.5 rounded-full">
            Science Backed
          </span>
          <h2 className="text-4xl md:text-4xl font-bold font-grotesque text-black mt-4">
            100% Klebsormidium Flaccidum var ZL01.
          </h2>
          <p className="text-black md:text-[22px] text-xl mt-4 neue-haas-normal font-medium">
            The Klebsormidium flaccidum genome offers unique benefits due to its ability to thrive in
            extreme conditions like UV radiation, temperature extremes, and starvation.
          </p>
          <p className="text-black md:text-[22px] text-xl mt-4 neue-haas-normal font-medium">
            Its nutrient-rich biomass, containing proteins, carbohydrates, and lipids, provides unique
            bioactive compounds not typically found in other algae or plants, making it exceptionally
            nutritious and resilient.
          </p>
        </div>
        <div className="flex   justify-center items-center  md:justify-center  w-full  h-[250px] md:w-[400px] md:h-[500px] overflow-hidden">
        <img
    src={image}
    alt="Klebsormidium Flaccidum"
    className="w-full h-full object-cover"
  />
</div>

      </div>
    </section>
  );
};

export default ScienceBackedSection;
