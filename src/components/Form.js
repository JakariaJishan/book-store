import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newObj));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          required
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter book title"
        />
        <input
          type="text"
          name="author"
          required
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="enter author name"
        />

        <select defaultValue="Category" onChange={(e) => setCategory(e.target.value)}>
          <option value="" hidden>Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Action">Action</option>
          <option value="Romance">Romance</option>
        </select>

        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default Form;
