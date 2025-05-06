import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductList from './components/ProductList';
import CartItems from './components/CartItems';
import Footer from './components/Footer';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<CartItems />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;