import React, { useState } from 'react';

const Input = (prop) => {
  const [filter, setFilter] = useState("")
  return <div className="transaction-filter">
    
    <input class="form__field" type="text" placeholder="eg. Jun-21" onChange={(event) => setFilter(event.target.value)} value={filter}></input>
    <button type="button" class="btn btn--primary btn--inside uppercase" onClick={() => prop.setFilter(filter)}>Filter</button>
    
  </div>
}

export default Input;
