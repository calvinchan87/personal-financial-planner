import React from 'react';

const Input = (prop) => {
  
  return <div>
    <input type="text" placeholder="eg. June 2021" onChange={(event) => prop.setFilter(event.target.value)} ></input>
  
</div>
}

export default Input;

  // <button onClick={() => prop.setFilter("June")}>
  //   Filter June only
  // </button>