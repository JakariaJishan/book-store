import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <input type="text" placeholder="enter book title" />
        <input type="text" placeholder="enter author name" />
        <button type="button">Add book</button>
      </form>
    </div>
  );
}

export default Form;
