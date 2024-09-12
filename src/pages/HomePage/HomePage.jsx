import React from 'react';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import HeroBanner from './HeroBanner/HeroBanner';
import ProductCategories from './ProductCategories/ProductCategories';

const HomePage = () => {
  return (
    <div className="homepage-container">
      
      {/* Hero Section */}
      <HeroBanner />

      {/* Product Categories Section */}
      <section className="product-categories-section my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <ProductCategories />
      </section>

      {/* Featured Products Section */}
      <section className="featured-products-section my-16">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <FeaturedProducts />
      </section>
    </div>
  );
};

export default HomePage;
