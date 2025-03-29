import { FaStar, FaCheckCircle } from "react-icons/fa";
import image from "../assets/images/homepage_1.png"
import { RxDotFilled } from "react-icons/rx";
import { HiShieldCheck } from "react-icons/hi";
import { useNavigate } from "react-router";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="2xl:max-w-7xl 2xl:mx-auto  md:py-10 py-16 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Section (Text) */}
      <div className="md:px-20 text-center md:text-start">
        <p className="text-lg gap-0.5  flex items-center text-black  justify-center md:justify-start neue-haas-normal font-extralight">
        <FaStar className="text-sm text-[#1F3D0C]" /><FaStar  className="text-sm text-[#1F3D0C]"/><FaStar className="text-sm text-[#1F3D0C]" /><FaStar className="text-sm text-[#1F3D0C]" /><FaStar  className="text-sm text-[#1F3D0C]" />
          Rated <span className="font-bold text-[#1F3D0C] neue-haas-medium">4.8/5</span> <span className="md:block hidden">based on</span> <span className="font-bold text-black md:block hidden neue-haas-medium">+3,425</span> <span className=" md:block hidden">reviews</span></p>
        <span className="text-4xl md:text-6xl flex flex-col font-bold text-[#1F3D0C] mt-3 font-grotesque">
        <span> One of the Most</span>  
          <span className="text-[#1F3D0C]">Nutrient Dense</span>  <span>Plants on Earth</span>
        </span>
        <p className="text-black md:text-2xl text-xl px-4 mt-4 font-grotesque font-medium">
          A powerhouse of bioavailable protein, fiber, vitamins, minerals, essential fatty acids, and antioxidants.
        </p>

          {/* Benefits with Icons */}
          <div className="flex flex-wrap gap-4 mt-4 text-2xl font-bold text-[#1F3D0C] font-grotesque">
          <span className="flex items-center ">
            <RxDotFilled size={21} className="font-bold text-black" /> Energy
          </span>
          <span className="flex items-center ">
            <RxDotFilled size={21} className="font-bold text-black" /> Gut Health
          </span>
          <span className="flex items-center ">
            <RxDotFilled size={21} className="font-bold text-black" /> Immune
          </span>
        </div>
        <div className=" w-3/5">
 {/* CTA Button */}
      
 <button 
         onClick={() => navigate("/product-details")} // Navigate to ProductDetails

 className="mt-6 px-6 py-3 w-full bg-[#1F3D0C] font-grotesque text-2xl  text-white font-bold rounded-full hover:bg-green-800 transition ">
          SHOP ZIVOLIFE
        </button>

        {/* Money-Back Guarantee */}
        <p className="text-black  text-sm font-bold text-nowrap neue-haas-medium gap-0.5  items-center justify-center  mt-2 flex"><HiShieldCheck size={18} />
        60 Day Money-Back Guarantee</p>
        </div>
       
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-end">
        <img 
          src={image}
          alt="Zivolife Drink" 
          className="max-w-full h-auto "
        />
      </div>
    </section>
  );
};

export default HeroSection;
