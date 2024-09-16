import React from 'react'
import RentCards from './RentCards'

const RentEase = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <h1 className='text-black mt-20 md:mt-40 text-center text-3xl md:text-5xl font-semibold'>Why Rent with Rent Ease?</h1>
      <div className="mt-8 md:mt-12">
        <RentCards />
      </div>
    </div>
  )
}

export default RentEase