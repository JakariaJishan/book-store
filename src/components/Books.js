import React from "react";
import { useSelector } from "react-redux";
import styles from '../styles/Books.module.css';
import Book from "./Book";
import Form from "./Form";

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div className={styles.panel}>
      <div>
        {books.isLoading && <h3>Loading books ...</h3>}
        {!books.isLoading && books.errorMsg ? (
          <h3>
            Error:
            {books.errorMsg}
          </h3>
        ) : null}
        {!books.isLoading && books.bookList
          ? Object.entries(books.bookList).map((book, index) => (
              <Book key={Math.random()} book={book} />
            ))
          : null}
      </div>

      <Form />
    </div>
  );
}

export default Books;
