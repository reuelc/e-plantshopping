import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import CartItem from './CartItem';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';

const CartItems: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
  
  const handleContinueShopping = () => {
    // Navigation is handled by the Link component
  };
  
  const handleCheckoutShopping = () => {
    alert('Functionality to be added for future release');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-2xl font-bold text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven't added any plants to your cart yet.</p>
          <Link 
            to="/products" 
            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition-colors duration-300"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Browse Plants
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4 pb-4 border-b border-gray-200">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between text-gray-700">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-600 font-medium">Total Cart Amount:</span>
                  <span className="text-2xl font-bold text-green-600">${calculateTotalAmount().toFixed(2)}</span>
                </div>
                
                <div className="space-y-3">
                  <button 
                    onClick={handleCheckoutShopping}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Checkout
                  </button>
                  
                  <Link 
                    to="/products" 
                    onClick={handleContinueShopping}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-4 rounded-md transition-colors duration-300 text-center block"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;