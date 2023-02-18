import { createAsyncThunk } from '@reduxjs/toolkit';

const Add = 'redux/books/books/Add';
const Remove = 'bookstore/books/REMOVE';
const DISPLAY_BOOKS = 'bookstore/books/displayBooks';
const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/kIO6x6srXXBFVkkiZ0nH/books';
// actions

export const displayBooks = createAsyncThunk(
  DISPLAY_BOOKS,
  async (post, { dispatch }) => {
    const response = await fetch(URL);
    const data = await response.json();
    const books = Object.keys(data).map((id) => ({
      ...data[id][0],
      item_id: id,
    }));
    dispatch({
      type: DISPLAY_BOOKS,
      payload: books,
    });
  },
);

export const addBook = createAsyncThunk(
  Add, async (book, { dispatch }) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({ type: Add, payload: book });
  },
);

export const removeBook = createAsyncThunk(
  Remove,
  async (id, { dispatch }) => {
    await fetch(`${URL}/${id}`, { method: 'DELETE' });
    dispatch({ type: Remove, payload: id });
  },
);

const initialBookState = [];

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case DISPLAY_BOOKS:
      return action.payload;
    case Add:
      return [...state, action.payload];
    case Remove:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
