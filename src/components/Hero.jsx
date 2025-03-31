import { FaStar } from "react-icons/fa";
import image from "../assets/images/homepage_1.png";
import { RxDotFilled } from "react-icons/rx";
import { HiShieldCheck } from "react-icons/hi";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="2xl:max-w-7xl 2xl:mx-auto lg:py-10 py-28 pb-5 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:bg-[rgba(253,251,243,1)] bg-gray-50">
      {/* Left Section  */}
      <div className="lg:px-20 lg:mt-36 text-center lg:text-start ">
        <p className="text-lg flex items-center text-black justify-center lg:justify-start neue-haas-normal font-extralight">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-sm text-[#1F3D0C] mx-0.5" />
          ))}
          Rated <span className="font-bold text-[#1F3D0C] neue-haas-medium"> 4.8/5 </span>
          <span className="lg:inline hidden">based on</span>
          <span className="font-bold text-black lg:inline hidden neue-haas-medium"> +3,425 </span>
          <span className="lg:inline hidden">reviews</span>
        </p>

        <span className="text-5xl lg:text-6xl flex flex-col font-bold text-[#1F3D0C] mt-3 font-grotesque">
          One of the Most
          Nutrient Dense
         Plants on Earth
        </span>
        <p className="text-black lg:text-2xl text-[18px] px-4 mt-4 font-grotesque font-medium">
          A powerhouse of bioavailable protein, fiber, vitamins, minerals, essential fatty acids, and antioxidants.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-4 lg:gap-6 mt-4 text-2xl font-bold text-[#1F3D0C] font-grotesque justify-center lg:justify-start">
          {["Energy", "Gut Health", "Immune"].map((benefit, index) => (
            <span key={index} className="flex items-center">
              <RxDotFilled size={21} className="font-bold text-black" /> {benefit}
            </span>
          ))}
        </div>


      {/* Right Section */}
      <div className="flex lg:hidden">
        <img
          src={image}
          alt="Zivolife Drink"
          className=" h-auto"
        />
      </div>

        <div className="w-full lg:px-0 px-10 lg:w-3/5">
          {/* CTA Button */}
          <button
            onClick={() => navigate("/product-details")}
            className="mt-6 px-6 py-3 w-full bg-[#1F3D0C] font-grotesque text-2xl text-white font-bold rounded-full hover:bg-green-800 transition"
          >
            SHOP ZIVOLIFE
          </button>

          {/* Money-Back Guarantee */}
          <p className="text-black text-sm font-bold neue-haas-medium flex items-center justify-center lg:justify-center mt-2">
            <HiShieldCheck size={18} className="mr-1" /> 60 Day Money-Back Guarantee
          </p>
        </div>
      </div>

      {/* Right Section  */}
      <div className="lg:flex hidden justify-center lg:justify-end ">
        <img
          src={image}
          alt="Zivolife Drink"
          className="max-w-[80%] lg:max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
