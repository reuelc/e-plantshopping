import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css'; // Ensure this CSS file is well-styled

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalNumberOfPlants = cart.reduce((sum, item) => sum + item.quantity, 0);

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      const itemCost = parseFloat(item.cost.replace('$', '')); // Robust parsing
      return total + (itemCost * item.quantity);
    }, 0).toFixed(2); // Ensure two decimal places
  };

  const handleContinueShopping = (e) => {
    // If 'e' is passed and it's an event, prevent default
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    onContinueShopping(); // Call the function passed from App.jsx
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  const calculateTotalCostForItem = (item) => {
    const itemCost = parseFloat(item.cost.replace('$', ''));
    return (itemCost * item.quantity).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Checkout functionality is coming soon!');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-container empty-cart">
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any plants to your cart yet.</p>
        <button className="continue-shopping-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Shopping Cart</h2>
      <div className="cart-summary">
        <h3>Total Items in Cart: {totalNumberOfPlants}</h3>
        <h3>Total Cart Amount: ${calculateTotalAmount()}</h3>
      </div>

      <div className="cart-items-list">
        {cart.map(item => (
          <div className="cart-item-card" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h4 className="cart-item-name">{item.name}</h4>
              <p className="cart-item-cost">Unit Price: {item.cost}</p>
              <div className="cart-item-quantity-controls">
                <button className="quantity-button decrease-button" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="quantity-button increase-button" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <p className="cart-item-subtotal">Subtotal: ${calculateTotalCostForItem(item)}</p>
              <button className="delete-item-button" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-actions">
        <button className="continue-shopping-button" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="checkout-button" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItem;