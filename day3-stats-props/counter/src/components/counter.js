import { useState } from "react";

const Counter = ()=>{
    const [count, setCount] = useState(0);

    const handleChange = (value) => {
        if(count<=0 && value===-1){
            alert("You can't go below zero!");
         return;
        }
        if (value === 2) {
           setCount(count * value);
        }
        else {
           setCount(count + value);
        }
     }
  
     return (
        <div>
           <h1>React Counter</h1>
           <h2 className={count % 2 === 0 ? "green" : "red"}>{count}</h2>
           <button onClick={() => handleChange(1)}>Add</button>
           <button onClick={() => handleChange(-1)}>Subtract</button>
           <button onClick={() => handleChange(2)}>Double</button>
        </div>
     )
}
export {Counter};