import React from "react";
import { useNavigate } from "react-router-dom";
import HeroSection from "../components/HeroSection"; 
import ProductCard from "../components/ProductCard"; 


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


  const featuredProducts = [
    {
      id: 1,
      name: "Flower1.",
      price: "15,000 RWF",
      image: "Flower1.jpg",
      category: "Roses"
    },
    {
      id: 2,
      name: "best",
      price: "12,000 RWF",
      image: "best.jpg",
      category: "Lilies"
    },
    {
      id: 3,
      name: "popsicle",
      price: "25,000 RWF",
      image: "popsicle.jpg",
      category: "Orchids"
    },
    {
      id: 4,
      name: "Sunflower Bouquet",
      price: "18,000 RWF",
      image: "sunflower.jpg",
      category: "Seasonal"
    },
    {
      id: 5,
      name: "pexels-",
      price: "20,000 RWF",
      image: "good.jpg",
      category: "Lilies"
    },
    {
      id: 6,
      name: "Mixed Flower",
      price: "30,000 RWF",
      image: "mixed flower.jpg",
      category: "Mixed"
    },
    {
      id: 7,
      name: "best",
      price: "14,000 RWF",
      image: "best.jpg",
      category: "Daisies"
    },
    {
      id: 8,
      name: "sunflower",
      price: "22,000 RWF",
      image: "sunflower.jpg",
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
      <section className="py-16 bg-gray-100">
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
 