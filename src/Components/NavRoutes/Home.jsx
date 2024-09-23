import React from 'react'
import RentEase from '../Cards/RentEase';
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <div className='w-full min-h-screen'>
      <div className='absolute -z-10 top-0 w-full h-full opacity-95'>
        <img
          className='w-full h-full object-cover overflow-hidden'
          src="https://images.unsplash.com/photo-1651336259530-362bce65fffe?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className='container mx-auto px-4 py-12 md:py-24'>
        <h1 className='text-4xl md:text-6xl font-bold text-zinc-200 text-center mt-24 md:mt-32'>
          Find Your Perfect Room, Anytime, Anywhere
        </h1>
        <h4 className='text-center text-xl md:text-3xl text-zinc-200 mt-6 md:mt-12'>
          Explore verified listings, secure payments, and flexible lease terms at your fingertips.
        </h4>
        <h5 className='text-center text-lg md:text-xl mt-8 md:mt-16 text-zinc-200'>
          Search, filter, and rent verified rooms with flexible terms
        </h5>

        <div className='flex justify-center items-center w-full mt-8 md:mt-12'>
          <div className='bg-white p-4 rounded-md w-full md:w-2/3'>
            <form className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center' action="">
              <div className='w-full md:w-auto'>
                <label className='font-bold text-black text-lg' htmlFor="location">Location</label>
                <input className='outline-none py-1 w-full' type="text" name="location" placeholder='Search Destination' />
              </div>
              <div className='w-full md:w-auto'>
                <label className='font-bold text-black text-lg' htmlFor="room">Room Type</label>
                <input className='outline-none py-1 w-full' type="text" name="room" placeholder='Search ideal room' />
              </div>
              <div className='w-full md:w-auto'>
                <label className='font-bold text-black text-lg' htmlFor="price">Price Range</label>
                <input className='outline-none py-1 w-full' type="text" name="price" placeholder='Add price' />
              </div>
              <div className='w-full md:w-auto'>
                <label className='font-bold text-black text-lg' htmlFor="room-condition">Amenities</label>
                <input className='outline-none py-1 w-full' type="text" name="room-condition" placeholder='Add room conditions' />
              </div>
              <div className='w-full md:w-auto flex justify-center'>
                <button className='bg-green-500 rounded-md p-4 w-full md:w-auto'>
                  <IoSearch className='text-2xl mx-auto'/>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='absolute -z-10 top-0 left-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm'></div>
      <RentEase></RentEase>
    </div>
  )
}

export default Home