import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='flex flex-wrap justify-between items-center w-full fixed top-0 left-0 p-4 bg-slate-600 rounded-lg ml-1 mr-1 z-50'>
      <div className='flex justify-between items-center w-full md:w-auto'>
        <div className='w-32 h-10 md:w-48 md:h-14'>
          <Logo />
        </div>

        {/* Buttons for mobile view */}
        <div className='flex space-x-3 md:hidden'>
          <button className='py-1 px-3 text-white rounded-md text-sm bg-green-500 hover:bg-green-600'>
            Log In
          </button>
          <button className='py-1 px-3 text-white rounded-md text-sm bg-green-500 hover:bg-green-600'>
            Sign Up
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className='md:hidden text-white ml-2' onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-14 text-lg text-white w-full md:w-auto mt-4 md:mt-0 md:absolute md:left-1/2 md:transform md:-translate-x-1/2`}>
        <NavLink
          className={(navData) => navData.isActive ? 'scale-110 underline' : ''}
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          className={(navData) => navData.isActive ? 'scale-110 underline' : ''}
          to="/blog"
        >
          Blog
        </NavLink>
        <NavLink 
          className={(navData) => navData.isActive ? 'scale-110 underline' : ''}
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Buttons for desktop view */}
      <div className='hidden md:flex space-x-3'>
        <button className='py-1 px-5 text-white rounded-md text-lg bg-green-500 hover:bg-green-600'>
          Log In
        </button>
        <button className='py-1 px-5 text-white rounded-md text-lg bg-green-500 hover:bg-green-600'>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Nav;