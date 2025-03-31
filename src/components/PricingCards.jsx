import { useState } from "react";
import image from "../assets/images/productsection/purchase/image.png";

const plans = [
  { name: "1 POUCH", oldPrice: "$124", newPrice: "$79", save: "$10", count: 1 },
  { name: "2 POUCHES", oldPrice: "$111", newPrice: "$70", save: "$17", count: 2 },
  { name: "3 POUCHES", oldPrice: "$114", newPrice: "$90", save: "$21", count: 3 },
];

export default function PricingCards() {
  const [selectedPlan, setSelectedPlan] = useState("2 POUCHES");

  return (
    <div className="grid grid-cols-3 md:gap-6 gap-1 w-full max-w-3xl mx-auto px-2 mt-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          onClick={() => setSelectedPlan(plan.name)}
          className={`relative rounded-lg p-6 text-center cursor-pointer border-gray-200 border transition-all ${
            selectedPlan === plan.name
              ? "bg-gray-200 "
              : "bg-white border-gray-200"
          }`}
        >
          {/* Save Badge */}
          <div
            className={`absolute -top-4 left-1/2 transform -translate-x-1/2 md:px-3 px-1 py-0.5 md:py-1 text-nowrap rounded-md text-sm font-bold ${
              selectedPlan === plan.name
                ? "bg-[#2E3F17] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Save {plan.save}
          </div>

          {/* Pricing & Title */}
          <div className="flex flex-col justify-center items-center mb-4 font-grotesque">
            <p className="font-bold md:text-2xl text-nowrap uppercase text-[#2E3F17] md:mt-4">{plan.name}</p>
            <span>
              <span className="text-base line-through text-gray-500">{plan.oldPrice}</span>
              <span className="md:text-2xl font-bold text-[#2E3F17] ml-2">{plan.newPrice}</span>
            </span>
          </div>

          {/* Product Images  */}
          <div className="relative flex justify-center   items-center md:h-24 h-20">
            {[...Array(plan.count)].map((_, i) => (
              <img
                key={i}
                src={image}
                alt="pouch"
                className="absolute  scale-150 w-28"
                style={{
                  left: i === 0 ? "0%" : i === 1 ? "-20px" : "20px", // Adjust positions
                  zIndex: i === 1 ? "5" : i === 2 ? "1" : "10", // Center pouch in front
                  opacity: i === 0 ? "1" : "0.8", // Slight fade for background pouches
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
