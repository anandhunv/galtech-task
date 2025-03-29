import React from "react";
import bottleImage from "../assets/images/pricesection.png"; // Replace with actual image path
import { BsCheck2 } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const StartYourJourney = () => {
  return (
    <section className="flex flex-col lg:flex-row-reverse items-center justify-between bg-gray-50 2xl:max-w-7xl 2xl:mx-auto">
      {/* Right Section - Product Image (Appears First on Small Screens) */}
      <div className="w-full flex justify-center mt-8 lg:mt-0 order-first lg:order-none">
        <img src={bottleImage} alt="Zivolife Bottle" className="max-w-full h-auto px-6 md:px-0" />
      </div>

      {/* Left Section - Pricing Details */}
      <div className="text-left px-6 md:px-12 lg:px-32 py-12 w-full ">
        <h2 className="text-[#1F3D0C] text-3xl md:text-nowrap  md:text-4xl font-bold  text-center md:text-left font-grotesque">
          START YOUR JOURNEY
          <br /> TO BETTER HEALTH NOW
        </h2>

        {/* Benefits List */}
        <ul className="space-y-4 text-gray-700 text-lg mt-6 border-t w-full md:w-4/6 border-gray-200 pt-4">
          {[
            { text: "ZIVOLIFE - 30 Servings", price: "$119", salePrice: "$89/mo" },
            { text: "STORAGE CANISTER", price: "$14", salePrice: "Free" },
            { text: "MEASURING SPOON", price: "$8", salePrice: "Free" },
            { text: "16 OZ. GLASS BOTTLE", price: "$10", salePrice: "Free" },
          ].map((item, index) => (
            <li key={index} className="flex items-center justify-between text-base">
              <span className="flex items-center gap-2 font-grotesque   font-bold">
                <BsCheck2 className="text-[#1F3D0C] text-lg" />
                {item.text}
              </span>
              <div className="flex items-center gap-2">
                <span className="line-through text-gray-400 neue-haas-normal">{item.price}</span>
                <strong className="text-[#1F3D0C] text-blg  font-bold neue-haas-medium">{item.salePrice}</strong>
              </div>
            </li>
          ))}
        </ul>

        {/* Price and Button */}
        <div className="flex flex-col items-center mt-6">
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-xl line-through neue-haas-normal">$98</span>
            <span className="text-[#1F3D0C] text-3xl font-bold neue-haas-medium">$89</span>
            <span className="bg-gray-200 text-[#1F3D0C] px-3 py-1 rounded-full text-sm font-bold neue-haas-bold">
              SAVE $54
            </span>
          </div>

          <button className="mt-6 bg-[#1F3D0C] font-grotesque text-white px-8 py-3 rounded-full font-bold text-2xl shadow-md hover:bg-[#1F3D0C] transition-all w-full max-w-xs">
            BUY NOW
          </button>

          {/* Additional Benefits */}
          <div className="mt-4 text-sm text-black">
            <div className="flex flex-wrap items-center justify-center gap-y-2">
              {[
                "Delivered Monthly",
                "60 Day Guarantee",
                "Online portal for easy cancel, skip, or pause",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-1 whitespace-nowrap min-w-0">
                  <IoIosCheckmarkCircleOutline size={18} className="text-[#1F3D0C] flex-shrink-0" />
                  <span className="whitespace-nowrap font-bold neue-haas-medium mr-0.5">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartYourJourney;
