// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-white shadow-lg">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           <Link to="/" className="text-xl font-bold text-blue-600">
//             🌸 FlowerShop
//           </Link>
//           <div className="flex space-x-8">
//             <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>
//             <Link to="/product" className="text-gray-700 hover:text-blue-500">Product</Link>
//             <Link to="/about" className="text-gray-700 hover:text-blue-500">About</Link>
//             <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
 import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          FlowerShop Rwanda
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-green-200">Home</Link>
          <Link to="/products" className="hover:text-green-200">Products</Link>
          <Link to="/about" className="hover:text-green-200">About</Link>
          <Link to="/contact" className="hover:text-green-200">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;