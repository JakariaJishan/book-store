import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/books/booksSlice";
import Book from "./Book";
import Form from "./Form";

function Books() {
  const books = useSelector((state) => state.books.bookList[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div>
      {Object.entries(books).map((book, index) => (
        <Book key={index} book={book} />
      ))}
      <Form />
    </div>
  );
}

export default Books;
