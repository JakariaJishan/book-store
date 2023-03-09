import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [],
  isLoading: false,
  errorMsg: '',
};

const URL_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/FfL4RPvLbK9C05U1RUvp/books/';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const res = await fetch(URL_API);
  const data = await res.json();
  return data;
});

export const postBooks = createAsyncThunk('books/postBooks', async (book) => {
  const res = await fetch(URL_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  });
  return JSON.stringify(res);
});

export const deleteBooks = createAsyncThunk('books/deleteBooks', async (id) => {
  const res = await fetch(URL_API + id, {
    method: 'DELETE',
  });
  return JSON.stringify(res);
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchBooks.pending, (state, action) => ({
      ...state,
      isLoading: true,
    }));

    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.bookList = action.payload;
      state.isLoading = false;
      state.errorMsg = '';
    });

    builder.addCase(fetchBooks.rejected, (state, action) => {
      state.errorMsg = action.error.message;
    });
  },
});

export const { addBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
