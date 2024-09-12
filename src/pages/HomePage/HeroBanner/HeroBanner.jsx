// src/components/HeroBanner/HeroBanner.jsx
import React from 'react';

const HeroBanner = () => {
  return (
    <div className="hero-banner bg-gray-200 py-16 px-8 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our E-Commerce Store</h1>
      <p className="text-xl mb-8">Find the best Laptops, Phones, and Gadgets</p>
      <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
        Shop Now
      </button>
    </div>
  );
};

export default HeroBanner;
