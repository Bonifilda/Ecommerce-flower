// components/HeroSection.jsx
import React from 'react';

const HeroSection = ({ title, subtitle, description, buttonText, onButtonClick }) => {
  return (
    <section className="bg-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
        <h2 className="text-2xl md:text-3xl text-green-600 mb-6">{subtitle}</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
        <button 
          onClick={onButtonClick}
          className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition duration-300"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;