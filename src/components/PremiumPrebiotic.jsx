import React from "react";
import image2 from "../assets/images/PremiumPrebiotic/image2.png";
import image1 from "../assets/images/PremiumPrebiotic/image1.png";
import image3 from "../assets/images/PremiumPrebiotic/image3.png";
import image4 from "../assets/images/PremiumPrebiotic/image4.png";
import image5 from "../assets/images/PremiumPrebiotic/image5.png";
import image6 from "../assets/images/PremiumPrebiotic/image6.png";

const benefits = [
  { id: 1, label: "GLUTEN FREE", icon: image1 },
  { id: 2, label: "VEGAN", icon: image2 },
  { id: 3, label: "ALL NATURAL", icon: image3 },
  { id: 4, label: "SUGAR FREE", icon: image4 },
  { id: 5, label: "NO ADDITIVES", icon: image5 },
  { id: 6, label: "GMO FREE", icon: image6 },
];

const PremiumPrebiotic = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between bg-gray-100 px-6 md:px-10 py-8 border border-gray-200 2xl:max-w-7xl 2xl:mx-auto">
      {/* Left Section */}
      <div className="text-center md:text-center  flex justify-center w-full md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-4xl md:text-3xl font-extrabold text-[#1F3D0C] font-grotesque">
          PREMIUM PREBIOTIC
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-black text-sm md:text-base mb-4 uppercase mx-auto md:mx-0 md:w-11/12 neue-haas-normal ">
          Zivolife is 100% klebsormidium flaccidum var ZL01, a proprietary strain of microalgae.
        </p>
        <div className="flex md:flex-row  flex-wrap-reverse md:flex-wrap items-center justify-center md:justify-start gap-8 md:gap-6">
          {benefits.map((item) => (
            <div key={item.id} className="flex flex-col items-center ">
              <img src={item.icon} alt={item.label} className="w-10 h-10" />
              <span className="text-xs text-[#1F3D0C] font-bold mt-1 neue-haas-bold uppercase">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PremiumPrebiotic;
