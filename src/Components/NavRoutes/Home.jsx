import React from 'react'
import RentEase from '../Cards/RentEase';
import { IoSearch } from "react-icons/io5";

const Home = () => {
  return (
    <div className='w-full h-screen'>
      <div className='absolute -z-10 top-0 w-full h-screen opacity-95'>
        <img
          className='w-full h-full object-cover overflow-hidden'
          src="https://images.unsplash.com/photo-1651336259530-362bce65fffe?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <h1 className='text-6xl font-bold text-zinc-200 text-center mt-52'>
        Find Your Perfect Room, Anytime, Anywhere
      </h1>
      <h4 className='text-center text-3xl text-zinc-200 mt-12'>
        Explore verified listings, secure payments, and flexible lease terms at your fingertips.
      </h4>
      <h5 className='text-center text-xl mt-16 text-zinc-200'>
        Search, filter, and rent verified rooms with flexible terms
      </h5>


      <div className='flex justify-center items-center w-full mt-12'>
        <div className='bg-white p-4 rounded-md w-2/3'>
          <form className='flex flex-row space-x-10 justify-center' action="">
            <div>
              <label className='font-bold text-black text-lg' htmlFor="location">Location</label><br />
              <input className='outline-none py-1' type="text" name="location" placeholder='Search Destination' />
            </div>
            <div>
              <label className='font-bold text-black text-lg' htmlFor="room">Room Type</label><br />
              <input className='outline-none py-1' type="text" name="room" placeholder='Search ideal room' />
            </div>
            <div>
              <label className='font-bold text-black text-lg' htmlFor="price">Price Range</label><br />
              <input className='outline-none py-1' type="text" name="price" placeholder='Add price' />
            </div>
            <div>
              <label className='font-bold text-black text-lg' htmlFor="room-condition">Amenities</label><br />
              <input className='outline-none py-1' type="text" name="room-condition" placeholder='Add room conditions' />
            </div>
            <div>
              <button className='bg-green-500 rounded-md p-4'>
                <IoSearch className='text-2xl'/>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className='absolute -z-10 top-0 left-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm'></div>
      <RentEase></RentEase>
    </div>
  )
}

export default Home
