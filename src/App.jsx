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
      <Routes>
        {/* Parent Layout */}
        <Route path="/" element={<HomeLayout />}>
          {/* Default Hero */}
          <Route index element={<Hero />} />
          {/* Change only Hero Section when navigating */}
          <Route path="product-details" element={<ProductSection />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}
