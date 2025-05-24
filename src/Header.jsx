import React from 'react';
import { useSelector } from 'react-redux';
import './Header.css'; // Create this file

// Props like onNavigateToHome, onNavigateToPlants, onNavigateToCart will be passed from App.jsx
function Header({ onNavigateToHome, onNavigateToPlants, onNavigateToCart }) {
  const cartItems = useSelector(state => state.cart.items);
  const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="header-container">
      <div className="logo">
        {/* Replace with an actual logo or styled text */}
        <h1 onClick={onNavigateToHome} style={{ cursor: 'pointer' }}>Paradise Nursery</h1>
      </div>
      <nav className="navigation-links">
        <a onClick={onNavigateToHome} style={{ cursor: 'pointer' }}>Home</a>
        <a onClick={onNavigateToPlants} style={{ cursor: 'pointer' }}>Plants</a>
      </nav>
      <div className="cart-icon-container" onClick={onNavigateToCart} style={{ cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="cart-svg">
          <circle cx="80" cy="216" r="12"></circle>
          <circle cx="184" cy="216" r="12"></circle>
          <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16">
          </path>
        </svg>
        {totalItemsInCart > 0 && (
          <span className="cart-badge">{totalItemsInCart}</span>
        )}
      </div>
    </div>
  );
}

export default Header;
