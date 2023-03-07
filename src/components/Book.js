import React from "react";
import { useDispatch } from "react-redux";
import { deleteBook } from "../redux/books/booksSlice";

function Book({ book }) {
  const displatch = useDispatch();
  const handleRemove = (id) => {
    console.log(id);
    displatch(deleteBook(id));
  };
  return (
    <div>
      <i>{book.category}</i>
      <br />
      <h2>{book.title}</h2>
      <h5>{book.author}</h5>
      <button type="button" onClick={() => handleRemove(book.id)}>
        remove
      </button>
      <br />
    </div>
  );
}

export default Book;
