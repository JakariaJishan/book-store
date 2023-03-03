import React from 'react';
import Book from './Book';
import bookApi from './book-Api';
import Form from './Form';

function Books() {
  return (
    <div>
      {bookApi.map((book) => <Book key={book.author} book={book} />)}
      <Form />
    </div>
  );
}

export default Books;
