import React, { useState } from 'react';

const Input = (prop) => {
  const [filter, setFilter] = useState("")
  return <div>
    
    <input type="text" placeholder="eg. Jun-21" onChange={(event) => setFilter(event.target.value)} value={filter}></input>
    <button onClick={() => prop.setFilter(filter)}></button>
    
  </div>
}

export default Input;

  // <button onClick={() => prop.setFilter("June")}>
  //   Filter June only
  // </button>