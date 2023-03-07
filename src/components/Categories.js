import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories[0])
  const handleStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <h3>{categories}</h3>
      <button type="button" onClick={handleStatus}>Check status</button>
    </div>
  );
}

export default Categories;
