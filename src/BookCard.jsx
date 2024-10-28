import React from 'react';

const BookCard = ({ book }) => {
  return (
    <div className="max-w-xs w-72 h-96 rounded-lg overflow-hidden shadow-md m-4 bg-white transition-transform transform hover:scale-105 p-8">
      <img className="w-full h-52 object-cover" src={book.image} alt={book.title} />
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="font-bold text-xl mb-2">{book.title}</h2>
          <p className="text-gray-700 text-lg">{book.author}</p>
          <p className="text-gray-500 text-lg">{book.price}</p>
        </div>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
