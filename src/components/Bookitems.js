import { useSelector } from 'react-redux';
import Books from './Books';
import Form from './Form';

export default function Bookitems() {
  const books = useSelector((state) => state.books.books);

  return (

    <div className="books">
      <ul className="bookItems">

        {books.map((book) => (
          <li key={book.title + book.author}>
            <Books title={book.title} author={book.author} id={book.id} />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
}
