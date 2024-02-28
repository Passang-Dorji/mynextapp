"use client"
// import { useState } from "react"
// export default function Example() {
//    const [count,setCount]= useState(0)
//    console.log("i am running")
   
//    return (
//     <div>
//         <p> you clicked{count} times</p>
//         <button onClick={()=>setCount(count + 1)}>
    
//            click me

//         </button>
//     </div>
//    )
//}
import { useState, useEffect } from "react"

 export default function Counter() {
  // useState to manage the count state variable
  const [count, setCount] = useState(0);

  // useEffect to update the document title when count changes
  useEffect(() => {
    console.log("i am running")
    document.title = `Count: ${count}`;
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
// import React, { useState, useEffect } from 'react';

//   export default function Example() {
//   const [count, setCount] = useState(0);
//   // This effect will run after every render
//   useEffect(() => {
//     document.title = `You clicked ${count} times`;
//   });
  
//   return (
//     <div className="text -6xl text-center mt-80">
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }
