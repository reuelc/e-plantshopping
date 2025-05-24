import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice'; // Make sure CartSlice exports addItem
import './ProductList.css'; // Ensure this CSS file exists and is styled

const plantsArray = [
  { id: 1, name: 'Snake Plant', image: 'https://cdn.pixabay.com/photo/2021/02/08/19/46/snake-plant-5996070_1280.jpg', description: 'Hardy and air-purifying, great for beginners.', cost: '$18', category: 'Air Purifying' },
  { id: 2, name: 'Spider Plant', image: 'https://cdn.pixabay.com/photo/2018/07/26/02/08/spider-plant-3562928_1280.jpg', description: 'Produces spiderettes, easy to propagate.', cost: '$15', category: 'Air Purifying' },
  { id: 3, name: 'Peace Lily', image: 'https://cdn.pixabay.com/photo/2019/07/12/10/02/peace-lily-4332621_1280.jpg', description: 'Elegant white flowers, prefers low light.', cost: '$22', category: 'Flowering' },
  { id: 4, name: 'ZZ Plant', image: 'https://cdn.pixabay.com/photo/2021/01/20/10/16/zz-plant-5933519_1280.jpg', description: 'Drought-tolerant, thrives on neglect.', cost: '$25', category: 'Low Maintenance' },
  { id: 5, name: 'Orchid', image: 'https://cdn.pixabay.com/photo/2018/02/04/19/16/orchid-3130875_1280.jpg', description: 'Exotic and beautiful, requires specific care.', cost: '$30', category: 'Flowering' },
  { id: 6, name: 'Succulent Mix', image: 'https://cdn.pixabay.com/photo/2017/07/31/21/42/succulents-2560443_1280.jpg', description: 'Variety of small succulents, great for sunny spots.', cost: '$20', category: 'Low Maintenance' },
  { id: 7, name: 'Boston Fern', image: 'https://cdn.pixabay.com/photo/2020/05/14/09/52/boston-fern-5169015_1280.jpg', description: 'Lush green foliage, loves humidity.', cost: '$19', category: 'Air Purifying' },
  { id: 8, name: 'Anthurium', image: 'https://cdn.pixabay.com/photo/2019/09/28/05/29/anthurium-4509830_1280.jpg', description: 'Bright red heart-shaped spathes.', cost: '$28', category: 'Flowering' }
];

function ActualProductList({ onHomeClick }) { // Assuming onHomeClick might be needed for navigation from App.jsx
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart(prev => ({ ...prev, [plant.id]: true }));
  };

  // Group plants by category
  const plantsByCategory = plantsArray.reduce((acc, plant) => {
    const category = plant.category || 'Uncategorized'; // Default category if none provided
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(plant);
    return acc;
  }, {});

  return (
    <div className="product-list-page"> {/* Added a wrapper class for the page */}
      {/* Optional: Button to go back to landing page, if onHomeClick is provided */}
      {onHomeClick && (
        <button onClick={onHomeClick} className="home-button"> 
          Back to Home
        </button>
      )}

      {Object.keys(plantsByCategory).map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="product-grid">
            {plantsByCategory[category].map(plant => (
              <div key={plant.id} className="product-card">
                <img src={plant.image} alt={plant.name} className="product-image" />
                <h3>{plant.name}</h3>
                <p className="product-description">{plant.description}</p> {/* Added class for description */}
                <p className="product-cost">{plant.cost}</p>
                <button
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.id]}
                  className="add-to-cart-button"
                >
                  {addedToCart[plant.id] ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ActualProductList;