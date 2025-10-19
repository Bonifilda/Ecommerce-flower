import React from 'react';

const About = () => {
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About FlowerShop Rwanda</h1>
        
        {/* Company Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            FlowerShop Rwanda is your premier destination for beautiful, locally-grown flowers in Rwanda. 
            We specialize in providing fresh, high-quality floral arrangements for all occasions, from weddings 
            and birthdays to corporate events and everyday moments worth celebrating.
          </p>
        </section>

        {/* Our Mission */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to bring the natural beauty of Rwandan flora to homes and celebrations across the country 
            while supporting local farmers and promoting sustainable agriculture practices.
          </p>
        </section>

        {/* Why Choose Us */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🌱 Locally Grown</h3>
              <p>All our flowers are sourced from local Rwandan farms, ensuring freshness and supporting our community.</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🚚 Same Day Delivery</h3>
              <p>Free same-day delivery in Kigali for orders placed before 2 PM.</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">💝 Quality Guarantee</h3>
              <p>7-day freshness guarantee on all our floral arrangements.</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🎁 Custom Arrangements</h3>
              <p>Personalized floral designs for any occasion or preference.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;