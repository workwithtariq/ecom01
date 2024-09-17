// src/pages/ProductsPage/ProductsPage.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you'll be fetching data from a backend
import Filters from '../../components/Filters/Filters'; // Separate filter component for clarity
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductsPage = () => {
  const [products, setProducts] = useState([]); // To store product data
  const [filters, setFilters] = useState({}); // To store applied filters
  const apiUrl = `http://localhost:5000/api/laptops`;


  useEffect(() => {
    // Fetch products from the server (API call)
    const fetchProducts = async () => {
      try {
        const response = await axios.get(apiUrl, { params: filters });
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, [filters]); // Refetch products when filters change

  return (
    <div className="products-page container mx-auto py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Filters Section (Left Sidebar on Desktop) */}
        <div className="lg:w-1/4 w-full lg:sticky lg:top-4 lg:h-screen overflow-y-auto self-start">
          <Filters setFilters={setFilters} />
        </div>

        {/* Products Grid (Right Section) */}
        <div className="lg:w-3/4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center">No products found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
