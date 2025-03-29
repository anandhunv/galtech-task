import React from "react";
import PropTypes from "prop-types";
import image1 from "../assets/images/result1.png";
import image2 from "../assets/images/result2.png";
import image3 from "../assets/images/result3.png";
import { LuBadgeCheck } from "react-icons/lu";
import { BiSolidBadgeCheck } from "react-icons/bi";

const reviews = [
  { 
    id: 1, 
    image: image1,
    rating: "★★★★★",
    title: "So much more Energy",
    description: "Get a natural energy lift with moringa gummies & fuel your day with power. Don't just take our word for it! See the life-changing results of others and start their journey.",
    author: "Chino Z",
    tags: ["ENERGY", "SKIN"]
  },
  { 
    id: 2, 
    image: image2,
    rating: "★★★★★",
    title: "So much more Energy",
    description: "Get a natural energy lift with moringa gummies & fuel your day with power. Don't just take our word for it! See the life-changing results of others and start their journey.",
    author: "Maria K",
    tags: ["ENERGY", "SKIN"]
  },
  { 
    id: 3, 
    image: image3,
    rating: "★★★★☆",
    title: "So much more Energy",
    description: "Get a natural energy lift with moringa gummies & fuel your day with power. Don't just take our word for it! See the life-changing results of others and start their journey.",
    author: "James L",
    tags: ["ENERGY", "SKIN"]
  },
  { 
    id: 4, 
    image: image2,
    rating: "★★★★★",
    title: "So much more Energy",
    description: "Get a natural energy lift with moringa gummies & fuel your day with power. Don't just take our word for it! See the life-changing results of others and start their journey.",
    author: "Sarah T",
    tags: ["ENERGY", "SKIN"]
  },
  { 
    id: 5, 
    image: image3,
    rating: "★★★★★",
    title: "So much more Energy",
    description: "Get a natural energy lift with moringa gummies & fuel your day with power. Don't just take our word for it! See the life-changing results of others and start their journey.",
    author: "Alex P",
    tags: ["ENERGY", "SKIN"]
  }
  ,  { 
    id: 6, 
    image: image1,
    rating: "★★★★★",
    title: "So much more Energy",
    description: "Get a natural energy lift with moringa gummies & fuel your day with power. Don't just take our word for it! See the life-changing results of others and start their journey.",
    author: "Chino Z",
    tags: ["ENERGY", "SKIN"]
  },
];

const ReviewCard = ({ review }) => {
  return (
    <div className="bg-[#F7F8F7]   w-60 flex-shrink-0 ">
      <img
        src={review.image}
        alt={`Review by ${review.author}`}
        className="w-full h-40 object-cover "
        loading="lazy"
      />
      <div className=" text-left p-4 text-[#1F3D0C]">
        <p className="text-[#1F3D0C] font-bold">{review.rating}</p>
        <h4 className="font-bold mt-2 font-grotesque text-2xl text-[#1F3D0C]">{review.title}</h4>
        <p className="text-lg font-medium  font-grotesque mt-2">
          {review.description}
        </p>
        <div className="flex items-center  flex-wrap mt-4 justify-between">
          <span className="text-black text-sm font-semibold flex gap-0.5 items-center pp-sans-regular">{review.author}<BiSolidBadgeCheck size={18} className="text-green-800" />
          </span>
          <div className="flex gap-1">
          {review.tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-green-600 text-white px-2 py-1 rounded-full text-xs font-semibold cursor-pointer"
            >
              {tag}
            </span>
          ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.any.isRequired,
    rating: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

const ResultsSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 text-center">
      <div className="max-w-7xl mx-auto">
<div className="leading-none">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1F3D0C] font-grotesque">
          RESULTS PEOPLE SAW
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold text-[#1F3D0C]  font-grotesque">
          IN LESS THAN 30 DAYS!
        </h3>
        </div>
        
        <p className=" mt-4 max-w-2xl text-xl mx-auto neue-haas-normal flex flex-col text-black">
       <span> Don't just take our word for it! See the life</span>   <span>changing results of others.</span>
        </p>

        <div className="mt-10 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 pb-4 px-1">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;