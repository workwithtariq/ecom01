// src/components/ProductCard/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card border rounded-lg p-4 hover:shadow-lg transition-shadow">
      <Link to={`/products/${product._id || ""}`}>
        <img
          src={product.image || '/placeholder.jpg'} // Assuming there's an image field in your product schema
          alt={product.name}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-xl font-semibold mb-2">{product.brand} {product.series}</h3>
        <p className="text-lg font-bold text-gray-800">${product.price}</p>
        <p className={`text-sm ${product.availability === 'In stock' ? 'text-green-500' : 'text-red-500'}`}>
          {product.availability}
        </p>
      </Link>
    </div>
  );
};

export default ProductCard;
