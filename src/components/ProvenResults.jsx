import React from "react";
import greendrink from "../assets/images/greenjuice.png"

const ProvenResults = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-36">
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div className="font-grotesque">
        <h2 className="text-2xl md:text-3xl font-bold  text-black">
          FROM FARM TO LIFE. PROVEN RESULTS, BACKED BY SCIENCE
        </h2>
        <p className="text-black mt-4 text-base neue-haas-normal">
          Experience the confidence of proven results. Backed by rigorous
          research, Zivolife delivers tangible benefits you can trust for a
          healthier, happier you.
        </p>
        
        {/* Stats Section */}
        <div className="mt-6 grid grid-cols-2 gap-y-6">
          <div>
            <p className="text-4xl font-bold text-[#1F3D0C] font-grotesque">9</p>
            <p className="text-black text-xs neue-haas-normal">Essential Amino Acids</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#1F3D0C] font-grotesque">50%</p>
            <p className="text-black text-xs neue-haas-normal">Plant Protein</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#1F3D0C] font-grotesque">100%</p>
            <p className="text-black text-xs neue-haas-normal">
              CGMP-certified facilities and batch testing
            </p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#1F3D0C] font-grotesque">100%</p>
            <p className="text-black text-xs neue-haas-normal">
              Pure Klebsormidium Flaccidum var Zivo
            </p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src={greendrink} // Change to actual path
          alt="Green Drink"
          className="w-full max-w-md "
        />
      </div>
    </div>
  </section>
  );
};

export default ProvenResults;