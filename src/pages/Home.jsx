import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection"; // ✅ correct
import ProductCard from "../components/ProductCard"; // ✅ correct


const Home = () => {
  const navigate = useNavigate();

  // Event handling for navigation
  const handleShopNow = () => {
    navigate('/products');
  };

  // Event handling for Add to Cart
  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`); // Event handling demonstration
  };

  // Featured products data (at least 8)
  const featuredProducts = [
    {
      id: 1,
      name: "Rwandan Roses",
      price: "15,000 RWF",
      image: "https://via.placeholder.com/300x200/FF69B4/FFFFFF?text=Roses",
      category: "Roses"
    },
    {
      id: 2,
      name: "African Lilies",
      price: "12,000 RWF",
      image: "https://via.placeholder.com/300x200/9370DB/FFFFFF?text=Lilies",
      category: "Lilies"
    },
    {
      id: 3,
      name: "Tropical Orchids",
      price: "25,000 RWF",
      image: "https://via.placeholder.com/300x200/DA70D6/FFFFFF?text=Orchids",
      category: "Orchids"
    },
    {
      id: 4,
      name: "Sunflower Bouquet",
      price: "18,000 RWF",
      image: "https://via.placeholder.com/300x200/FFD700/FFFFFF?text=Sunflowers",
      category: "Seasonal"
    },
    {
      id: 5,
      name: "White Peace Lilies",
      price: "20,000 RWF",
      image: "https://via.placeholder.com/300x200/FFFFFF/000000?text=Peace+Lilies",
      category: "Lilies"
    },
    {
      id: 6,
      name: "Mixed Flower Basket",
      price: "30,000 RWF",
      image: "https://via.placeholder.com/300x200/FF6347/FFFFFF?text=Mixed+Basket",
      category: "Mixed"
    },
    {
      id: 7,
      name: "Gerbera Daisies",
      price: "14,000 RWF",
      image: "https://via.placeholder.com/300x200/FF4500/FFFFFF?text=Daisies",
      category: "Daisies"
    },
    {
      id: 8,
      name: "Tulip Collection",
      price: "22,000 RWF",
      image: "https://via.placeholder.com/300x200/FF1493/FFFFFF?text=Tulips",
      category: "Tulips"
    }
  ];

  return (
    <div>
      {/* Hero Section with Props */}
      <HeroSection 
        title="Welcome to FlowerShop Rwanda"
        subtitle="Beautiful Flowers, Grown with Love"
        description="Fresh, locally-grown flowers delivered across Kigali and beyond. Celebrate life's special moments with the beauty of Rwandan flora."
        buttonText="Shop Now"
        onButtonClick={handleShopNow} // Event handling via props
      />

      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Flowers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product} // Props passing
                onAddToCart={handleAddToCart} // Event handling via props
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
 