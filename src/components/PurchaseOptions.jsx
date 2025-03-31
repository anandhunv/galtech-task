import React from 'react';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import PricingCards from './PricingCards';

const PurchaseOptions = ({ setSelectedPlan, selectedPlan }) => {
  return (
    <div className="bg-white rounded-lg mt-5 md:mt-10    ">
      {/* Subscription Toggle */}
      <div className="flex items-center mb-4 md:mb-6 relative bg-gray-100  overflow-hidden">
        {/* One Time Purchase */}
        <span className="text-gray-500 text-sm md:text-base font-neue-haas-normal font-medium flex-1 text-center py-5 md:py-5">
          One Time Purchase
        </span>

        {/* Subscribe & Save */}
        <span className="font-bold text-black text-sm md:text-[20px] font-grotesque-extrabold flex-1 text-center py-5 md:py-5 bg-white rounded-tl-full ">
          SUBSCRIBE & SAVE 20%
        </span>
      </div>

      {/* Pricing Cards */}
      <PricingCards/>

      {/* info Section */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-2 md:gap-1 mt-6 mb-4 pb-4 md:mt-8 text-xs md:text-sm neue-haas-medium">
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={16} />
          <span>VIP SALES</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={16} />
          <span>Auto Replenish</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={16} />
          <span>Easy Cancellation</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={16} />
          <span>Exclusive Deals</span>
        </div>
        <div className="md:flex hidden items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={16} />
          <span>Free Ebook</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={16} />
          <span>Free Shipping</span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOptions;