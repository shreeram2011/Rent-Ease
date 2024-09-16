import React from 'react';
import logoImage from '../Images/Rent-Ease-color-logo-2.png'
const Logo = () => {
  return (
    <div className='w-full h-full rounded-full overflow-hidden'>
      <img className='w-full h-full object-cover overflow-hidden' src={logoImage} alt="Logo" />
    </div>
  )
}

export default Logo;
