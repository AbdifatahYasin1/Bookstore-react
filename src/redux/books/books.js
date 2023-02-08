// Action Types
const Add = 'redux/books/books/Add';
const Remove = 'bookstore/books/REMOVE';

// Initial State

const initialState = {
  books: [
    {
      title: 'The Hunger Games', author: 'Suzanne Collins', id: 1,
    },
    {
      title: 'Dune', author: 'Frank Herbert', id: 2,
    },
    {
      title: 'Capital in the Twenty-First Century', author: 'Suzanne Collins', id: 3,
    },
    {
      title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', id: 4,
    },
    {
      title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', id: 5,
    },
    {
      title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', id: 6,
    },

  ],
};

export const addBook = (book) => ({
  type: Add,
  book,
});

export const removeBook = (bookId) => ({
  type: Remove,
  bookId,
});
export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case Add:
      return {
        ...state,
        books: [...state.books, action.book],
      };
    case Remove:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.bookId),
      };
    default:
      return state;
  }
}
