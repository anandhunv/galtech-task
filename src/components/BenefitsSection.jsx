import React from "react";
import productImage from "../assets/images/benifits/image1.png";
import { IoShieldCheckmark } from "react-icons/io5";

const BenefitsSection = () => {
  return (
    <div className=" hidden md:flex flex-col justify-center items-center h-screen bg-yellow-50 space-y-5 2xl:max-w-7xl 2xl:mx-auto">

      {/* Heading */}
      <h2 className="text-[#1F3D0C] text-5xl font-bold text-center PREBIOTIC">
        One Scoop, <br /> Unlimited Benefits
      </h2>

      <div className="relative flex justify-center items-center w-[350px] h-[350px]">
        {/* Outer Circle */}
        <div className="absolute w-[78%] h-[78%] border border-gray-300 rounded-full"></div>

        {/* Inner Bg Circle */}
        <div className="absolute w-[70%] h-[70%] bg-gray-100 rounded-full"></div>

        {/* Center Image */}
        <img src={productImage} alt="Product" className="relative z-10" />
        {/* Text Labels */}
        <div className="absolute flex flex-col top-[18%] right-[-2%] text-center font-bold text-green-900 leading-tight neue-haas-bold">
          <span>Nutrient</span> <span>Support</span>
        </div>
        <div className="absolute flex flex-col bottom-[17%] right-[0%] text-center font-bold text-green-900 leading-tight neue-haas-bold">
          <span>Lorem</span> <span>Ipsum</span>
        </div>
        <div className="absolute flex flex-col bottom-[17%] left-[-5%] text-end font-bold text-green-900 leading-tight neue-haas-bold">
          <span>Reduced</span> <span>Anxiety</span>
        </div>
        <div className="absolute flex flex-col top-[45%] left-[-5%] -translate-x-1/2 text-end font-bold text-green-900 leading-tight neue-haas-bold">
          <span>Microalgae</span> <span>Aasdas</span>
        </div>
        <div className="absolute flex flex-col top-[45%] right-[-8%] text-start font-bold text-green-900 leading-tight neue-haas-bold">
          <span>Peak</span> <span>Energy</span>
        </div>
        <div className="absolute flex flex-col top-[18%] left-[-2%] text-end font-bold text-green-900 leading-tight neue-haas-bold">
          <span>Immune</span> <span>Boost</span>
        </div>

        {/* Small Circular Points*/}
        <div className="absolute top-[25%] right-[17%] w-2.5 h-2.5 bg-green-900 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute bottom-[25%] right-[17%] w-2.5 h-2.5 bg-green-900 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute bottom-[25%] left-[17%] w-2.5 h-2.5 bg-green-900 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute top-[50%] left-[9%] w-2.5 h-2.5 bg-green-900 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute top-[50%] right-[9%] w-2.5 h-2.5 bg-green-900 border-2 border-gray-200 rounded-full"></div>
        <div className="absolute top-[25%] left-[17%] w-2.5 h-2.5 bg-green-900 border-2 border-gray-200 rounded-full"></div>
      </div>

      {/* Button Section ) */}
      <div className="flex flex-col  items-center space-y-2 mb-10">
        <button className="bg-[#1F3D0C] text-white font-bold px-24 py-3 rounded-full hover:bg-green-800 transition font-grotesque text-2xl">
          SHOP ZIVOLIFE
        </button>

        <div className="flex items-center gap-1 text-sm text-black font-bold neue-haas-medium ">
          <IoShieldCheckmark size={16} className="flex-shrink-0" />
          <span>60 Day Money-Back Guarantee</span>
        </div>
      </div>

    </div>
  );
};

export default BenefitsSection;
