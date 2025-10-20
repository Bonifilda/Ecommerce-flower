import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Product = () => {
  // Event handling for Add to Cart
  const handleAddToCart = (productName) => {
    console.log(`Added ${productName} to cart`); // Event handling demonstration
    alert(`Added ${productName} to cart!`);
  };

  // Products data grouped by category (at least 6 products)
  const product = [
    // Roses Category
    {
      id: 1,
      name: "flower.jpg",
      price: "15,000 RWF",
      image: "flower2.jpg",
      category: "Roses"
    },
    {
      id: 2,
      name: "flower3",
      price: "12,000 RWF",
      image: "flower3.jpg",
      category: "Roses"
    },
    
    // Lilies Category
    {
      id: 3,
      name: "White Lilies",
      price: "18,000 RWF",
      image: "flower4.jpg",
      category: "Lilies"
    },
    {
      id: 4,
      name: "Tiger Lilies",
      price: "20,000 RWF",
      image: "flower5.jpg",
      category: "Lilies"
    },
    
    // Seasonal Category
    {
      id: 5,
      name: "Spring Mix",
      price: "25,000 RWF",
      image: "flower6.jpg",
      category: "Seasonal"
    },
    {
      id: 6,
      name: "Summer Special",
      price: "22,000 RWF",
      image: "flower7.jpg",
      category: "Seasonal"
    }
  ];

  // Group products by category
  const productsByCategory = product.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        
        {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product} // Props passing
                  onAddToCart={handleAddToCart} // Event handling via props
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;