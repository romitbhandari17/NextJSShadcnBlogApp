// File: app/about/page.js

import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-6">
        Welcome to our blog! We are dedicated to sharing insightful articles and resources on various topics. Our mission is to provide valuable content that inspires and informs our readers.
      </p>
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Our Team</h2>
        <p className="text-gray-500 mb-4">We are a group of passionate individuals committed to delivering quality content.</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
