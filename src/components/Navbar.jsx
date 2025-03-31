import React, { useState } from "react";
import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";
import logo from "../assets/images/logo_black.png";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Example cart item count (you can replace it with dynamic data)
  const cartItemCount = 1; // Change this value to test the badge

  return (
    <>
      <div className="fixed w-full z-50">
        {/* Banner */}
        <div className="bg-[#1F3D0C] text-white text-center py-1 text-xs md:text-sm neue-haas-normal 2xl:max-w-7xl 2xl:mx-auto">
          FREE SHIPPING WHEN YOU ORDER 2+
        </div>

        {/* Navbar */}
        <nav className="bg-white w-full px-3 py-3 flex justify-between items-center 2xl:max-w-7xl 2xl:mx-auto">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-7 cursor-pointer" onClick={() => navigate("/")} />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-base neue-haas-normal text-black">
            {["Shop", "FAQ", "Contact"].map((item, index) => (
              <a key={index} href="#" className="hover:text-green-700 transition">
                {item}
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6 px-2 relative">
            {/* Cart Icon with Badge */}
            <div className="relative cursor-pointer">
              <FiShoppingCart className="text-2xl hover:text-green-700 transition" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-3 bg-[#1F3D0C] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-md">
                  {cartItemCount}
                </span>
              )}
            </div>

            {/* Mobile Menu Button
            <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FiX /> : <FiMenu />}
            </button> */}
          </div>
        </nav>

        {/* Mobile Menu (Slide Down)
        <div
          className={`md:hidden bg-white w-full absolute left-0 shadow-md transition-all ${
            isOpen ? "h-auto opacity-100 py-4" : "h-0 opacity-0 py-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center space-y-4 text-lg font-medium">
            {["Shop", "FAQ", "Contact"].map((item, index) => (
              <a key={index} href="#" className="block hover:text-green-700 transition">
                {item}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
