import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div 
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4">
        <div className="flex justify-end">
          <span className="text-2xl cursor-pointer" onClick={toggleMenu}>
            <i className="fa fa-times"></i>
          </span>
        </div>
        <nav className="flex flex-col mt-8">
          <Link 
            to="/" 
            className="py-3 border-b border-gray-700 hover:bg-green-500 hover:text-black px-2 rounded transition-colors"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="py-3 border-b border-gray-700 hover:bg-green-500 hover:text-black px-2 rounded transition-colors"
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link 
            to="/projects" 
            className="py-3 border-b border-gray-700 hover:bg-green-500 hover:text-black px-2 rounded transition-colors"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link 
            to="/skills" 
            className="py-3 border-b border-gray-700 hover:bg-green-500 hover:text-black px-2 rounded transition-colors"
            onClick={toggleMenu}
          >
            Skills
          </Link>
          <Link 
            to="/contact" 
            className="py-3 border-b border-gray-700 hover:bg-green-500 hover:text-black px-2 rounded transition-colors"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;