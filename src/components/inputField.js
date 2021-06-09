import React from 'react';

const Input = (prop) => {
  return <div>
  <button onClick={() => prop.setFilter("June")}>
    Filter June only
  </button>
</div>
}


export default Input;