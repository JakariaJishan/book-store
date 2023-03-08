import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postBooks } from "../redux/books/booksSlice";

function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const books = useSelector((state) => state.books.bookList[0]);
  const dispatch = useDispatch();

  const id = "item" + (Object.entries(books).length + 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      item_id: id,
      title,
      author,
      category,
    };

    dispatch(postBooks(newObj));

    setAuthor("");
    setTitle("");
  };

  // useEffect(() => {
  //   dispatch(fetchBooks());
  // }, [handleSubmit]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="enter book title"
        />
        <input
          type="text"
          name="author"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="enter author name"
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

        <button type="submit">Add book</button>
      </form>
    </div>
  );
}

export default Form;
