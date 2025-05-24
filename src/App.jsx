import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';
import ActualProductList from './ActualProductList.jsx';
import CartItem from './CartItem.jsx'; // Assuming CartItem is the cart page
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'products', 'cart'

  const navigateToHome = () => setCurrentView('landing');
  const navigateToProducts = () => setCurrentView('products');
  const navigateToCart = () => setCurrentView('cart');

  // Original handleGetStartedClick functionality is now navigateToProducts
  // Original handleHomeClick functionality is now navigateToHome

  return (
    <Provider store={store}>
      <div className="app-container">
        {currentView !== 'landing' && (
          <Header
            onNavigateToHome={navigateToHome}
            onNavigateToPlants={navigateToProducts}
            onNavigateToCart={navigateToCart}
            // Pass currentView if Header needs to highlight active link
          />
        )}

        {currentView === 'landing' && (
          <div className="landing-page"> {/* Removed fade-out logic for simplicity, can be added back if needed */}
            <div className="background-image"></div>
            <div className="content">
              <div className="landing_content">
                <h1>Welcome To Paradise Nursery</h1>
                <div className="divider"></div>
                <p>Where Green Meets Serenity</p>
                <button className="get-started-button" onClick={navigateToProducts}>
                  Get Started
                </button>
              </div>
              <div className="aboutus_container">
                <AboutUs />
              </div>
            </div>
          </div>
        )}

        {currentView === 'products' && (
          // Pass any necessary navigation props to ActualProductList if it has buttons for them
          <ActualProductList />
        )}

        {currentView === 'cart' && (
          // Pass the navigateToProducts function for the "Continue Shopping" button
          <CartItem onContinueShopping={navigateToProducts} />
        )}
      </div>
    </Provider>
  );
}

export default App;