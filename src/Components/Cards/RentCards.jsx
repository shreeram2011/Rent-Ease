import React, { useState } from 'react';
import RentWorks from '../RentWorks/RentWorks'
import { HiSearchCircle } from "react-icons/hi";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { IoLogoWechat } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";


const RentCards = () => {
  const [data] = useState([
    {symbol : <HiSearchCircle/>, description : "Search rooms based on location, price, amenities and more for a hassle-free experience"},
    {symbol : <BsChatLeftDotsFill /> , description : "Read reviews and ratings from previous renters to make informed decisions"},
    {symbol : <BiSupport /> , description : "Our team is available 24/7 to help with any queries or issues"},
    {symbol : <IoLogoWechat />, description : "Direct client-landowner chat for seamless communication."},
    {symbol : <FaCalendarDays />, description : "Choose from short-term or long-term rentals that suit your needs."},
    {symbol : <MdVerified />, description : "All rooms listing are verified to ensure authenticity and safety."}
  ]);

  return (
    <>
    <div className='w-full h-screen flex justify-center pt-16'>
      <div className='flex justify-center gap-6 flex-wrap w-full h-full '>
        {data.map((item, index) => (
          <div key={index} className='w-1/4 h-60 rounded-md bg-slate-400 pt-10 shadow-xl'>
            <h1 className='text-7xl flex justify-center pb-5'>{item.symbol}</h1>
            <p className='text-center text-xl p-2'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
    <RentWorks></RentWorks>
    </>
  );
}

export default RentCards;
