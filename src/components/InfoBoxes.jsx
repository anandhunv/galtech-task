import React from 'react'
import img from "../assets/images/Vector.png";

const data=[
    {
      mdHeading: "FIGHTS INFLAMMATION",
      mdText:
        "Sharpen your mind and enhance concentration, helping you perform your best in all tasks, and enhance concentration, helping.",
      smHeading: "Soluble & Insoluble Fiber",
      smText:
        "Supports healthy gut microbiome, aids digestion, and promotes overall gut health by nourishing beneficial bacteria.",
    },
    {
      mdHeading: "FIGHTS INFLAMMATION",
      mdText:
        "Sharpen your mind and enhance concentration, helping you perform your best in all tasks, and enhance concentration, helping.",
      smHeading: "54% Protein",
      smText:
        "Vegan protein that contains all 9 essential amino acids.",
    },
    {
      mdHeading: "FIGHTS INFLAMMATION",
      mdText:
        "Sharpen your mind and enhance concentration, helping you perform your best in all tasks, and enhance concentration, helping.",
      smHeading: "Vitamins",
      smText:
        "Zivolife is packed with essential vitamins such as K, E, A, and B vitamins which support immune function, promote healthy skin, and enhance overall vitality.",
    },
    {
      mdHeading: "FIGHTS INFLAMMATION",
      mdText:
        "Sharpen your mind and enhance concentration, helping you perform your best in all tasks, and enhance concentration, helping.",
      smHeading: "Whole Food",
      smText:
        "With Zivolife, you are getting whole food that is clean, effective, and carefully grown, making it a standout in the world of daily green supplements.",
    },
  ]
const InfoBoxes = () => {
  return (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
  {data.map((item, index) => (
    <div key={index} className="bg-white flex lg:p-4 p-6 border border-gray-300">
     <div className="flex-shrink-0 flex items-center justify-center  p-4 rounded-lg">
        <img 
          src={img} 
          alt="Vector Icon" 
          className="w-8 h-8 sm:w-12 sm:h-12 lg:w-8 lg:h-14 object-contain"
        />
      </div>
      <div>
        <h3 className="font-bold text-2xl flex items-center text-[#1F3D0C] gap-2 font-grotesque">
          <span className="block lg:hidden">{item.smHeading}</span>
          <span className="hidden lg:block">{item.mdHeading}</span>
        </h3>
        <p className="text-base text-black mt-1 neue-haas-normal font-medium">
          <span className="block lg:hidden">{item.smText}</span>
          <span className="hidden lg:block">{item.mdText}</span>
        </p>
      </div>
    </div>
  ))}
</div>
  )
}

export default InfoBoxes