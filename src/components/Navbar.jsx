import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black py-2 px-4" >
      <div className="flex max-md:flex-col ">
      <div className="max-w-7xl mx-auto flex flex-row md:flex-row justify-between  ml-[-180px] w-[700px] max-md:w-[253px] items-center max-md:flex-row max-md:justify-around max-md:items-around max-md:wrap">
        <NavLink to="/" className="text-gray text-xl text-decoration-none     max-md:ml-0  max-md:mr-[60%] font-bold">
          INFINITY GYM
        </NavLink>

        <div className="md:hidden ">
          {/* Dropdown toggle button */}
          <button
            onClick={toggleNavbar}
            className="text-gray hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 r-[30px] w-6 max-md:absolute  max-md:top-[10px]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Dropdown menu */}
       
      </div>
      <div className={`md:flex md:items-center md:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
          <div className=" flex flex-col md:flex-row md:space-x-4">
            <NavLink
              to="/"
              activeClassName="text-black-400"
              className="text-gray text-decoration-none hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Home
            </NavLink>
            <NavLink
              to="/classes"
              activeClassName="text-black-400"
              className="text-gray text-decoration-none hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Classes
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-indigo-400"
              className="text-gray text-decoration-none hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              About
            </NavLink>
            <NavLink
              to="/shop"
              activeClassName="text-indigo-400"
              className="text-gray text-decoration-none hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Shop
            </NavLink>
            <NavLink
              to="/blog"
              activeClassName="text-indigo-400"
              className="text-gray text-decoration-none hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Blog
            </NavLink>
            <NavLink
              to="/login"
              activeClassName="text-indigo-400"
              className="text-gray text-decoration-none hover:text-white px-3 py-2 rounded-md text-m font-medium"
            >
              Login
            </NavLink>
          </div>
        </div>
        </div>
    </nav>
  );
}

export default Navbar;
