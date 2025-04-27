import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-gray-800 sticky top-0 z-50 px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-green-400 transition-colors">Home</Link>
          <Link to="/about" className="text-white hover:text-green-400 transition-colors">About Me</Link>
          <Link to="/projects" className="text-white hover:text-green-400 transition-colors">Projects</Link>
          <Link to="/skills" className="text-white hover:text-green-400 transition-colors">Skills</Link>
          <Link to="/contact" className="text-white hover:text-green-400 transition-colors">Contact</Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between w-full">
          <span className="text-2xl cursor-pointer" onClick={toggleMobileMenu}>
            <i className="fa fa-bars"></i>
          </span>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
    </header>
  );
};

export default Header;