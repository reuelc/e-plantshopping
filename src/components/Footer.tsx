import React from 'react';
import { Leaf, Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Leaf className="h-6 w-6 text-green-400 mr-2" />
              <h3 className="text-xl font-bold">Paradise Nursery</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Bringing nature into your homes since 2022. We specialize in indoor and outdoor plants to 
              beautify your space and improve your wellbeing.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">Plants</Link>
              </li>
              <li>
                <Link to="/cart" className="text-gray-400 hover:text-white transition-colors">Cart</Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Plant Care</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Plant Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Aromatic Plants</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Medicinal Plants</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Indoor Plants</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Outdoor Plants</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Succulents</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
                <span className="text-gray-400">123 Greenway Avenue, Plantsville, GA 30301</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-2" />
                <span className="text-gray-400">contact@paradisenursery.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 py-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Paradise Nursery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;