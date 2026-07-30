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

// import React, { useEffect, useState } from 'react'

// function Demo() {

//     const [count,setCount] = useState(0);

// //     useEffect (() => {
// //     }); //Runs after every render

// // useEffect (() => {
// // },[]); //runs after first render

// useEffect (() => { 
//     alert("count has been changed")
// },[count]); // runs when count changes

// // useEffect (() => {},[count,name]); //runs when count and name changes

//   return (
//     <div>
//        <h2>count:{count}</h2>
//        <button onClick={() => setCount(count+1)}>Increase</button>
//     </div>
//   )
// }

// export default Demo

import React, { useMemo, useState } from 'react'

function Demo() {

const[num,setNum] = useState(2);
const[val,setVal] = useState(0);

const square = useMemo(() => {
   return num*num;
},[num])

  return (
    <div>
        <h1>num : {num}</h1>
        <h2>square: {square}</h2>
        <button onClick={() => setNum(num+1)}>
            increase
        </button>
        <button onClick={() => setVal(val + 1)}>
            count:{val}
        </button>
    </div>
  )
}

export default Demo