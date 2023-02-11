import React from 'react';
import Bookitems from './Bookitems';
import Form from './Form';

const container = () => (
  <div className="container">
    <div>

      <Bookitems />
      <div className="horizontal" />
      <Form />
    </div>
  </div>
);
export default container;
