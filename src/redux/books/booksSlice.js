import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookList: [{}],
};

const URL_API =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kTk9Re5A72zBRgGfkQp7/books";

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const res = await fetch(URL_API);
  const data = await res.json();
  return data;
});

export const postBooks = createAsyncThunk("books/postBooks", async (book) => {
  const res = await fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  const data = await res.json();
  return data;
});

export const deleteBooks = createAsyncThunk("books/deleteBooks", async (id) => {
  const res = await fetch(URL_API + id, {
    method: "DELETE",
  });
  const data = await res.json();
  return data;
});

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

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => {});

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      Object.entries(action.payload).forEach(([key, value]) => {
        state.bookList[0][key] = value;
      });
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      console.log(action.error.message);
    });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
