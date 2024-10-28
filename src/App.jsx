import React from 'react';
import Header from './Header';
import Hero from './Hero';
import BookList from './BookList';
import Footer from './Footer';

const App = () => {
  const books = [
    { id: 1, title: 'THE ENDS WITH US', author: 'MAYOK SONE', price: '$10', image: 'https://i.pinimg.com/564x/da/1e/92/da1e92ed90ffffef2c53461d35e700a1.jpg' },
    { id: 2, title: 'A GOOD GIRL GUIDE TO MURDER', author: 'HICH KON', price: '$150', image: 'https://i.pinimg.com/474x/27/4d/91/274d917a3a9cd3c4afc2ee888133855b.jpg' },
    { id: 3, title: 'ATOMIC HABITS', author: 'JAMES CLEAR', price: '$50', image: 'https://i.pinimg.com/236x/30/d7/59/30d759f5af80b6d22d129751273a26fc.jpg' },
    { id: 4, title: 'I DON`T LOVE YOU anymore ', author: 'RITHkIVE', price: '$125', image: 'https://i.pinimg.com/474x/b3/8a/04/b38a04edd406ede917bab66f6ab95d80.jpg' },
    { id: 5, title: 'WAY I USED TO BE', author: 'HARRTY GOWY', price: '$18', image: 'https://i.pinimg.com/236x/65/f4/41/65f441023fb007df12437bbffa809353.jpg' },
    { id: 1, title: 'GIRL IN PIECES', author: 'Author UNKNOWN', price: '$10', image: 'https://i.pinimg.com/236x/06/36/91/063691e957177d5d55503d0c1fe36cef.jpg' },
    { id: 1, title: 'IKIGAL', author: 'HROY MALW', price: '$10', image: 'https://i.pinimg.com/236x/32/92/17/329217edeaeea3e1d3dbb7baacfb1c73.jpg' },
    { id: 1, title: 'THE INROVERTORS WAY', author: 'JICKSON', price: '$10', image: 'https://i.pinimg.com/474x/16/43/fc/1643fca9922742aaf3e7e7d9185af66b.jpg' },
   
  ];

  return (
    <div>
      <Header />
      <Hero />
      <BookList books={books} />
      <Footer />
    </div>
  );
};

export default App;

