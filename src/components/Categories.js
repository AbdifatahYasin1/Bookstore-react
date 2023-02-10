import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkStatus } from '../redux/categories/categories';

const CategoriesFunc = () => {
  const state = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();

  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (

    <div className="categories">
      <button type="button" onClick={handleCheckStatus}>
        Check Status
      </button>
      <p>{state}</p>
    </div>

  );
};

export default CategoriesFunc;
