import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const books = useSelector((state) => state.books.bookList);

  return (
    <div>
      {books.length !== 0
        ? books.map((book) => <Book key={book.id} book={book} />)
        : 'No Book Found'}
      <Form />
    </div>
  );
}

export default Books;
