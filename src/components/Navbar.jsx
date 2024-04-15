import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <NavLink to="/" className="text-gray text-xl text-decoration-none font-bold">
          INFINITY GYM
        </NavLink>

        <div className="md:hidden">
          {/* Dropdown toggle button */}
          <button
            onClick={toggleNavbar}
            className="text-gray hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        <div className={`md:flex md:items-center md:space-x-4 md:absolute md:right-4 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="md:flex md:space-x-4">

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
