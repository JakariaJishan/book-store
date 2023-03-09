import React from "react";
import { useDispatch } from "react-redux";
import { deleteBooks, fetchBooks } from "../redux/books/booksSlice";
import styles from "../styles/Book.module.css";

function Book({ book }) {
  const dispatch = useDispatch();
  const id = book[0];
  const { author, title, category } = book[1][0];

  const handleRemove = (id) => {
    dispatch(deleteBooks(id)).then((res) => dispatch(fetchBooks()));
  };

  return (
    <div className={styles.panel}>
      <div className={styles.rootContent}>
        <h5>{category}</h5>
        <h2>{title}</h2>
        <p>{author}</p>
        <div className={styles.groupBtn}>
          <button type="button">Comments</button>
          <button type="button" onClick={() => handleRemove(id)}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className={styles.middleContent}>
        <div className={styles.circle}></div>
        <p>{Math.floor(Math.random() * 100)}%</p>
        <p>Completed</p>
      </div>
      <div className={styles.endContnet}>
        <p>CURRENT CHAPTER</p>
        <p>Chapter 17</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

export default Book;
