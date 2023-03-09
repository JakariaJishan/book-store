import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
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

  const randomValue = Math.floor(Math.random() * 100);

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
      <div className={styles.secondPanel}>
      <div className={styles.middleContent}>
        <div className={styles.circle}>
          <CircularProgressbar
            value={randomValue}
            styles={{
              path: {
                stroke: "#0290FF",
                strokeLinecap: "butt",
                transition: "stroke-dashoffset 0.5s ease 0s",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
              trail: {
                stroke: "#d6d6d6",
                strokeLinecap: "butt",
                transform: "rotate(0.25turn)",
                transformOrigin: "center center",
              },
            }}
          />
          
        </div>
        <div>
          <p className={styles.percent}>{randomValue}%</p>
          <p className={styles.completed}>Completed</p>
        </div>
      </div>
      <div className={styles.endContent}>
        <p>CURRENT CHAPTER</p>
        <h3>Chapter 17</h3>
        <button type="button">UPDATE PROGRESS</button>
      </div>
      </div>
      
    </div>
  );
}

export default Book;
