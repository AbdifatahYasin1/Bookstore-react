import React from 'react';
import PropTypes from 'prop-types';

const Bookitems = (props) => {
  const { title, author } = props;
  return (
    <div>
      <li>{title}</li>
      <li>{author}</li>
    </div>
  );
};

Bookitems.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Bookitems;
