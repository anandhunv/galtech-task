import React from "react";
import image from "../assets/images/flower.png";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";

const AllNutritionNeeds = () => {
  return (
    <div className=" overflow-hidden bg-gradient-to-b from-[#1F3D0C] via-[#1F3D0C] to-[#1F3D0C] text-white py-12 px-6 md:block hidden 2xl:max-w-7xl 2xl:mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold uppercase font-grotesque flex flex-col"> <span>ALL YOUR</span> <span>NUTRITION NEEDS</span> </h2>
        <p className="text-white mt-2 flex flex-col neue-haas-normal font-medium">
          <span>Don’t just take our word for it! See the life changing</span> <span>results of others and start the journey to better health.</span>
        </p>
      </div>

      {/* Scrollable Section */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 max-w-7xl mx-auto">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white text-black p-4 w-56  flex-shrink-0">
              {/* Top Section */}
              <div className="flex items-start  space-x-4">
                {/* Left: Image */}
                <div className="">
                  <img src={image} alt="Vitamin K" className="w-20 h-20 bg-gray-100 rounded-full object-contain" />

                </div>

                {/* Right */}

                <div>
                  <p className="text-gray-500 text-sm">500mg</p>
                  <h3 className="text-[#12254E] font-bold text-2xl flex flex-col font-grotesque">VITAMIN
                    <span> K</span>
                  </h3>
                </div>
              </div>

              {/* Bottom Section*/}
              <div className="mt-4 font-grotesque font-semibold space-y-2">
                <div className="flex items-start gap-1">
                  <FaCircleCheck size={10} className="text-black flex-shrink-0" />

                  <p className="text-sm text-gray-700 leading-tight flex  text-start -mt-1 ">
                    A Chinese herb that has been used traditionally and shown to help treat anxiety and make you calmer by increasing GABA production.
                  </p>
                </div>

                <div className="flex items-start gap-1">
                  <FaCircleCheck size={10} className="text-black flex-shrink-0" />

                  <p className="text-sm text-gray-700 leading-tight flex  text-start -mt-1 ">
                    A Chinese herb that has been used traditionally and shown to help treat anxiety and make you calmer by increasing GABA production.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllNutritionNeeds;
