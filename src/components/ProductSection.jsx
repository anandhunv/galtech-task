import { useState } from "react";
import { ShieldCheck } from "lucide-react";
import ImageSelector from "./ImageSelector";
import WhatWillGet from "./WhatWillGet";
import RatingAndTitle from "./RatingAndTitle";
import PurchaseOptions from "./PurchaseOptions";
import ProductDetails from "./ProductDetails";

export default function ProductSection() {
  const [selectedPlan, setSelectedPlan] = useState("1 POUCH");

  return (
    <section className="2xl:max-w-6xl 2xl:mx-auto px-4 md:px-28 flex flex-col md:flex-row md:gap-4 pt-28 md:pt-36 bg-[rgba(253,251,243,1)]">
      {/* Left Section */}
      <div className="md:w-5/12 w-full   space-y-5">
        <ImageSelector />

        <div className="md:block hidden">
          <WhatWillGet />
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-3/6  w-full md:space-y-4 ">
        {/* Rating & Title */}
        <RatingAndTitle />
        {/* Purchase Options */}
        <PurchaseOptions setSelectedPlan={setSelectedPlan} selectedPlan={selectedPlan} />
        <div>
          <button className="w-full bg-[#1F3D0C] text-white font-bold py-4 text-lg md:text-2xl rounded-full hover:bg-green-700 transition">
            ADD TO CART
          </button>

          <p className="flex items-center gap-2 text-sm md:text-base mt-3 justify-center mb-5 neue-haas-medium">
            <ShieldCheck className="text-black w-5 h-5" /> 60 Day Money-Back Guarantee
          </p>
        </div>


        <ProductDetails />
      </div>
    </section>
  );
}
