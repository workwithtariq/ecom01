// src/components/FeaturedProducts/FeaturedProducts.jsx
import React from 'react';
import ProductCard from '../../../components/ProductCard/ProductCard';
// import ProductCard from '../ProductCard/ProductCard';

const featuredProducts = [
  {
    name: 'Lenovo Yoga Slim 7i',
    price: '$999',
    brand: 'Lenovo',
    series: "series-text",
    image: 'https://demo.sirv.com/chair.jpg?profile=Vintage%20filter%202&hue=1',
    link: '/laptops/lenovo-yoga-slim-7i',
  },
  {
    name: 'iPhone 13 Pro Max',
    price: '$1099',
    brand: 'Lenovo',
    series: "series-text",
    image: 'https://demo.sirv.com/chair.jpg?profile=Vintage%20filter%202&hue=1.jpg',
    link: '/phones/iphone-13-pro-max',
  },
  {
    name: 'Xiaomi Mi Band 6',
    price: '$49',
    brand: 'Lenovo',
    series: "series-text",
    image: 'https://demo.sirv.com/chair.jpg?profile=Vintage%20filter%202&hue=1.jpg',
    link: '/gadgets/xiaomi-mi-band-6',
  },
];

const FeaturedProducts = () => {
  return (
    <div className="featured-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredProducts.map((product, index) => (
        <ProductCard
          key={product._id || index}
          product={product}
        />
      ))}
    </div>
  );
};

export default FeaturedProducts;
