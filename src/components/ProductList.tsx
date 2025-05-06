import React, { useState } from 'react';
import { plantsData } from '../data/plantsData';
import PlantCard from './PlantCard';
import { Filter } from 'lucide-react';

const ProductList: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [...new Set(plantsData.map(plant => plant.category))];
  
  const filteredPlants = activeCategory 
    ? plantsData.filter(plant => plant.category === activeCategory) 
    : plantsData;

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Our Plants Collection</h1>
      <p className="text-center text-gray-600 mb-8">
        Discover our wide range of beautiful, healthy plants
      </p>
      
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center mb-8 gap-3">
        <span className="flex items-center mr-2 text-gray-700">
          <Filter className="h-4 w-4 mr-1" />
          Filter:
        </span>
        <button 
          className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
            activeCategory === null
              ? 'bg-green-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => setActiveCategory(null)}
        >
          All Plants
        </button>
        
        {categories.map(category => (
          <button 
            key={category}
            className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ${
              activeCategory === category
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Plants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredPlants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
      
      {filteredPlants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No plants found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;