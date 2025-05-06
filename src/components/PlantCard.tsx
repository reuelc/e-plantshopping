import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { Plant } from '../types';
import { ShoppingCart, Plus } from 'lucide-react';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(plant));
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-56 overflow-hidden">
        <img 
          src={plant.image} 
          alt={plant.name} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{plant.name}</h3>
          <span className="text-lg font-semibold text-green-600">${plant.price}</span>
        </div>
        <span className="inline-block px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full mb-3">
          {plant.category}
        </span>
        <p className="text-gray-600 mb-4 text-sm h-12 overflow-hidden">
          {plant.description}
        </p>
        <button 
          onClick={handleAddToCart}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-300"
        >
          <ShoppingCart className="h-4 w-4 mr-1" />
          <span>Add to Cart</span>
          <Plus className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default PlantCard;