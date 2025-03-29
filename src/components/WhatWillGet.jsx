import React from 'react';
import image1 from "../assets/images/productsection/whatwillget/image1.png";
import image2 from "../assets/images/productsection/whatwillget/image2.png";
import image3 from "../assets/images/productsection/whatwillget/image3.png";
import image4 from "../assets/images/productsection/whatwillget/image4.png";

const WhatWillGet = () => {
  return (
    <div className="text-center font-grotesque">
      <h3 className="font-bold mt-6 text-[#1F3D0C] text-3xl font-grotesque">
        HERE’S WHAT YOU’LL GET:
      </h3>
      <div className="grid grid-cols-4 gap-6 mt-4 px-4">
        {[
          { name: "BOTTLE", image: image1 },
          { name: "SPOON", image: image2 },
          { name: "SHIPPING", image: image3 },
          { name: "CANISTER", image: image4 },
        ].map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center"
          >
            <img src={item.image} alt={item.name} className="h-20 w-auto mb-2 border-1 border-dashed border-green-700  rounded-lg bg-gray-50" />
            <p className="text-sm font-bold text-black mt-2">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWillGet;
