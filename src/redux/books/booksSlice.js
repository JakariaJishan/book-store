import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [
    {
      id: "item1",
      title: "The Great Gatsby",
      author: "John Smith",
      category: "Fiction",
    },
  ],
};

export const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    deleteBook: (state, action) => {
      state.bookList = state.bookList.filter(
        (book) => book.id !== action.payload
      );
    },
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
