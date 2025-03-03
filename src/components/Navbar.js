import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { services } from '../data/servicesData';
import ServiceDropdown from './ServiceDropdown';
import logo from '../pages/images/ait.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // Separate state for mobile dropdown
  const navigate = useNavigate();
  
  const handleServiceClick = (path) => {
    navigate(path);
    setShowDropdown(false);
    setIsMobileDropdownOpen(false);
    setIsMobileMenuOpen(false); // Close the menu after clicking a link
  };

  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <RouterLink to="/" className="text-2xl font-bold">
          <img style={{ width: 250, height: 50 }} src={logo} alt="Logo" />
        </RouterLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center space-x-8">
          <RouterLink to="/" className="text-white hover:text-blue-600 transition-colors">
            Home
          </RouterLink>
          <ScrollLink 
            to="about" 
            smooth={true} 
            className="text-white hover:text-blue-600 transition-colors cursor-pointer"
          >
            About
          </ScrollLink>

          {/* Services Dropdown - Desktop */}
          <div 
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="flex items-center space-x-1 text-white hover:text-blue-600 transition-colors focus:outline-none py-2">
              <span>Services</span>
              <FaChevronDown className={`h-4 w-4 transform transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
            </button>

            {showDropdown && (
              <ServiceDropdown 
                services={services}
                onServiceClick={handleServiceClick}
                show={showDropdown}
              />
            )}
          </div>

          <ScrollLink 
            to="contact" 
            smooth={true} 
            className="text-white hover:text-blue-600 transition-colors cursor-pointer"
          >
            Contact
          </ScrollLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/90 text-white py-4 px-6 space-y-4">
          <RouterLink to="/" className="block" onClick={() => setIsMobileMenuOpen(false)}>Home</RouterLink>
          <ScrollLink 
            to="about" 
            smooth={true} 
            className="block cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </ScrollLink>

          {/* Services Dropdown - Mobile */}
          <div className="block">
            <button 
              className="flex items-center space-x-1 w-full" 
              onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
            >
              <span>Services</span>
              <FaChevronDown className={`h-4 w-4 transform transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMobileDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                {services.map((service, index) => (
                  <button 
                    key={index} 
                    className="block text-gray-300 hover:text-white"
                    onClick={() => handleServiceClick(service.path)}
                  >
                    {service.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          <ScrollLink 
            to="contact" 
            smooth={true} 
            className="block cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
