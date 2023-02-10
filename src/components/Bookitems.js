import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Books from './Books';
import { displayBooks } from '../redux/books/books';

const Bookitems = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(displayBooks());
  }, []);
  return (
    <div className="book-items">
      {books.map((book) => (
        <Books
          key={book.item_id}
          id={book.item_id}
          title={book.title}
          author={book.author}
          category={book.category}
        />
      ))}
    </div>
  );
};

export default Bookitems;
