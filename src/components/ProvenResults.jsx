import React from "react";
import greendrink from "../assets/images/greenjuice.png";

const ProvenResults = () => {
  return (
    <section className="md:py-28 px-6 md:px-3 2xl:max-w-7xl 2xl:mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-center ml-0 md:ml-20">
        {/* Left Content */}
        <div className="font-grotesque py-10 w-full  md:w-1/2 text-start md:text-left">
<h2 className="text-[36px] md:text-5xl font-bold font-grotesque-bold  text-black leading-tight md:leading-none">
  FROM FARM TO LIFE. PROVEN RESULTS, BACKED BY SCIENCE
</h2>


          <p className="text-black mt-4 text-lg md:text-[22px] neue-haas-normal">
            Experience the confidence of proven results. Backed by rigorous research, 
            Zivolife delivers tangible benefits you can trust for a healthier, happier you.
          </p>

 {/* small screen Image */}
 <div className="w-full  md:hidden    justify-center my-5 ">
          <img src={greendrink} alt="Green Drink" className=" object-cover" />
        </div>
          {/* Stats Section */}
          <div className="mt-6 grid grid-cols-2 gap-6 md:gap-10">
            <div>
              <p className="text-5xl md:text-7xl font-bold text-[#1F3D0C]">9</p>
              <p className="text-black text-sm neue-haas-normal">Essential Amino Acids</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-bold text-[#1F3D0C]">50%</p>
              <p className="text-black text-sm neue-haas-normal">Plant Protein</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-bold text-[#1F3D0C]">100%</p>
              <p className="text-black text-sm neue-haas-normal">
                CGMP-certified facilities and batch testing
              </p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-bold text-[#1F3D0C]">100%</p>
              <p className="text-black text-sm neue-haas-normal">
                Pure Klebsormidium Flaccidum var Zivo
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 md:flex hidden justify-center md:justify-start md:px-5 mb-8 md:mb-0">
          <img src={greendrink} alt="Green Drink" className="w-4/5 md:w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ProvenResults;
