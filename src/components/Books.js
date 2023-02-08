import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({ title, author, id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeBook(id));
  };

  return (

    <div className="book">

      <h2 className="title">{title}</h2>
      <h6 className="author">{author}</h6>

      <button className="btn-remove" type="button" onClick={handleRemove}>
        RemoveBook
      </button>

    </div>

  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
