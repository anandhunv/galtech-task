import { useState } from "react";
import { CheckCircle, ShieldCheck, Truck, RefreshCcw } from "lucide-react";
import ImageSelector from "./ImageSelector";
import WhatWillGet from "./WhatWillGet";
import { FaStar } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import RatingAndTitle from "./RatingAndTitle";
import PurchaseOptions from "./PurchaseOptions";
import ProductDetails from "./ProductDetails";

export default function ProductSection() {
  const [selectedPlan, setSelectedPlan] = useState("1 POUCH");

  return (
    <div className="max-w-6xl mx-auto px-6 md:flex gap-10 pt-28">  
      {/* Adjust pt-[80px] according to your navbar height */}

      {/* Left Section */}
      <div className="md:w-1/2">
        <ImageSelector />

        <WhatWillGet/>

     


       
      </div>

      {/* Right Section */}
      <div className="md:w-2/5 space-y-4">
      <div className=" bg-white rounded-lg">
      {/* Rating & Title */}
      <RatingAndTitle/>
      <PurchaseOptions setSelectedPlan={setSelectedPlan} selectedPlan={selectedPlan} />

      {/* Purchase Options */}
     
    </div>

        <button className="w-full bg-[#1F3D0C] text-white font-bold py-4 text-3xl font-grotesque rounded-full hover:bg-green-700 transition">
          ADD TO CART
        </button>

        <p className="flex items-center gap-2 w-full neue-haas-medium  justify-center text-sm ">
          <ShieldCheck className="text-black" /> 60 Day Money-Back Guarantee
        </p>

       <ProductDetails/>
      </div>
    </div>
  );
}
