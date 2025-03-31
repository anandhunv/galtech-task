import React from "react";
import { FaStar } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const RatingAndTitle = () => {
  return (
    <div className="px-0 md:px-0 ">
      {/* Rating Section */}
      <div className="flex flex-wrap items-center gap-1 md:gap-2 text-gray-700 text-sm">
        <p className="text-base md:text-lg flex items-center gap-0.5 text-black font-extralight neue-haas-normal">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-sm text-[#1F3D0C]" />
          ))}
           <span className="font-bold text-[#1F3D0C] mx-1 neue-haas-medium">4.8/5</span>
           <span className="md:block hidden"> based on</span>
          <span className="hidden md:inline-block font-bold neue-haas-medium text-black ml-1">
            +3,425
          </span>
          <span className="hidden md:inline-block"> reviews</span>
        </p>
      </div>

      {/* Title */}
      <p className="  md:text-5xl  text-[35px] font-bold mt-2 font-grotesque">
        ZIVOLIFE-STARTER KIT
      </p>

      {/* Features List */}
      <ul className="space-y-2 text-black mt-3 font-grotesque text-xl">
  {[
    {
      text: (
        <>
          <strong>Klebsormidium Flaccidum var. ZL01</strong>
        </>
      ),
    },
    {
      text: (
        <>
        Full  <strong> spectrum</strong> of <strong>natural nutrients</strong>
        </>
      ),
    },
    {
      text: (
        <>
          <strong>Sustainably </strong> farmed and packaged
        </>
      ),
    },
  ].map((item, idx) => (
    <li key={idx} className="flex md:text-2xl text-xl items-center gap-2">
      <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] w-5 h-5" />
      {item.text}
    </li>
  ))}
</ul>

    </div>
  );
};

export default RatingAndTitle;
