// const response = await axios.get(`/api/products/${productId}`);
// setProduct(response.data);
// src/pages/ProductPage/ProductPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming you'll fetch product details from a backend
import { useParams } from "react-router-dom"; // For getting the product ID from URL
import Reviews from "../../components/Reviews/Reviews";

const ProductPage = () => {
  const { productId } = useParams(); // Extract product ID from URL params
  const [product, setProduct] = useState(null); // To store the product data
  const [loading, setLoading] = useState(true);
  console.log(productId);

  useEffect(() => {
    // Fetch individual product details from the server
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/data.json`); // Update this endpoint to your API
        setProduct(response.data[0]); // Assuming the data contains an array of products
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="product-page container mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-700 mb-2">
            ${product.price}
          </p>

          {/* Specifications Section */}
          <div className="specifications mb-6">
            <h2 className="text-2xl font-semibold mb-3">Specifications</h2>
            <ul className="text-gray-600 space-y-2">
              <li>
                <strong>Brand:</strong> {product.brand}
              </li>
              <li>
                <strong>Processor:</strong> {product.processorType}{" "}
                {product.processorModel}
              </li>
              <li>
                <strong>RAM:</strong> {product.ramSize} {product.ramType}
              </li>
              <li>
                <strong>Display:</strong> {product.displaySize}{" "}
                {product.displayType}
              </li>
              <li>
                <strong>Price:</strong> ${product.price}
              </li>
              <li>
                <strong>Availability:</strong> {product.availability}
              </li>
              {/* Add more product-specific details as needed */}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 mt-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition duration-300">
              Add to Cart
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="description mb-12">
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-gray-600">{product.description}</p>
      </div>
      

      {/* Reviews Section */}
      <div className="reviews-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
        <Reviews productId={productId} />
      </div>
    </div>
  );
};

export default ProductPage;
