import React from 'react';

function Book({ book }) {
  return (
    <div>
      {book.title}
      {book.author}
      <button type="button">remove</button>
    </div>
  );
}

export default Book;
