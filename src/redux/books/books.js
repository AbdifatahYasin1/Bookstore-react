
const Add = 'bookstore/books/ADD';
const Remove = 'bookstore/books/REMOVE';


const booksReducer = (state = [], action) => {
    switch (action.type) {
        case Add:
        return [...state, action.payload];
        case Remove:
        return state.filter((book) => book.id !== action.payload);
        default:
        return state;
    }
    };
    export default booksReducer;

//action creators
export const addBook = (book) => ({
    type: Add,
    payload: book,
    });
    export const removeBook = (id) => ({
    type: Remove,
    payload: id,
    });

