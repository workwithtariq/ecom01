import React, { useState, useEffect } from "react";
import axios from "axios"; // Fetch product details from the backend
import { useParams } from "react-router-dom"; // For getting the product ID from URL
import Reviews from "../../components/Reviews/Reviews"; // Assuming you have a reviews component

const ProductPage = () => {
  const { id } = useParams(); // Extract product ID from URL params
  const [product, setProduct] = useState(null); // To store the product data
  const [loading, setLoading] = useState(true);
  const apiUrl = `http://localhost:5000/api/laptops/${id}`; // Update the URL according to your API

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(apiUrl); // Fetch the product by ID
        setProduct(response.data); // Set the product state with the fetched data
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

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
            src={product.imageUrl} // Assuming there's an image URL in the product data
            alt={product.model}
            className="w-full object-cover rounded-lg"
          />
        </div>

        {/* Product Details Section */}
        <div className="lg:w-1/2 w-full flex flex-col">
          <h1 className="text-3xl font-bold mb-4">
            {product.brand} {product.model}
          </h1>
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
                <strong>Model:</strong> {product.model}
              </li>
              <li>
                <strong>Series:</strong> {product.series}{" "}
                {/* New field for laptop series */}
              </li>
              <li>
                <strong>Processor:</strong> {product.processorType}{" "}
                {product.processorModel}
              </li>
              <li>
                <strong>Generation:</strong> {product.generation}{" "}
                {/* New field for generation */}
              </li>
              <li>
                <strong>RAM:</strong> {product.ramSize} {product.ramType}{" "}
                {/* RAM details */}
              </li>
              <li>
                <strong>Storage:</strong> {product.storage}{" "}
                {/* Storage information */}
              </li>
              <li>
                <strong>Graphics Card:</strong> {product.graphicsCard}
              </li>
              <li>
                <strong>Display:</strong> {product.displaySize}{" "}
                {product.displayType} {/* Display information */}
              </li>
              <li>
                <strong>Price:</strong> ${product.price}
              </li>
              <li>
                <strong>Availability:</strong> {product.availability}{" "}
                {/* Availability status */}
              </li>
              <li>
                <strong>Ratings:</strong> {product.ratings} / 5 {/* Ratings */}
              </li>
              <li>
                <strong>Release Date:</strong>{" "}
                {new Date(product.releaseDate).toLocaleDateString()}{" "}
                {/* Release date */}
              </li>
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
        <p className="text-gray-600">{product.description}</p>{" "}
        {/* Product description */}
      </div>

      {/* Reviews Section */}
      <div className="reviews-section mt-12">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
        {/* <Reviews productId={id} /> Reviews component */}
      </div>
    </div>
  );
};

export default ProductPage;
