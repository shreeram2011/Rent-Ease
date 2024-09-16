import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';

const Nav = () => {
  return (
    <div className='flex justify-between items-center w-full fixed top-0 left-0 p-4 bg-slate-600 rounded-lg ml-1 mr-1 z-50'>
      {/* Logo Section */}
      <div className='w-48 h-14'>
        <Logo />
      </div>

      {/* Navigation Links */}
      <nav className='flex justify-center space-x-14 text-lg text-white'>
        <NavLink
          style={(e) => ({
            transform: e.isActive ? 'scale(1.1)' : 'none', 
            textDecoration: e.isActive ? 'underline' : 'none',
            transition: 'transform 0.3s ease',
          })}
          to="/"
        >
          Home
        </NavLink>
        <NavLink 
          style={(e) => ({
            transform: e.isActive ? 'scale(1.1)' : 'none', 
            textDecoration: e.isActive ? 'underline' : 'none',
            transition: 'transform 0.3s ease',
          })} to="/about">About</NavLink>
        <NavLink 
          style={(e) => ({
            transform: e.isActive ? 'scale(1.1)' : 'none', 
            textDecoration: e.isActive ? 'underline' : 'none',
            transition: 'transform 0.3s ease',
          })} to="/contact-us">Contact Us</NavLink>
      </nav>

      {/* Buttons */}
      <div className='flex space-x-3'>
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
