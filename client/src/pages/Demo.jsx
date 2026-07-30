// import React from 'react'

// function Demo() {

// const handleClick = () => {
//     alert("Button has been clicked!")
// }

//   return (
//     <div>
//         <button onClick={handleClick}>Register</button>
//     </div>
//   )
// }

// export default Demo;

import React, { useEffect, useState } from 'react'

function Demo() {

    const [count,setCount] = useState(0);

//     useEffect (() => {
//     }); //Runs after every render

// useEffect (() => {
// },[]); //runs after first render

useEffect (() => { 
    alert("count has been changed")
},[count]); // runs when count changes

// useEffect (() => {},[count,name]); //runs when count and name changes

  return (
    <div>
       <h2>count:{count}</h2>
       <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Demo