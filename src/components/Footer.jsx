import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaGooglePay, FaApplePay, FaCcAmex, FaCcDiscover } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { FaMeta } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1F3D0C] text-white px-2 md:px-20 py-12 2xl:max-w-7xl 2xl:mx-auto">
      {/* Top Section  */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        {/* Left Section  */}
        <div className="flex flex-col items-center w md:items-start">
          <img src={logo} alt="Company Logo" className="h-20 mb-4" />
          <div className="flex space-x-4 text-xl">
            <FaInstagram className="hover:text-green-300 cursor-pointer" />
            <FaFacebookF className="hover:text-green-300 cursor-pointer" />
            <FaTiktok className="hover:text-green-300 cursor-pointer" />
          </div>
        </div>

        {/* Middle Section  */}
        <div className="lg:w- flex flex-wrap md:gap-6 gap-3 md:text-sm text-xs">
          <ul className="space-y-2">
            <li className="hover:text-green-300 cursor-pointer">HOME</li>
            <li className="hover:text-green-300 cursor-pointer">SHOP</li>
            <li className="hover:text-green-300 cursor-pointer">ABOUT US</li>
            <li className="hover:text-green-300 cursor-pointer">FAQ</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-green-300 cursor-pointer">ACCOUNT</li>
            <li className="hover:text-green-300 cursor-pointer">BLOG</li>
            <li className="hover:text-green-300 cursor-pointer">CONTACT US</li>
            <li className="hover:text-green-300 cursor-pointer">SUPPORT</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-green-300 cursor-pointer">TERMS OF SERVICE</li>
            <li className="hover:text-green-300 cursor-pointer">RETURN POLICY</li>
            <li className="hover:text-green-300 cursor-pointer">SHIPPING POLICY</li>
            <li className="hover:text-green-300 cursor-pointer">PRIVACY POLICY</li>
          </ul>
          <ul className="space-y-2">
            <li className="hover:text-green-300 cursor-pointer">CCPA Compliance</li>
            <li className="hover:text-green-300 cursor-pointer">GDPR Compliance</li>
            <li className="hover:text-green-300 cursor-pointer">Accessibility</li>
          </ul>
        </div>

        {/* Right Section - Newsletter */}
        <div className="lg:w-2/6 text-sm md:text-start text-center">
          <h3 className="font-bold text-lg mb-2">GET LATEST UPDATES!</h3>
          <p className="mb-4 text-xs font-semibold">
            Sign up for emails that provide exclusive discount codes, subscriber-only offers, and more!
          </p>

          {/* Input & Button  */}
          <div className="flex items-center space-x-4">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="px-4 py-1 w-full rounded-full text-black placeholder:text-white border-white border-2 bg-transparent focus:outline-none"
            />
            <button className="bg-white text-green-900 px-5 text-nowrap py-1.5 rounded-full font-bold hover:bg-green-100 transition">
              SIGN UP
            </button>
          </div>

          <p className="text-xs md:mt-16 mt-8 italic border border-white p-3">
            * These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Payment Methods */}
        <div className="flex space-x-4 text-2xl">
          <FaCcVisa className="hover:text-green-300 cursor-pointer" />
          <FaCcMastercard className="hover:text-green-300 cursor-pointer" />
          <FaCcPaypal className="hover:text-green-300 cursor-pointer" />
          <FaGooglePay className="hover:text-green-300 cursor-pointer" />
          <FaApplePay className="hover:text-green-300 cursor-pointer" />
          <FaCcAmex className="hover:text-green-300 cursor-pointer" />
          <FaCcDiscover className="hover:text-green-300 cursor-pointer" />
          <FaMeta className="hover:text-green-300 cursor-pointer" />
        </div>

        {/* Privacy Text */}
        <p className="text-xs text-center md:text-left max-w-lg">
          Privacy Respected. We value your privacy; your email is exclusively for Zivolife communications. We understand email overload – expect only one monthly email from us, ensuring a mindful and unintrusive connection.
        </p>
      </div>

      {/* 20% OFF Button */}
      <div className="flex justify-start">
        <button className="bg-white/10 text-white text-sm font-bold flex items-center justify-center 

    w-12 h-12 rounded-full md:w-24 md:h-10  md:rounded-md hover:bg-green-700 transition">
          20% OFF
        </button>
      </div>

    </footer>
  );
};

export default Footer;
