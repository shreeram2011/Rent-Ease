import React, { useState } from 'react';
import FeatureRoomList from '../Featured/FeatureRoomList';

const RentWorks = () => {
  const [datawork] = useState([
    {
      image: '/public/Images/location-work.png',
      title: "Search through thousands of verified rooms, filter by location, price, and amenities.",
      description: "Our powerful search tools allow you to filter listings by location, price range, and amenities, ensuring you find a space that fits your needs perfectly. Whether you're looking for a budget-friendly room or a place with premium features, our platform offers a seamless and personalized experience, making room hunting easy and stress-free."
    },
    {image : '/public/Images/payment.png', title : "Choose your preferred room and securely complete the booking process", description : "Choose your ideal room from a variety of verified listings, tailored to your preferences. With just a few clicks, securely complete the booking process using trusted payment methods, ensuring your rental is confirmed with ease. Enjoy peace of mind as you finalize everything from the comfort of your home, knowing your transaction is safe and protected."},
    {
      image: '/public/Images/moving-luggage.png',
      title: "Move in on your selected date and enjoy flexible rental terms.",
      description: "Move in on your chosen date and experience the convenience of flexible rental terms tailored to your needs. Whether you're looking for a short-term stay or a long-term lease, Rent Ease offers adaptable options that fit your lifestyle. Enjoy a hassle-free move-in process with verified listings and seamless support, making your rental experience smooth and stress-free."
    }
  ]);

  return (
    <div>
      <h1 className='text-6xl text-center font-semibold pb-16'>How Rent Ease Works</h1>
      <div>
        {datawork.map((item, index) => {

          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`w-full h-fit flex justify-center px-10 mb-16 ${isEven ? 'flex-row' : 'flex-row-reverse'} gap-12`}>
              <div className='w-1/4 mx-10'>
                <img className='w-full' src={item.image} alt="work" />
              </div>
              <div className='w-2/3 p-14'>
                <h1 className='text-4xl font-semibold leading-10 mb-5'>{item.title}</h1>
                <p className='text-2xl text-slate-700'>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <FeatureRoomList />
    </div>
  );
};

export default RentWorks;
