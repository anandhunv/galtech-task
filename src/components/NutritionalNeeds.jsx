import React from "react";
import bottleImage from "../assets/images/bottle.png";
import { IoHeartOutline, IoShieldCheckmark } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuHeartHandshake } from "react-icons/lu";

const NutritionNeeds = () => {
  return (
    <div className="bg-gradient-to-b from-[#1F3D0C] via-[#1F3D0C] to-[#1F3D0C] text-white px-">
      {/* Main Section: Text & Image */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* {left} */}
      <div className="lg:w-3/5 text-left px-16 pt-16 ">
          <h2 className="text-4xl font-bold uppercase flex flex-col font-grotesque">ALL YOUR NUTRITIONAL <span>NEEDS</span></h2>

          {/* Info Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="bg-white flex   p-4 border border-gray-300">
                <div className="  flex  items-center p-1.5">
                <LuHeartHandshake size={22} className="text-[#1F3D0C] " />
                </div>
                <div>
                <h3 className="font-bold text-2xl flex items-center text-[#1F3D0C] gap-2  font-grotesque">
                   FIGHTS INFLAMMATION
                </h3>
                <p className="text-base text-black mt-1 neue-haas-normal font-medium ">
                  Sharpen your mind and enhance concentration, helping you perform your best in all tasks, and enhance concentration, helping.
                </p>
                </div>
                
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image Section */}
        {/* Right: Image Section */}
<div className="lg:w-2/5  flex justify-end ">
  <img src={bottleImage} alt="Zivolife Bottle" className="object-contain max-h-screen w-[450px]" />
</div>

      </div>

      {/* Bottom Section: Button */}
      <div className="flex flex-col items-center justify-center p-20 pt-5  ">
        <div className=" w-full flex justify-center" >
        <button className="bg-white text-black px-6  py-3 w-1/3  font-grotesque text-2xl  font-bold rounded-full shadow-md hover:bg-gray-200 transition">
          SHOP ZIVOLIFE
        </button>
        </div>

        <div className="flex justify-center items-center gap-0.5 text-xs mt-2.5">
           <IoShieldCheckmark size={18} className="text-white flex-shrink-0" />
                            <span className="whitespace-nowrap  font-bold neue-haas-medium">60 Day Money-Back Guarantee</span>
      </div>
      </div>
     
    </div>
  );
};

export default NutritionNeeds;
