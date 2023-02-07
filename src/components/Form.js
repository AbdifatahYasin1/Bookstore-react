import React from 'react';

const Form = () => (
  <div>
    <h1>Add new Book</h1>
    <input type="text" name="title" placeholder="Book Title" />
    <input type="text" name="author" placeholder="Author" />
    <button type="submit">Add Book</button>

  </div>
);

export default Form;
