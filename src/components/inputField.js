// import React from 'react';

// const Input = () => {
//     return (
      
//         <div>
//           <input>Search here</input>
//         </div>
        
//     )
  
   

// }


import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Input() {
  const [value, onChange] = useState(new Date());
  
  return (
    <div>
      <Calendar
        onChange={onChange}
        value={value}
        />
    </div>
  );
}
export default Input;