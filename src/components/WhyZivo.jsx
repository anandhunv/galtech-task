import { GoCheckCircle } from "react-icons/go";
import { IoCloseCircleOutline } from "react-icons/io5";
import image1 from "../assets/images/othergreen_1.png";
import logo from "../assets/images/logo.png";
import image2 from "../assets/images/othergreen_2.png";

export default function WhyZivo() {
  return (
    <section className="bg-[#FAF8F2] flex flex-col items-center py-16">
      <h2 className="text-green-900 text-3xl font-bold mb-8">WHY ZIVO</h2>
      <div className="flex flex-col md:flex-row w-full max-w-2/5 gap-6">
        {/* Left Section */}
        <div className="bg-[#1F3D0C] text-white py-8 px-6 rounded-lg flex-1 flex flex-col items-center text-center">
          <img src={logo} alt="Zivo" className="w-16 h-16 mb-4" />
          <img src={image2} alt="Green Powder" className="scale-125 ml-24 rotate-[-9.44deg] mb-4" />
          <ul className="space-y-4 text-left w-full max-w-[90%]">
            {[
              "Klebsormidium Flaccidum var. ZL01",
              "Full spectrum of natural nutrients",
              "Sustainably farmed and packaged",
              "Supported by scientific research",
              "Whole plant nutrition",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <GoCheckCircle className="text-white text-lg" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="bg-[#F3F0E5] text-green-900 py-8 px-6 rounded-lg flex-1 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Other Greens</h3>
          <img src={image1} alt="Other Greens" className="w-full mb-4" />
          <ul className="space-y-4 text-left w-full max-w-[90%]">
            {[
              "Undisclosed proprietary formulas",
              "Mixing whole foods does not make them whole food",
              "“Natural flavors”",
              "Manufactured “blends”",
              "Unknown ingredient sourcing",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <IoCloseCircleOutline className="text-green-900 text-lg" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
