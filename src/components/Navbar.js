import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
    </div>
  );
}

export default Navbar;
