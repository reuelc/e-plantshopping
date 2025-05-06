import React from 'react';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeItem } from '../redux/cartSlice';
import { CartItem as CartItemType } from '../types';
import { Trash, Minus, Plus } from 'lucide-react';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  
  const handleIncrement = () => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };
  
  const handleDecrement = () => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };
  
  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };
  
  const itemTotal = item.price * item.quantity;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-24 h-24 overflow-hidden rounded-md">
          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
        </div>
        
        <div className="flex-1 px-4 py-2 sm:py-0">
          <h3 className="font-bold text-lg text-gray-800">{item.name}</h3>
          <p className="text-gray-600">${item.price} each</p>
        </div>
        
        <div className="flex items-center space-x-2 mt-3 sm:mt-0">
          <button 
            onClick={handleDecrement}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
            disabled={item.quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          
          <button 
            onClick={handleIncrement}
            className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        
        <div className="text-right ml-4 mt-3 sm:mt-0">
          <div className="font-bold text-lg text-gray-800">
            ${itemTotal.toFixed(2)}
          </div>
          <button 
            onClick={handleRemove}
            className="text-red-500 hover:text-red-700 transition-colors flex items-center justify-end mt-1"
          >
            <Trash className="h-4 w-4 mr-1" />
            <span className="text-sm">Remove</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;