import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  "What is Zvolife?",
  "What Are The Benefits Of Zvolife?",
  "Is Zvolife Suitable For Vegans?",
  "Is Zvolife Gluten-Free?",
  "How Can Zvolife Be Consumed?",
  "Are There Any Side Effects Associated With Consuming Zvolife?",
  "Where Can I Purchase Zvolife?",
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto md:p-8 p-2 bg-white neue-haas-normal">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl md:text-4xl  text-[#1F3D0C] neue-haas-normal">
            <span className="block md:hidden" >
              Everything you need to know about <span className="font-bold">klebsormidium <br /> flaccidum var. ZL01</span>
            </span>
            <span className="hidden md:block">
              For The <span className="font-extrabold">Curious.</span>
            </span>
          </h2>
        </div>

        {/* Right Section */}
        <div>
          {faqs.map((question, index) => (
            <div key={index} className="border-b border-[#1F3D0C]">
              <button
                className="w-full  flex justify-between items-center py-4 text-left text-[#1F3D0C] font-medium focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                {question}
                <FaChevronDown
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openIndex === index && (
                <div className="pb-4 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
