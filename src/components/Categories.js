import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();

  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button type="button" onClick={handleStatus}>Check status</button>
    </div>
  );
}

export default Categories;
