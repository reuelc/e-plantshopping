import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeItem, addItem } from './CartSlice';
import './CartItem.css';

function CartItem({ onContinueShopping }) {
    // Access Redux store
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    // Calculate total amount for all items in cart
    const calculateTotalAmount = () => {
        return cartItems.reduce((total, item) => {
            const cost = parseFloat(item.cost.substring(1)); // Remove $ and convert to number
            return total + (cost * item.quantity);
        }, 0).toFixed(2);
    };

    // Calculate total cost for individual item
    const calculateTotalCost = (item) => {
        const cost = parseFloat(item.cost.substring(1));
        return (cost * item.quantity).toFixed(2);
    };

    // Handle increment quantity
    const handleIncrement = (item) => {
        dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
    };

    // Handle decrement quantity
    const handleDecrement = (item) => {
        if (item.quantity > 1) {
            dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
        } else {
            // If quantity would drop to 0, remove the item
            dispatch(removeItem(item.name));
        }
    };

    // Handle remove item from cart
    const handleRemove = (item) => {
        dispatch(removeItem(item.name));
    };

    // Handle continue shopping
    const handleContinueShopping = (e) => {
        e.preventDefault();
        onContinueShopping();
    };

    // Handle checkout (placeholder function)
    const handleCheckoutShopping = (e) => {
        e.preventDefault();
        alert('Functionality to be added for future reference');
    };

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };

    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };

    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    return (
        <div>
            {/* Navigation Bar */}
            <div className="navbar" style={styleObj}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" />
                        <div>
                            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                        </div>
                    </div>
                </div>
                <div style={styleObjUl}>
                    <div>
                        <a href="#" onClick={handleContinueShopping} style={styleA}>
                            Plants
                        </a>
                    </div>
                    <div>
                        <a href="#" style={styleA}>
                            <h1 className='cart'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="68" width="68">
                                    <circle cx="80" cy="216" r="12"></circle>
                                    <circle cx="184" cy="216" r="12"></circle>
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" 
                                          fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                                    </path>
                                </svg>
                                {cartItems.length > 0 && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        backgroundColor: 'red',
                                        color: 'white',
                                        borderRadius: '50%',
                                        width: '25px',
                                        height: '25px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '14px'
                                    }}>
                                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                    </span>
                                )}
                            </h1>
                        </a>
                    </div>
                </div>
            </div>

            {/* Cart Content */}
            <div className="cart-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ color: '#4CAF50', textAlign: 'center', marginBottom: '30px' }}>
                    Total Cart Amount: ${calculateTotalAmount()}
                </h2>
                
                {cartItems.length === 0 ? (
                    <div className="empty-cart" style={{ textAlign: 'center', padding: '50px' }}>
                        <p style={{ fontSize: '18px', marginBottom: '20px' }}>Your cart is empty</p>
                        <button 
                            className="continue-shopping-btn"
                            onClick={handleContinueShopping}
                            style={{
                                backgroundColor: '#4CAF50',
                                color: 'white',
                                border: 'none',
                                padding: '12px 30px',
                                fontSize: '16px',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Continue Shopping
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map((item, index) => (
                                <div key={index} className="cart-item" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px solid #ddd',
                                    borderRadius: '10px',
                                    padding: '20px',
                                    marginBottom: '20px',
                                    backgroundColor: '#f9f9f9'
                                }}>
                                    <img 
                                        className="cart-item-image" 
                                        src={item.image} 
                                        alt={item.name}
                                        style={{
                                            width: '120px',
                                            height: '120px',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                            marginRight: '20px'
                                        }}
                                    />
                                    <div className="cart-item-details" style={{ flex: 1 }}>
                                        <div className="cart-item-name" style={{
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            marginBottom: '10px',
                                            color: '#333'
                                        }}>
                                            {item.name}
                                        </div>
                                        <div className="cart-item-cost" style={{
                                            fontSize: '18px',
                                            color: '#666',
                                            marginBottom: '15px'
                                        }}>
                                            {item.cost}
                                        </div>
                                        <div className="cart-item-quantity" style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            marginBottom: '15px'
                                        }}>
                                            <button 
                                                className="quantity-btn decrease"
                                                onClick={() => handleDecrement(item)}
                                                style={{
                                                    backgroundColor: '#f44336',
                                                    color: 'white',
                                                    border: 'none',
                                                    width: '30px',
                                                    height: '30px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    fontSize: '18px'
                                                }}
                                            >
                                                -
                                            </button>
                                            <span className="quantity" style={{
                                                fontSize: '18px',
                                                fontWeight: 'bold',
                                                minWidth: '30px',
                                                textAlign: 'center'
                                            }}>
                                                {item.quantity}
                                            </span>
                                            <button 
                                                className="quantity-btn increase"
                                                onClick={() => handleIncrement(item)}
                                                style={{
                                                    backgroundColor: '#4CAF50',
                                                    color: 'white',
                                                    border: 'none',
                                                    width: '30px',
                                                    height: '30px',
                                                    borderRadius: '5px',
                                                    cursor: 'pointer',
                                                    fontSize: '18px'
                                                }}
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="cart-item-total" style={{
                                            fontSize: '18px',
                                            fontWeight: 'bold',
                                            marginBottom: '15px',
                                            color: '#333'
                                        }}>
                                            Total: ${calculateTotalCost(item)}
                                        </div>
                                        <button 
                                            className="delete-btn"
                                            onClick={() => handleRemove(item)}
                                            style={{
                                                backgroundColor: '#ff6b6b',
                                                color: 'white',
                                                border: 'none',
                                                padding: '8px 20px',
                                                borderRadius: '5px',
                                                cursor: 'pointer',
                                                fontSize: '14px'
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="cart-actions" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '30px',
                            gap: '20px'
                        }}>
                            <button 
                                className="continue-shopping-btn"
                                onClick={handleContinueShopping}
                                style={{
                                    backgroundColor: '#4CAF50',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                            >
                                Continue Shopping
                            </button>
                            <button 
                                className="checkout-btn"
                                onClick={handleCheckoutShopping}
                                style={{
                                    backgroundColor: '#ff9800',
                                    color: 'white',
                                    border: 'none',
                                    padding: '15px 30px',
                                    fontSize: '16px',
                                    borderRadius: '5px',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default CartItem;