import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
