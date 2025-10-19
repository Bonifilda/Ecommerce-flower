import React from 'react';

const HeroSection = ({ title, subtitle, description, buttonText, onButtonClick }) => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-pink-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{title}</h1>
        <p className="text-xl md:text-2xl mb-6">{subtitle}</p>
        <p className="text-lg mb-8 max-w-2xl mx-auto">{description}</p>
        <button 
          onClick={onButtonClick} // Event handling
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;