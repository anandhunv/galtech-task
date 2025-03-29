import React from 'react';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from 'react-icons/io';
import PricingCards from './PricingCards';


const PurchaseOptions = ({ setSelectedPlan, selectedPlan }) => {
  return (
    <div className="bg-white  rounded-lg mt-10 max-w-3xl mx-auto">
      {/* Subscription Toggle */}
      {/* Subscription Toggle */}
<div className="flex items-center mb-6 relative bg-gray-100">
  {/* One Time Purchase */}
  <span className="text-gray-500 font-medium flex-1 text-center py-3 rounded-lg bg-gray-100 ">
    One Time Purchase
  </span>

  {/* Subscribe & Save */}
  <span className="font-bold text-black flex-1 text-center py-3 bg-white rounded-tl-full">
    SUBSCRIBE & SAVE 20%
  </span>

</div>


{/* Pricing Cards - Final Version */}
<PricingCards/>
      {/* Perks Section */}
      <div className="grid grid-cols-3 gap-1 mt-8 text-sm neue-haas-medium ">
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={18} />
          <span>VIP SALES</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={18} />
          <span>Auto Replenish</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={18} />
          <span>Easy Cancellation</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={18} />
          <span>Exclusive Deals</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={18} />
          <span>Free Ebook</span>
        </div>
        <div className="flex items-center font-bold">
          <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] mr-1" size={18} />
          <span>Free Shipping</span>
        </div>
      </div>
    </div>
  );
};

export default PurchaseOptions;