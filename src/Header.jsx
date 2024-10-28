import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Book Store</h1>
        <nav className="space-x-4">
          <a href="#home" className="hover:text-blue-200">Home</a>
          <a href="#books" className="hover:text-blue-200">Books</a>
          <a href="#about" className="hover:text-blue-200">About</a>
          <a href="#contact" className="hover:text-blue-200">Contact</a>
        </nav>
        <div>
          <button className="bg-gray-700 px-4 py-2 rounded-lg mr-2 hover:bg-gray-500">Login</button>
          <button className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-500">Signup</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
