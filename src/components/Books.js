import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Books = ({
  id, title, author, category,
}) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(removeBook(id));
  };
  return (
    <li>

      <h4 className="category">{category}</h4>
      <h2 className="title">{title}</h2>
      <h6 className="author">{author}</h6>

      <button
        className="button-outline"
        type="button"
        onClick={removeHandler}
      >
        Remove

      </button>

    </li>
  );
};

Books.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
export default Books;
