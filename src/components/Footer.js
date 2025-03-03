import React from 'react';
import { Package, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Package className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">A - IT Technologies</span>
            </div>
            <p className="text-sm">
              Empowering businesses with cutting-edge technology solutions for digital transformation and innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-500 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-500 transition-colors">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-500" />
                <span>Chandanagar, Hyderabad, Telangana - 500050</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+91 6309673359</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>hr@e3itc.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-4 text-center">
          <p>&copy; {new Date().getFullYear()} A - IT Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;