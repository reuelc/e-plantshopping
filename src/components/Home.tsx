import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div 
        className="relative h-[70vh] bg-cover bg-center flex items-center justify-center"
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1903965/pexels-photo-1903965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)', 
          backgroundAttachment: 'fixed' 
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Paradise Nursery</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Where Green Meets Serenity
          </p>
          <Link 
            to="/products" 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300 transform hover:scale-105"
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600">
              At Paradise Nursery, we are passionate about bringing nature home to you. Our mission is to
              provide a carefully curated selection of plants that enhance your living space, improve air quality,
              and contribute to your overall wellbeing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Sustainable Sourcing</h3>
              <p className="text-gray-600 text-center">
                All our plants are ethically sourced and grown with sustainable practices to minimize environmental impact.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Expert Care</h3>
              <p className="text-gray-600 text-center">
                Each plant is carefully nurtured by our plant specialists to ensure they arrive at your doorstep in perfect condition.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:scale-105">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                <span className="text-green-600 text-2xl">🏡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">Beautify Your Space</h3>
              <p className="text-gray-600 text-center">
                Transform your home or office with our selection of plants that add natural beauty and tranquility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to bring nature home?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-green-50">
            Browse our collection of beautiful, healthy plants and transform your space today.
          </p>
          <Link 
            to="/products" 
            className="bg-white text-green-600 hover:bg-green-100 font-bold py-3 px-8 rounded-full inline-flex items-center transition-all duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;