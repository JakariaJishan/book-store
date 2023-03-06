import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

function Book({ book }) {
  const displatch = useDispatch();
  const handleRemove = (id) => {
    displatch(deleteBook(id));
  };
  return (
    <div>
      {book.title}
      {book.author}
      <button type="button" onClick={() => handleRemove(book.id)}>remove</button>
    </div>
  );
}

export default Book;
