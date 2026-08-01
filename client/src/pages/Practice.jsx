// import React, { useState } from 'react';

// function Practice() {

//     const [val, setVal] = useState(true);

//     const hideDetails = () => {
//         alert("Details are visible now!");
//         setVal(false);
//     };

//     return (
//         <div>
//             <h2>{val ? "Details Hidden" : "Details Visible"}</h2>

//             <button onClick={hideDetails}>
//                 Hide Details
//             </button>
//         </div>
//     );
// }

// export default Practice;

// import React, { useState } from 'react'

// function Practice() {

//     const [count,setCount] = useState(0);
    
//     const method = () => {
//         alert("Button has been clicked")
//         setCount(count*2)
//     }

//   return (
//     <div>
//         <h2> count : {count}</h2>
//         <button onClick={method}>Click me </button>
//     </div>
//   )
// }

// export default Practice

import React, { useEffect, useState } from 'react'

function Practice() {

    const[count,setCount] = useState(0);

     useEffect(() => {
         setTimeout(() => {
            setCount(count + 1);
         },2000);
    },[count]);

  return (
    <div>
        <button>Click mee</button>
        <h2>count: {count}</h2>
    </div>
  )
}

export default Practice