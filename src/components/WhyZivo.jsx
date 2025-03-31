import { GoCheckCircle } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import image1 from "../assets/images/othergreen_1.png";
import logo from "../assets/images/logo.png";
import image2 from "../assets/images/othergreen_2.png";

export default function WhyZivo() {
  return (
    <section className="bg-[#FAF8F2] flex flex-col items-center py-16 2xl:max-w-7xl 2xl:mx-auto">
      <h2 className="text-[#1F3D0C] text-6xl font-grotesque-bold font-bold mb-8">WHY ZIVO</h2>
      <div className="flex  flex-row w-full md:max-w-3/5 sm:max-w-4/5 lg:w-4/5      md:gap-6 gap-3 px-4">
        {/* Left Section */}
        <div className="bg-[#1F3D0C] text-white py-8 md:px-6 rounded-lg flex-1   flex flex-col items-center text-center overflow-hidden">
          <img src={logo} alt="Zivo" className="w-16 h-16 mb-4" />
          <img src={image2} alt="Green Powder" className="   scale-125 md:ml-40 ml-28  rotate-[-9.44deg] mb-12" />

          <ul className="space-y-4 text-left w-full max-w-[90%]">
         
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
    {
      text: (
        <>
         Supported by  <strong> scientific research </strong> 
        </>
      ),
    },
    {
      text: (
        <>
         Whole plant nutrition
        </>
      ),
    },
  ].map((item, index) => (
              <li key={index} className="flex items-center gap-2  text-xs md:text-base">
                <span>                <GoCheckCircle size={18} className="text-white " />
                </span>
                <span className="">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-[#F3F0E5] text-[#666943] py-8 md:px-6 rounded-lg flex-1 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Other Greens</h3>
          <img src={image1} alt="Other Greens" className="w-full mb-4" />
          <ul className="space-y-4 text-left w-full max-w-[90%]">
           {[
              {
                text: (
                  <>
                    <strong>Undisclosed</strong> proprietary formulas
                  </>
                ),
              },
              {
                text: (
                  <>
                 <strong>   Mixing whole foods does not make them whole food </strong>
                  </>
                ),
              },
              {
                text: (
                  <>
                    "Natural flavors"
                  </>
                ),
              },
              {
                text: (
                  <>
                    Manufactured "blends"
                    </>
                ),
              },
              {
                text: (
                  <>
                    Unknown ingredient sourcing
                  </>
                ),
              },
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2 text-xs md:text-base">
                <span>                <IoCloseCircleOutline size={20} className="text-green-900" />
                </span>
                <span className="leading-tight">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
