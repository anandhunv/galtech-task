import React from "react";
import bottleImage from "../assets/images/pricesection.png";  
import { BsCheck2 } from "react-icons/bs";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const StartYourJourney = () => {
  return (
    <section className="flex flex-col md:flex-row-reverse items-center justify-between bg-gray-50 2xl:max-w-7xl 2xl:mx-auto ">
      {/* Right Section - Product Image small screen */}
      <div className="w-full md:flex hidden justify-center  lg:mt-0 order-first lg:order-none">
        <img src={bottleImage} alt="Zivolife Bottle" className="max-w-full h-auto px-6 md:px-0" />
      </div>

      {/* Left Section - Pricing Details */}
      <div className="text-left px-2 md:px-1 lg:pl-44 py-12 w-full   ">
        <h2 className="text-[#1F3D0C] text-4xl md:text-nowrap  md:text-5xl font-bold  text-center md:text-left font-grotesque-bold">
          START YOUR JOURNEY
          <br className="md:block hidden"/> TO BETTER HEALTH NOW
        </h2>

        <div className="w-full md:hidden flex justify-center mt-8 lg:mt-0 order-first lg:order-none">
        <img src={bottleImage} alt="Zivolife Bottle" className="max-w-full h-auto px-6 md:px-0" />
      </div>

        {/* Benefits List */}
        <ul className="space-y-1 text-gray-700 text-lg mt-6 border-t w-full md:w-5/6  border-gray-200 pt-4">
          {[
            { text: "ZIVOLIFE" ,subtext:"- 30 Servings", price: "$119", salePrice: "$89/mo" },
            { text: "STORAGE CANISTER", price: "$14", salePrice: "Free" },
            { text: "MEASURING SPOON", price: "$8", salePrice: "Free" },
            { text: "16 OZ. GLASS BOTTLE", price: "$10", salePrice: "Free" },
          ].map((item, index) => (
            <li key={index} className="flex items-center justify-between text-xl md:text-base ">
              <span className="flex items-center justify-center gap-1 font-grotesque font-bold  text-black text-[29px]   ">
                <BsCheck2 className="text-[#1F3D0C] text-lg" />
               <span> {item.text}</span> <span className="font-neue-haas-normal font-normal mt-1  text-lg">{item.subtext}</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="line-through text-gray-400 neue-haas-normal">{item.price}</span>
                <strong className="text-[#1F3D0C] text-blg  font-bold neue-haas-medium">{item.salePrice}</strong>
              </div>
            </li>
          ))}
        </ul>

        {/* Price and Button */}
        <div className="flex flex-col md:w-5/6 items-center mt-6  ">
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 text-xl line-through neue-haas-normal">$98</span>
            <span className="text-[#1F3D0C] text-[37px] font-bold neue-haas-medium">$89</span>
            <span className="bg-gray-200 text-[#1F3D0C] px-3 py-1 rounded-full text-base font-bold neue-haas-bold">
              SAVE $54
            </span>
          </div>

          <button className="mt-2 bg-[#1F3D0C] font-grotesque text-white  py-4 rounded-full font-bold text-3xl shadow-md hover:bg-[#1F3D0C] transition-all w-full ">
            BUY NOW
          </button>

          {/* Additional Benefits */}
          <div className="mt-4 text-base text-black">
          <div className="flex flex-wrap items-center justify-center gap-y-2">
  {[
    { defaultText: "Delivered Monthly", smallText: "FREE SHIPPING" },
    { defaultText: "60 Day Guarantee", smallText: "30 Day Guarantee" },
    { defaultText: "Online portal for easy cancel, skip, or pause", smallText: "Online portal for easy cancel, skip, or pause" },
  ].map((benefit, i) => (
    <div key={i} className="flex items-center gap-1 whitespace-nowrap min-w-0">
      <IoIosCheckmarkCircleOutline size={18} className="text-[#1F3D0C] flex-shrink-0" />
      <span className="whitespace-nowrap font-bold neue-haas-medium mr-0.5">
        <span className="hidden sm:inline">{benefit.defaultText}</span>
        <span className="sm:hidden">{benefit.smallText}</span>
      </span>
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
