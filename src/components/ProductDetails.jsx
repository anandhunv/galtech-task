import { useState } from "react";
import { Plus, X } from "lucide-react";

const AccordionItem = ({ title, content, isOpen, onToggle }) => (
  <div className="border-b border-gray-200">
    <button
      className="w-full text-left flex justify-between items-center py-4 font-semibold"
      onClick={onToggle}
    >
      {title}
      {isOpen ? <X size={20} /> : <Plus size={20} />}
    </button>
    {isOpen && <p className="text-sm text-gray-700 pb-4">{content}</p>}
  </div>
);

export default function ProductDetails() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "PRODUCT DETAILS",
      content:
        "Green Smoothie: Mixed with cold water it tastes typical of a refreshing green smoothie benefiting from the sweetness of apple and pear with a hint of ginger to finish!",
    },
    {
      title: "RISK FREE GUARANTEE",
      content: "We guarantee your satisfaction or your money back!",
    },
    {
      title: "SHIPPING & DELIVERIES",
      content: "Fast & free shipping available.",
    },
    {
      title: "RETURNS",
      content: "Easy return policy.",
    },
  ];

  return (
    <div className="border-t border-gray-200 p-4 pt-0 w-full  ">
      {sections.map((section, index) => (
        <AccordionItem
          key={index}
          title={section.title}
          content={section.content}
          isOpen={openIndex === index}
          onToggle={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
}
