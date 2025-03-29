import React, { useState } from 'react'

import { FiMenu, FiX, FiShoppingCart } from "react-icons/fi";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white  p-4 fixed w-full z-50">
    <div className=" flex justify-between items-center">
      <h1 className="text-2xl font-bold">Z</h1>
      <div className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-green-700">Shop</a>
        <a href="#" className="hover:text-green-700">FAQ</a>
        <a href="#" className="hover:text-green-700">Contact</a>
      </div>
      <div className="flex items-center space-x-4">
        <FiShoppingCart className="cursor-pointer" />
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="md:hidden bg-white p-4 space-y-4 text-center">
        <a href="#" className="block hover:text-green-700">Shop</a>
        <a href="#" className="block hover:text-green-700">FAQ</a>
        <a href="#" className="block hover:text-green-700">Contact</a>
      </div>
    )}
  </nav>
    )
}

export default Navbar