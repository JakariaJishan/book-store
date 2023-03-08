import React from "react";
import { useDispatch } from "react-redux";

function Book({ book }) {
  const dispatch = useDispatch();
  const id = book[0];
  const { author, title, category } = book[1][0];

 

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
