import React, { useState } from 'react';
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
      
      <div className='w-48 h-14'>
        <Logo />
      </div>

      {/* Hamburger Menu for Mobile */}
      <button className='md:hidden text-white' onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Navigation Links */}
      <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-14 text-lg text-white w-full md:w-auto mt-4 md:mt-0`}>
        <NavLink
          className={(navData) => navData.isActive ? 'scale-110 underline' : ''}
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          className={(navData) => navData.isActive ? 'scale-110 underline' : ''}
          to="/about"
        >
          About
        </NavLink>
        <NavLink 
          className={(navData) => navData.isActive ? 'scale-110 underline' : ''}
          to="/contact-us"
        >
          Contact Us
        </NavLink>
      </nav>

      {/* Buttons */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex space-x-3 mt-4 md:mt-0 w-full md:w-auto justify-center md:justify-end`}>
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
