import React, { useState } from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import { MdOutlineStar } from "react-icons/md";
import { IoMdStarOutline } from "react-icons/io";
import Faq from '../FAQ/Faq';


const testimonials = [
  {
    name: "Ravi Singh",
    image: '/public/Images/Person1.jpg',  
    rating: 5,
    review: "Rent Ease made finding my perfect rental so easy! The platform's search filters helped me quickly narrow down my options based on location, budget, and amenities. I loved that all the listings were verified, giving me peace of mind.",
  },
  {
    name: "Anivesh Singh",
    image: '/public/Images/Person2.jpg',  
    rating: 4,
    review: "Great platform! The customer service team was very helpful and I found a house within a week!",
  },
  {
    name: "Shreeram Yadav",
    image: '/public/Images/Person3.jpg',  
    rating: 4,
    review: "Renting a home has never been this easy. The verified listings gave me peace of mind, and the landlord communication was seamless.",
  },
  {
    name : "Sandip Kori",
    image : '/public/Images/Person4.jpg',
    rating : 5,
    review : "I love how this site provides all the necessary details upfront. I didn’t need to contact multiple agents to get the information I needed!",
  }
];

const Rating = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i}>
            {i < rating ? <MdOutlineStar className='text-2xl' /> : <IoMdStarOutline className='text-2xl' />}
          </span>
        ))}
      </div>
    );
  };

  const { name, image, rating, review } = testimonials[currentIndex];

  return (
    <div>
      <h1 className='text-6xl text-center font-semibold mt-16'>What Renters Are Saying</h1>
      <div className="rating-section text-center py-10">
        <div className="flex justify-center items-center space-x-6">
          
          <button onClick={handlePrev} className="p-2 bg-red-500 rounded-full">
            <FaLongArrowAltLeft className='text-3xl'/>
          </button>

          <div className="testimonial-card flex flex-col items-center w-4/5 h-96 p-6 shadow-lg">
            
            <img
              src={image}
              alt={name}
              className="w-44 h-44 rounded-full object-cover mb-4"
            />
            
            <h2 className="text-3xl font-bold">{name}</h2>
            
            <div className="text-yellow-500 mb-4">{renderStars(rating)}</div>
            
            <p className="text-gray-700 italic text-xl">"{review}"</p>
          </div>

          <button onClick={handleNext} className="p-2 bg-red-500 rounded-full">
            <FaLongArrowAltRight className='text-3xl'/>
          </button>
        </div>
      </div>
      <Faq />
    </div>
  );
};

export default Rating;
