// src/components/Filters/Filters.jsx
import React, { useState } from 'react';

const Filters = ({ setFilters }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    brand: '',
    price: '',
    availability: '',
    processorType: '',
    displaySize: '',
    ramSize: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters({ ...selectedFilters, [name]: value });
  };

  const applyFilters = () => {
    setFilters(selectedFilters);
  };

  return (
    <div className="filters bg-gray-100 p-4 rounded-lg mb-6">
      <h3 className="text-lg font-semibold mb-4">Filter Products</h3>

      {/* Brand Filter */}
      <div className="mb-4">
        <label className="block mb-1">Brand:</label>
        <select name="brand" value={selectedFilters.brand} onChange={handleFilterChange} className="border rounded-lg p-2 w-full">
          <option value="">All Brands</option>
          <option value="Asus">Asus</option>
          <option value="HP">HP</option>
          <option value="Dell">Dell</option>
          <option value="Lenovo">Lenovo</option>
          <option value="Apple">Apple</option>
          <option value="Xiaomi">Xiaomi</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block mb-1">Price Range:</label>
        <input
          type="number"
          name="price"
          value={selectedFilters.price}
          onChange={handleFilterChange}
          placeholder="Max Price"
          className="border rounded-lg p-2 w-full"
        />
      </div>

      {/* Availability Filter */}
      <div className="mb-4">
        <label className="block mb-1">Availability:</label>
        <select name="availability" value={selectedFilters.availability} onChange={handleFilterChange} className="border rounded-lg p-2 w-full">
          <option value="">All</option>
          <option value="In stock">In stock</option>
          <option value="Out of stock">Out of stock</option>
          <option value="Pre-order">Pre-order</option>
          <option value="Upcoming">Upcoming</option>
        </select>
      </div>

      {/* Processor Type Filter */}
      <div className="mb-4">
        <label className="block mb-1">Processor Type:</label>
        <select name="processorType" value={selectedFilters.processorType} onChange={handleFilterChange} className="border rounded-lg p-2 w-full">
          <option value="">All Processors</option>
          <option value="Intel">Intel</option>
          <option value="AMD">AMD</option>
          <option value="Apple">Apple</option>
          <option value="Snapdragon">Snapdragon</option>
        </select>
      </div>

      {/* Display Size Filter */}
      <div className="mb-4">
        <label className="block mb-1">Display Size:</label>
        <select name="displaySize" value={selectedFilters.displaySize} onChange={handleFilterChange} className="border rounded-lg p-2 w-full">
          <option value="">All Sizes</option>
          <option value="11 inch">11 inch</option>
          <option value="14 inch">14 inch</option>
          <option value="15 inch">15 inch</option>
          <option value="17 inch">17 inch</option>
        </select>
      </div>

      {/* RAM Size Filter */}
      <div className="mb-4">
        <label className="block mb-1">RAM Size:</label>
        <select name="ramSize" value={selectedFilters.ramSize} onChange={handleFilterChange} className="border rounded-lg p-2 w-full">
          <option value="">All RAM Sizes</option>
          <option value="4GB">4GB</option>
          <option value="8GB">8GB</option>
          <option value="16GB">16GB</option>
          <option value="32GB">32GB</option>
        </select>
      </div>

      <button onClick={applyFilters} className="bg-black text-white px-6 py-2 rounded-lg">
        Apply Filters
      </button>
    </div>
  );
};

export default Filters;
