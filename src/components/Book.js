import React from "react";
import { useDispatch } from "react-redux";
import { deleteBooks, fetchBooks } from "../redux/books/booksSlice";

function Book({ book }) {
  const dispatch = useDispatch();
  const id = book[0];
  const { author, title, category } = book[1][0];

  const handleRemove = (id) => {
    dispatch(deleteBooks(id)).then(res => dispatch(fetchBooks())) ;
    
  };

  return (
    <div>
      <i>{category}</i>
      <br />
      <h2>{title}</h2>
      <h5>{author}</h5>
      <button type="button" onClick={() => handleRemove(id)}>
        remove
      </button>
      <br />
    </div>
  );
}

export default Book;
