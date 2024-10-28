import React from 'react';
// Import image if you have one, e.g. import heroImage from '../assets/heroImage.png';

const Hero = () => {
  return (
    <section className="flex items-center justify-center bg-gray-100 h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between h-full p-8">
        
        {/* Left Text and Button Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">What to Read in the Leisure</h1>
          <p className="text-gray-600 mb-6 text-3xl">
            Your Gateway to Endless Adventures. Discover captivating stories, uncover hidden knowledge, and find the perfect book for every moment.
          </p>
          <div className="space-x-4">
            <button className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300">SHOP NOW</button>
            <button className="bg-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-600 transition duration-300">Explore More</button>
          </div>
        </div>
        
        {/* Right Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img 
            src="https://i.pinimg.com/564x/c8/4e/c5/c84ec52c5d41680b013d3a9d5a4639b8.jpg" // Replace with heroImage or the image URL
            alt="Books and Adventure"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
