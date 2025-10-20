// import React from 'react';

// const ProductCard = ({ product, onAddToCart }) => {
//   const handleAddToCart = () => {
//     onAddToCart(product.name);
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300">
//       {/* ✅ Responsive Image */}
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
//       />

//       {/* ✅ Responsive Content */}
//       <div className="p-4 sm:p-5 md:p-6 flex flex-col items-center text-center">
//         <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
//         <p className="text-gray-600 text-sm mt-1">{product.category}</p>
//         <p className="text-2xl font-bold text-green-600 mt-2">{product.price}</p>
//         <button
//           onClick={handleAddToCart}
//           className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 transition-colors"
//         >
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;
// components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">{product.category}</p>
        <p className="text-green-600 font-bold mt-2">{product.price}</p>
        <button
          onClick={() => onAddToCart(product.name)}
          className="w-full mt-4 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

