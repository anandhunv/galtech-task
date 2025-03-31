import React from "react";
import bottleImage from "../assets/images/bottle.png";
import { IoHeartOutline, IoShieldCheckmark } from "react-icons/io5";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { LuHeartHandshake } from "react-icons/lu";
import InfoBoxes from "./InfoBoxes";

const NutritionNeeds = () => {
  return (
    <section className="bg-gradient-to-b from-[#1F3D0C] via-[#1F3D0C] to-[#1F3D0C] text-white 2xl:max-w-7xl 2xl:mx-auto ">
      {/* Main Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center">
        {/* {left} */}
        <div className="lg:w-3/5 text-left lg:px-12 px-5 lg:pt-16  mt-8">
          <h2 className="text-5xl font-bold uppercase flex flex-col font-grotesque-bold">
            <span className="lg:block hidden">ALL YOUR NUTRITIONAL</span>
            <span className="lg:hidden block text-[40px]">The Better
            </span>
            <span className="lg:block hidden">NEEDS</span>
            <span className="lg:hidden block text-[40px]">
              Microalgae</span></h2>


          {/* Info Boxes */}
          <InfoBoxes />

        </div>

        {/* Right: Image Section */}
        <div className="lg:w-2/5 flex justify-end">
          <img src={bottleImage} alt="Zivolife Bottle" className="object-cover w-[120%] lg:w-full" />
        </div>


      </div>

      {/* Bottom Section: Button */}
      <div className="flex flex-col items-center justify-center p-20 pt-5  ">
        <div className=" w-full flex justify-center" >
          <button className="bg-white text-black px-6  py-3 lg:w-1/3  font-grotesque text-2xl  font-bold rounded-full shadow-md hover:bg-gray-200 transition">
            SHOP ZIVOLIFE
          </button>
        </div>

        <div className="flex justify-center items-center gap-0.5 text-xs mt-2.5">
          <IoShieldCheckmark size={18} className="text-white flex-shrink-0" />
          <span className="whitespace-nowrap  font-bold flex "><span className="lg:block hidden">60</span><span className="lg:hidden block">30</span> Day Money-Back Guarantee</span>
        </div>
      </div>

    </section>
  );
};

export default NutritionNeeds;
