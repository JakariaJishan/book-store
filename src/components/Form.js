import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchBooks, postBooks } from '../redux/books/booksSlice';
import styles from '../styles/Form.module.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const id = `item${uuidv4()}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      item_id: id,
      title,
      author,
      category,
    };

    dispatch(postBooks(newObj)).then((res) => dispatch(fetchBooks()));

    setAuthor('');
    setTitle('');
  };

  return (
    <div className={styles.panel}>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter Author"
        />

        <select
          defaultValue="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" hidden>
            Categories
          </option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
        </select>

        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default Form;
