import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function Books() {
  const books = useSelector((state) => state.books.bookList);
  return (
    <div>
      {books.map((book) => <Book key={book.author} book={book} />)}
      <Form />
    </div>
  );
}

export default Books;
