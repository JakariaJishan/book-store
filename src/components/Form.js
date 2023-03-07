import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(newObj));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter book title"
        />
        <input
          type="text"
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="enter author name"
        />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default Form;
