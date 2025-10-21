import React, { useState } from 'react';

const Contact = () => {
  // State for form inputs (Event handling demonstration)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Event handling for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Event handling for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData); // Event handling demonstration
    alert('Thank you for your message! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">📧 Email</h3>
                <p className="text-gray-700">info@flowershop.rw</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <p className="text-gray-700">+250 788 123 456</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">📍 Address</h3>
                <p className="text-gray-700">KK 15 Ave<br />Kigali, Rwanda</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg">🕒 Business Hours</h3>
                <p className="text-gray-700">
                  Monday - Friday: 7:00 AM - 8:00 PM<br />
                  Saturday - Sunday: 8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange} // Event handling
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange} // Event handling
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange} // Event handling
                  required
                  rows="5"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-md transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;