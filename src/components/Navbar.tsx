import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { ShoppingCart, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-green-600 text-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 font-bold text-xl">
            <Leaf className="h-6 w-6" />
            <span>Paradise Nursery</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-green-200 transition-colors duration-200">
              Home
            </Link>
            <Link to="/products" className="hover:text-green-200 transition-colors duration-200">
              Plants
            </Link>
            <Link to="/cart" className="relative hover:text-green-200 transition-colors duration-200 flex items-center">
              <ShoppingCart className="h-5 w-5 mr-1" />
              <span>Cart</span>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs text-white font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;