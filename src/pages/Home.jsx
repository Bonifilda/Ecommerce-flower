import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate("/products");
  };

  const handleAddToCart = (productName) => {
    alert(`Added ${productName} to cart!`);
  };

  const featuredProducts = [
    { id: 1, name: "Flower1", price: "15,000 RWF", image: "/Flower1.jpg", category: "Roses" },
    { id: 2, name: "Best", price: "12,000 RWF", image: "/bestflower.jpg", category: "Lilies" },
    { id: 3, name: "Popsicle", price: "25,000 RWF", image: "flower2.jpg", category: "Orchids" },
    { id: 4, name: "Sunflower Bouquet", price: "18,000 RWF", image: "flower3.jpg", category: "Seasonal" },
    { id: 5, name: "Good Flowers", price: "20,000 RWF", image: "flower4.jpg", category: "Lilies" },
    { id: 6, name: "Mixed Flower", price: "30,000 RWF", image: "flower5.jpg", category: "Mixed" },
    { id: 7, name: "Best", price: "14,000 RWF", image: "best.jpg", category: "Daisies" },
    { id: 8, name: "Sunflower", price: "22,000 RWF", image: "flower6.jpg", category: "Tulips" },
  ];

  return (
    <div>
      <HeroSection
        title="Welcome to FlowerShop Rwanda"
        subtitle="Beautiful Flowers, Grown with Love"
        description="Fresh, locally-grown flowers delivered across Kigali and beyond. Celebrate life's special moments with the beauty of Rwandan flora." 
        buttonText="Shop Now"
        onButtonClick={handleShopNow}
      />
      
    {/* // In Home.jsx - update the featured products grid section */}
<section className="py-12 sm:py-16 bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold text-center mb-12">Featured Flowers</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {featuredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
 