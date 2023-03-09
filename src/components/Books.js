import React from "react";
import { useSelector } from "react-redux";
import Book from "./Book";
import Form from "./Form";

function Books() {
  const books = useSelector((state) => state.books.bookList);


  return (
    <div>
      <Form />
      {Object.entries(books).map((book, index) => (
        <Book key={index} book={book} />
      ))}
    </div>
  );
}

export default Books;
