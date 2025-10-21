//  export default Product;
import React from 'react';
import ProductCard from '../components/ProductCard';

const Product = () => {
  // Define the products array here
  const products = [
    { id: 1, name: "Flower1", price: "15,000 RWF", image: "/Flower1.jpg", category: "Roses" },
    { id: 2, name: "Best", price: "12,000 RWF", image: "/bestflower.jpg", category: "Lilies" },
    { id: 3, name: "Popsicle", price: "25,000 RWF", image: "flower2.jpg", category: "Orchids" },
    { id: 4, name: "Sunflower Bouquet", price: "18,000 RWF", image: "flower3.jpg", category: "Seasonal" },
    { id: 5, name: "Good Flowers", price: "20,000 RWF", image: "flower4.jpg", category: "Lilies" },
    { id: 6, name: "Mixed Flower", price: "30,000 RWF", image: "flower5.jpg", category: "Mixed" },
    { id: 7, name: "Best", price: "14,000 RWF", image: "best.jpg", category: "Daisies" },
    { id: 8, name: "Sunflower", price: "22,000 RWF", image: "flower6.jpg", category: "Tulips" },
  ];

  // Event handling for Add to Cart
  const handleAddToCart = (productName) => {
    console.log(`Added ${productName} to cart`); 
    alert(`Added ${productName} to cart!`);
  };

  // Group products by category
  const productsByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
        
        {Object.entries(productsByCategory).map(([category, categoryProducts]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
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