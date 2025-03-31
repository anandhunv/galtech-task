import { Outlet } from "react-router-dom";
import ScienceBackedSection from "../components/ScienceBackedSection";
import ResultsSection from "../components/ResultsSection";
import BenefitsSection from "../components/BenefitsSection";
import AllNutritionNeeds from "../components/AllNutritionNeeds";
import PremiumPrebiotic from "../components/PremiumPrebiotic";
import NutritionalNeeds from "../components/NutritionalNeeds";
import ProvenResults from "../components/ProvenResults";
import WhyZivo from "../components/WhyZivo";
import StartYourJourney from "../components/StartYourJourney";
import FAQSection from "../components/FAQSection";

export default function HomeLayout() {
  return (
    <>
      {/* This part changes */}
      <Outlet />

      {/* These sections remain unchanged */}
      <ScienceBackedSection />
      <ResultsSection />
      <BenefitsSection />
      <AllNutritionNeeds />
      <PremiumPrebiotic />
      <NutritionalNeeds />
      <ProvenResults />
      <WhyZivo />
      
      <StartYourJourney />
      <FAQSection />
    </>
  );
}
