import React from 'react';

// ProductCard component that receives props
const ProductCard = ({ product, onAddToCart }) => {
  // Event handling for Add to Cart button
  const handleAddToCart = () => {
    onAddToCart(product.name);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.category}</p>
        <p className="text-2xl font-bold text-green-600 mt-2">{product.price}</p>
        <button 
          onClick={handleAddToCart} // Event handling
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;