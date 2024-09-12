// src/components/ProductCategories/ProductCategories.jsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Laptops", image: "https://demo.sirv.com/chair.jpg?hue=100", link: "/laptops" },
  { name: "Phones", image: "https://demo.sirv.com/chair.jpg?hue=100", link: "/phones" },
  { name: "Gadgets", image: "https://demo.sirv.com/chair.jpg?hue=100", link: "/gadgets" },
];

const ProductCategories = () => {
  return (
    <div className="product-categories grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
  
      {categories.map((category) => (
        <Link
          to={category.link}
          key={category.name}
          className="category-card border rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
        >
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-xl font-semibold">{category.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default ProductCategories;
