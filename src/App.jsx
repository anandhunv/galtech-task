import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeLayout from "./layouts/HomeLayout";
import Hero from "./components/Hero";
import ProductDetails from "./components/ProductDetails";
import ProductSection from "./components/ProductSection";

export default function App() {
  return (
    <>
      <Navbar />
     
      <div
        className="fixed -right-10 top-11/12 z-50 transform -translate-y-1/2 bg-[#1F3D0C] text-white px-3  py-1 rounded-l-md rotate-90 hover:bg-green-700"
      >
        <span className="rotate-360 inline-block">★ Reviews</span>
      </div>
      <Routes>
        {/* Parent Layout */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Hero />} />
          <Route path="product-details" element={<ProductSection />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
