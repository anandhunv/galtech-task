import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'

const RatingAndTitle = () => {
  return (
    <div>
      <div className="flex items-center gap-2 text-gray-700 text-sm">
           <p className="text-lg gap-0.5  flex items-center text-black neue-haas-normal font-extralight">
                <FaStar className="text-sm text-[#1F3D0C]" /><FaStar  className="text-sm text-[#1F3D0C]"/><FaStar className="text-sm text-[#1F3D0C]" /><FaStar className="text-sm text-[#1F3D0C]" /><FaStar  className="text-sm text-[#1F3D0C]" />
                  Rated <span className="font-bold text-[#1F3D0C] neue-haas-medium">4.8/5</span> based on <span className="font-bold text-black md:block hidden neue-haas-medium">+3,425</span> <span className=" md:block hidden">reviews</span></p>
      </div>

      <p className="text-4custom font-bold mt-2 font-grotesque ">ZIVOLIFE - STARTER KIT</p>

      <ul className="space-y-2 text-black mt-3 font-grotesque text-2xl">
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
    <li key={idx} className="flex items-center gap-2">
      <IoIosCheckmarkCircleOutline className="text-[#1F3D0C] w-5 h-5" />
      {item.text}
    </li>
  ))}
</ul>

    </div>
  )
}

export default RatingAndTitle